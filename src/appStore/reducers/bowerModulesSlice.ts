import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
} from "@reduxjs/toolkit";

import { RootState } from "@/appStore/store";

import { makeRequest } from "@/utils";
import { commonConfig } from '@/config';

/*
    We define state structure
*/
export interface ITableHeaders {
    key: string;
    title: string;
};
export interface IPagination {
    currentPage: number;
    recordsCount: number;
    recordsPerPage: number;
};
interface IModulesDataCell {
    data: IModules[];
    pagination: IPagination;
    status: Status.idle | Status.loading | Status.succeeded | Status.failed;
    error: string | null;
};
export interface IModules {
    name: string;
    repository_url: string;
    stars: number;
};
export enum Status {
    idle = 'idle',
    loading = 'loading',
    succeeded = 'succeeded',
    failed = 'failed'
};
interface initialStateType {
    modules: IModulesDataCell;
};
const paginationConfig = {
    recordsPerPage: 5
};
const initialState: initialStateType = {
    modules: {
        data: [],
        pagination: {
            currentPage: 1,
            recordsCount: 0,
            recordsPerPage: paginationConfig.recordsPerPage,
        },
        status: Status.idle,
        error: ''
    },
};

/*
    Load users data from the server
*/
export const fetchBowerModules = createAsyncThunk('bower_modules/fetchBowerModules', async (searchTerm: string) => {
    const url = `${commonConfig.apiEndpoint}=${searchTerm}&sort=stars&api_key=${commonConfig.apiKey}`;
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
                state.modules.status = Status.loading;
            })
            .addCase(fetchBowerModules.rejected, (state) => {
                state.modules.status = Status.failed;
                state.modules.error = 'api error';
            })
            .addCase(fetchBowerModules.fulfilled, (state, action: PayloadAction<IModules[]>) => {
                state.modules.status = Status.succeeded;
                const initModules = action.payload;
                const mappedModules = initModules.slice(0, paginationConfig.recordsPerPage).map(moduleInstance => ({
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
