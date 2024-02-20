import type { IBowerModules } from "@/components";
import type { initialStateType, IFetchBowerModulesParams } from "./bowerModulesSlice.types";
import { buildSortingString } from './bowerModulesSlice.utils';
import { NetworkResponseStatus } from "./bowerModulesSlice.data";

import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
} from "@reduxjs/toolkit";

import { RootState } from "@/appStore/store";

import { makeRequest } from "@/utils";
import { resourceFetchConfig, modulesTableConfig } from '@/config';

/*
    We define state structure
*/
const initialState: initialStateType = {
    modules: {
        data: [],
        pagination: {
            currentPage: 1,
            recordsCount: 0,
            recordsPerPage: modulesTableConfig.recordsPerPage,
        },
        currentSearchTerm: '',
        status: NetworkResponseStatus.idle,
        error: ''
    },
};

/*
    Load users data from the server
*/
export const fetchBowerModules = createAsyncThunk('bower_modules/fetchBowerModules', async ({
    searchTerm,
    sortOrder = [],
}: IFetchBowerModulesParams) => {
    const sortString = buildSortingString({
        incomingSortOrder: sortOrder
    });
    const sortUrlString = sortString ? `&sort=${sortString}` : '';
    const url = `${resourceFetchConfig.apiEndpoint}=${searchTerm}${sortUrlString}&api_key=${resourceFetchConfig.apiKey}`;
    const modulesData = await makeRequest({
        url
    });
    return modulesData;
});

/*
    Slice definition
*/
export const bowerModulesSlice = createSlice({
    name: "bowerModulesSlice",
    initialState,
    reducers: {
        paginateModulesTbl: (state, action: PayloadAction<number>) => {
            const page = action.payload;
            state.modules.pagination.currentPage = page;
        },
        setCurrentSearchTerm: (state, action: PayloadAction<string>) => {
            const currentSearchTerm = action.payload;
            state.modules.currentSearchTerm = currentSearchTerm;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchBowerModules.pending, (state) => {
                state.modules.status = NetworkResponseStatus.loading;
            })
            .addCase(fetchBowerModules.rejected, (state) => {
                state.modules.status = NetworkResponseStatus.failed;
                state.modules.error = 'API endpoint error';
            })
            .addCase(fetchBowerModules.fulfilled, (state, action: PayloadAction<IBowerModules[]>) => {
                state.modules.status = NetworkResponseStatus.succeeded;
                const initModules = action.payload;
                const mappedModules = initModules.map(moduleInstance => ({
                    name: moduleInstance.name,
                    repository_url: moduleInstance.repository_url,
                    stars: moduleInstance.stars,
                }));
                state.modules.data = mappedModules;
                state.modules.pagination.recordsCount = initModules.length;
                state.modules.pagination.currentPage = 1;
            })
    }
});

export const selectData = (state: RootState) => state.bowerModulesSlice;

export const {
    paginateModulesTbl,
    setCurrentSearchTerm,
} = bowerModulesSlice.actions;

export default bowerModulesSlice.reducer;
