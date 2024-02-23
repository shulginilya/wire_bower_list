import { useCallback } from 'react';
import type {
    ITableSortCell,
    ISortColumnParams,
} from './TableSortCell.types'; 

import styles from './table_sort_cell.module.scss';

export const TableSortCell = ({
    name,
    title,
    onSort
}: ITableSortCell): JSX.Element => {
    const sortColumn = useCallback(({ name, sortOrder }: ISortColumnParams): void => {
        const sortParams = {
            name,
            sortOrder
        };
        onSort(sortParams);
    }, [onSort]);
    return (
        <div
            data-testid="table_sort_cell"
            className={styles.table_sort_cell}
        >
            {title}
            <div className={styles.table_sort_cell__actions}>
                <button
                    onClick={() => sortColumn({
                        name,
                        sortOrder: 'asc'
                    })}
                    data-testid="tbl_sort_desc_asc"
                    className={styles.table_sort_cell__actions__btn}
                >orig</button>
                <button
                    onClick={() => sortColumn({
                        name,
                        sortOrder: 'desc'
                    })}
                    data-testid="tbl_sort_desc_btn"
                    className={styles.table_sort_cell__actions__btn}
                >desc</button>
            </div>
        </div>
    )
};
