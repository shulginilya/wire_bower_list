export interface ITableSortCell {
    name: string;
    title: string;
    onSort: ({ name, sortOrder}: ISortColumnParams) => void;
};

export interface ISortColumnParams {
    name: string;
    sortOrder: 'asc' | 'desc';
};
