import {
    useMemo,
    useCallback,
    memo,
} from 'react';
import { modulesTableConfig } from '@/config';
import {
    Pagination,
    Table,
    SearchForm,
    Spinner,
    TableSortCell,
} from "@/shared_components";

import type { ISortColumnParams } from "@/shared_components";
import type {
    ITable,
    IPaginationComponent,
} from '@/shared_components';

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
        Search form submit handler
    */
    const onSubmitSearchHandler = useCallback((searchTerm: string): void => {
        dispatch(setCurrentSearchTerm(searchTerm));
        dispatch(fetchBowerModules({
            searchTerm
        }));
    }, []);
    /*
        Paginatiton click handler
    */
    const onPaginateHandler = useCallback((page: number): void => {
        dispatch(paginateModulesTbl(page));
    }, []);
    /*
        Table sort action handler
    */
    const onSortHandler = useCallback(({name, sortOrder}: ISortColumnParams): void => {
        dispatch(fetchBowerModules({
            searchTerm: modules.currentSearchTerm,
            sortOrder: [
                {
                    name,
                    order: sortOrder,    
                }
            ]
        }));
    }, [modules.currentSearchTerm, dispatch]);
    /*
        Modules table props
    */
    const tableItems = modules.data.slice((modules.pagination.currentPage - 1) * modulesTableConfig.recordsPerPage, modulesTableConfig.recordsPerPage * modules.pagination.currentPage);
    const tableProps = useMemo((): ITable => ({
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
    }), [tableItems]);
    /*
        Pagination component props
    */
    const paginationProps = useMemo((): IPaginationComponent => ({
        ...modules.pagination,
        onPaginateHandler,
    }), [modules.pagination, onPaginateHandler]);
    /*
        Preloader component
    */
    const MemoizedSpinner = memo(() => (
        <Spinner />
    ));
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
                modules.status === NetworkResponseStatus.loading && <MemoizedSpinner />
            }
        </div>
    )
};
