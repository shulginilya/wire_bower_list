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

export const bowerModulesTestData = [
    {
        name: 'test1',
        repository_url: 't',
        stars: 10,
    },
    {
        name: 'test2',
        repository_url: 't',
        stars: 9,
    },
    {
        name: 'test3',
        repository_url: 't',
        stars: 8,
    },
    {
        name: 'test4',
        repository_url: 't',
        stars: 7,
    },
    {
        name: 'test5',
        repository_url: 't',
        stars: 6,
    },
    {
        name: 'test6',
        repository_url: 't',
        stars: 5,
    },
    {
        name: 'test7',
        repository_url: 't',
        stars: 4,
    }
];

export const bowerModulesTestDataHeaders = [
    {
        key: "name",
        title: "Name",
    },
    {
        key: "repository_url",
        title: "Repository Url",
    },
    {
        key: "stars",
        title: "Stars",
    }
];
