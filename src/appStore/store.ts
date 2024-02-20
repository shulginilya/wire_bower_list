// import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import bowerModulesSlice from "@/appStore/reducers/bowerModulesSlice";

// import type { PartialDeep } from 'type-fest';

// export const store = configureStore({
//     reducer: {
//         bowerModulesSlice,
//     },
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type PartialRootState = PartialDeep<RootState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     RootState,
//     unknown,
//     Action<string>
// >;

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bowerModulesReducer from "@/appStore/reducers/bowerModulesSlice";
// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
    bowerModules: bowerModulesReducer
});
export function setupStore(preloadedState?: Partial<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
