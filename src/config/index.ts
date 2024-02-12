interface ICommonConfig {
    apiEndpoint: string;
    apiKey: string;
};

interface IModulesTableConfig {
    modulesPerPage: number;
};

export const commonConfig: ICommonConfig = {
    apiEndpoint: 'https://libraries.io/api',
    apiKey: '3b9105ec36ec3f4d878033ead704a6e8',
};

export const modulesTableConfig: IModulesTableConfig = {
    modulesPerPage: 5
};
