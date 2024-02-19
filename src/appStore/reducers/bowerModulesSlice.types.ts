import type { IPagination } from "@/shared_components";
import type { IBowerModules } from "@/components";
import { NetworkResponseStatus } from "./bowerModulesSlice.data";

export interface IBowerModulesDataCell {
    data: IBowerModules[];
    pagination: IPagination;
    currentSearchTerm: string;
    status: NetworkResponseStatus.idle | NetworkResponseStatus.loading | NetworkResponseStatus.succeeded | NetworkResponseStatus.failed;
    error: string;
};

export interface initialStateType {
    modules: IBowerModulesDataCell;
};

export interface IFetchBowerModulesParams {
    searchTerm?: string;
    sortOrder?: ISortOrder[];
};

export interface ISortOrder {
    name: string;
    order: 'asc' | 'desc';
};