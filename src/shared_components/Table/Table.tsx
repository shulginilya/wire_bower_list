import { useMemo } from 'react';
import type { IBowerModules } from '@/components';
import type {
    ITableHeaders,
    ITable,
} from './Table.types';
import styles from './table.module.scss';

export const Table = ({
    headers,
    items,
    resourseName,
    itemTestId,
}: ITable): JSX.Element => {
    /*
        Build table headers
    */
    const renderTblHeaders = useMemo((): JSX.Element[] => (
        headers.map((header: ITableHeaders) => {
            const tblHeaderKey = `${resourseName}_tbl_head_${header.key}`;
            return (
                <th
                    key={tblHeaderKey}
                    className={styles.table__headers__cell}
                >
                    {header.onRender ? header.onRender() : header.title}
                </th>
            )
        })
    ), []);
    /*
        Build table rows
    */
    const renderTblColumns = useMemo((): JSX.Element | JSX.Element[] => {
        if (items.length === 0) {
            return (
                <tr className={styles.table__empty}>
                    <td
                        className={styles.table__empty__cell}
                        colSpan={headers.length}
                    >
                        Packages are not found
                    </td>
                </tr>
            )
        }
        return items.map((tblRowData: IBowerModules, key: number) => {
            const tblRowKey = `${resourseName}_tbl_row_${key}`;
            const generateTblCells = () => (
                Object.keys(tblRowData).map((v) => (
                    (
                        <td
                            key={`${tblRowKey}_cell_${v}`}
                            className={styles.table__rows__cell}
                        >
                            {tblRowData[v as keyof IBowerModules]}
                        </td>
                    )
                ))
            );
            return (
                <tr
                    key={tblRowKey}
                    className={styles.table__rows}
                    data-testid={itemTestId}
                >{generateTblCells()}</tr>
            )
        })
    }, [items]);
    return (
        <table
            className={styles.table}
            data-testid="modules_table_root"
        >
            <thead>
                <tr className={styles.table__headers}>
                    {renderTblHeaders}
                </tr>
            </thead>
            <tbody>
                {renderTblColumns}
            </tbody>
        </table>
    )
};
