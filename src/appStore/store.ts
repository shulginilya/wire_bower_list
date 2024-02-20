import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import bowerModulesSlice from "@/appStore/reducers/bowerModulesSlice";

import type { PartialDeep } from 'type-fest';

export const store = configureStore({
    reducer: {
        bowerModulesSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type PartialRootState = PartialDeep<RootState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
