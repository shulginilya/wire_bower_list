import { useEffect } from 'react';
import { modulesTableConfig } from '@/config';
import {
    Pagination,
    Table,
    SearchForm,
    Spinner,
    TableSortCell,
} from "@/shared_components";

import type { ISortColumnParams } from "@/shared_components";

import {
    useAppDispatch,
    useAppSelector,
} from "@/appStore/hooks";
import {
	fetchBowerModules,
    paginateModulesTbl,
    setCurrentSearchTerm,
    selectData,
} from "@/appStore/reducers/bowerModulesSlice";
import { NetworkResponseStatus } from "@/appStore/reducers/bowerModulesSlice.data";

import styles from './bower_modules.module.scss';

export const BowerModules = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { modules } = useAppSelector(selectData);
    /*
        Sync modules
    */
    useEffect(() => {
        dispatch(fetchBowerModules({
            searchTerm: modules.currentSearchTerm
        }));
    }, [modules.currentSearchTerm]);
    /*
        Search form submit handler
    */
    const onSubmitSearchHandler = (searchTerm: string): void => {
        dispatch(setCurrentSearchTerm(searchTerm));
    };
    /*
        Paginatiton click handler
    */
    const onPaginateHandler = (page: number): void => {
        dispatch(paginateModulesTbl(page));
    };
    /*
        Table sort action handler
    */
    const onSortHandler = ({ name, sortOrder }: ISortColumnParams): void => {
        dispatch(fetchBowerModules({
            searchTerm: modules.currentSearchTerm,
            sortOrder: [
                {
                    name,
                    order: sortOrder,    
                }
            ]
        }));
    };
    /*
        Modules table props
    */
    const tableItems = modules.data.slice((modules.pagination.currentPage - 1) * modulesTableConfig.recordsPerPage, modulesTableConfig.recordsPerPage * modules.pagination.currentPage);
    const tableProps = {
        headers: [
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
                onRender: () => {
                    const starsHeaderCellProps = {
                        name: 'stars',
                        title: 'Stars',
                        onSort: onSortHandler
                    };
                    return <TableSortCell { ...starsHeaderCellProps } />;
                }
            }
        ],
        items: tableItems,
        resourseName: 'modules',
    };
    /*
        Pagination component props
    */
    const paginationProps = {
        ...modules.pagination,
        onPaginateHandler,
    };
    return (
        <div
            className={styles.bower_modules}
            data-testid="bower_modules_root"
        >
            <SearchForm
                onSubmitSearch={onSubmitSearchHandler}
            />
            {
                modules.error ? (
                    <div className={styles.bower_modules__error}>{modules.error}</div>
                ) : (
                    <>
                        <div className={styles.bower_modules__tbl}>
                            <Table { ...tableProps } />
                        </div>
                        <Pagination { ...paginationProps } />
                    </>
                )
            }
            {
                modules.status === NetworkResponseStatus.loading && <Spinner />
            }
        </div>
    )
};
