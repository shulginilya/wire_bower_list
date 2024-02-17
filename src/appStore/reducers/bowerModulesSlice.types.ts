import type { IPagination } from "@/shared_components";
import type { IBowerModules } from "@/components";
import { NetworkResponseStatus } from "./bowerModulesSlice.data";

export interface IBowerModulesDataCell {
    data: IBowerModules[];
    pagination: IPagination;
    status: NetworkResponseStatus.idle | NetworkResponseStatus.loading | NetworkResponseStatus.succeeded | NetworkResponseStatus.failed;
    error: string | null;
};

export interface initialStateType {
    modules: IBowerModulesDataCell;
};
