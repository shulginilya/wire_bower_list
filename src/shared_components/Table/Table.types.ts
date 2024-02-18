import type { IBowerModules } from '@/components';

export interface ITableHeaders {
    key: string;
    title: string;
};

export interface ITable {
    headers: ITableHeaders[];
    items: IBowerModules[];
    resourseName: string;
};