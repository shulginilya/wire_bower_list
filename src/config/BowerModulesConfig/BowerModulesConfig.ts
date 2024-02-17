import type {
    IResourceFetchConfig,
    IModulesTableConfig,
} from './BowerModulesConfig.types';

export const resourceFetchConfig: IResourceFetchConfig = {
    apiEndpoint: 'https://libraries.io/api/search?q',
    apiKey: '3b9105ec36ec3f4d878033ead704a6e8',
};

export const modulesTableConfig: IModulesTableConfig = {
    recordsPerPage: 5
};