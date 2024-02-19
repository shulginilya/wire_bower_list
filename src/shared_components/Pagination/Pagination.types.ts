export interface IPagination {
    currentPage: number;
    recordsCount: number;
    recordsPerPage: number;
};

export interface IPaginationComponent extends IPagination {
    onPaginateHandler: (page: number) => void;
};
