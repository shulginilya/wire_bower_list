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
interface IModulesDataCell {
    data: IModules[];
    pagination: {
        currentPage: number;
    }
};
interface IModules {
    test: string;
};
export enum Status {
    idle = 'idle',
    loading = 'loading',
    succeeded = 'succeeded',
    failed = 'failed'
};
interface initialStateType {
    modules: IModulesDataCell;
    status: Status.idle | Status.loading | Status.succeeded | Status.failed;
    error: string | null;
};
const initialState: initialStateType = {
    modules: {
        data: [],
        pagination: {
            currentPage: 1
        }
    },
    status: Status.idle,
    error: null
};

/*
    Load users data from the server
*/
export const fetchBowerModules = createAsyncThunk('bower_modules/fetchBowerModules', async (searchTerm: string) => {
    // https://libraries.io/api/search?q=grunt&page=1&per_page=5&api_key=3b9105ec36ec3f4d878033ead704a6e8
    const url = `${commonConfig.apiEndpoint}=${searchTerm}&page=1&per_page=5&sort=stars&api_key=${commonConfig.apiKey}`;
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
                state.status = Status.loading;
            })
            .addCase(fetchBowerModules.rejected, (state) => {
                state.status = Status.failed;
                state.error = 'api error';
            })
            .addCase(fetchBowerModules.fulfilled, (state, action: PayloadAction<IModules[]>) => {
                state.status = Status.succeeded;
                const modules = action.payload;
                console.log('modules: ', modules);
                state.modules.data = modules;
            })
    }
});

export const selectData = (state: RootState) => state.bowerModulesSlice;

export default bowerModulesSlice.reducer;
