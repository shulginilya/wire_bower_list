import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
} from "@reduxjs/toolkit";

import { RootState } from "@/appStore/store";

import { makeRequest } from "@/utils";

/*
    We define state structure
*/
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
    modules: IModules[];
    status: Status.idle | Status.loading | Status.succeeded | Status.failed;
    error: string | null;
};
const initialState: initialStateType = {
    modules: [],
    status: Status.idle,
    error: null
};

/*
    Load users data from the server
*/
export const fetchBowerModules = createAsyncThunk('bower_modules/fetchBowerModules', async (url: string) => {
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
                state.modules = modules;
            })
    }
});

export const selectData = (state: RootState) => state.bowerModulesSlice;

export default bowerModulesSlice.reducer;
