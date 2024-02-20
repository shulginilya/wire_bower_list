import type { MockStore } from 'redux-mock-store';
import type { PartialRootState } from '@/appStore/store';
import { configureStore, type Middleware } from "@reduxjs/toolkit";

export const createMockStore = (state: PartialRootState, middlewares: Middleware[] = []) => {
    return null;
};
