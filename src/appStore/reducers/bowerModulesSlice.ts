import type { IBowerModules } from "@/components";
import type { initialStateType } from "./bowerModulesSlice.types";
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
        status: NetworkResponseStatus.idle,
        error: ''
    },
};

/*
    Load users data from the server
*/
export const fetchBowerModules = createAsyncThunk('bower_modules/fetchBowerModules', async (searchTerm: string) => {
    const url = `${resourceFetchConfig.apiEndpoint}=${searchTerm}&sort=stars&api_key=${resourceFetchConfig.apiKey}`;
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
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchBowerModules.pending, (state) => {
                state.modules.status = NetworkResponseStatus.loading;
            })
            .addCase(fetchBowerModules.rejected, (state) => {
                state.modules.status = NetworkResponseStatus.failed;
                state.modules.error = 'api error';
            })
            .addCase(fetchBowerModules.fulfilled, (state, action: PayloadAction<IBowerModules[]>) => {
                state.modules.status = NetworkResponseStatus.succeeded;
                const initModules = action.payload;
                const mappedModules = initModules.slice(0, modulesTableConfig.recordsPerPage).map(moduleInstance => ({
                    name: moduleInstance.name,
                    repository_url: moduleInstance.repository_url,
                    stars: moduleInstance.stars,
                }));
                state.modules.data = mappedModules;
                state.modules.pagination.recordsCount = initModules.length;
            })
    }
});

export const selectData = (state: RootState) => state.bowerModulesSlice;

export default bowerModulesSlice.reducer;
