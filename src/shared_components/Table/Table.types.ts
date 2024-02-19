import type { IBowerModules } from '@/components';

export interface ITableHeaders {
    key: string;
    title: string;
    onRender?: () => JSX.Element | null;
};

export interface ITable {
    headers: ITableHeaders[];
    items: IBowerModules[];
    resourseName: string;
};