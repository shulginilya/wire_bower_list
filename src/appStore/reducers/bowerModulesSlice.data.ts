import { modulesTableConfig } from '@/config';

export enum NetworkResponseStatus {
    idle = 'idle',
    loading = 'loading',
    succeeded = 'succeeded',
    failed = 'failed'
};

export const bowerModulesInitState = {
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