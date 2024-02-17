import type { IModules, ITableHeaders } from '@/appStore/reducers/bowerModulesSlice';
import styles from './table.module.scss';

interface ITable {
    headers: ITableHeaders[];
    items: IModules[];
    resourseName: string;
};

export const Table = ({
    headers,
    items,
    resourseName,
}: ITable): JSX.Element => {
    /*
        Build table headers
    */
    const renderTblHeaders = (): JSX.Element[] => (
        headers.map((header: ITableHeaders) => {
            const tblHeaderKey = `${resourseName}_tbl_head_${header.key}`;
            return (
                <th
                    key={tblHeaderKey}
                    className={styles.table__headers__cell}
                >
                    {header.title}
                </th>
            )
        })
    );
    /*
        Build table rows
    */
    const renderTblColumns = (): JSX.Element | JSX.Element[] => {
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
        return items.map((tblRowData: IModules, key: number) => {
            const tblRowKey = `${resourseName}_tbl_row_${key}`;
            const generateTblCells = () => (
                Object.keys(tblRowData).map((v) => (
                    (
                        <td
                            key={`${tblRowKey}_cell_${v}`}
                            className={styles.table__rows__cell}
                        >
                            {tblRowData[v as keyof IModules]}
                        </td>
                    )
                ))
            );
            return (
                <tr
                    key={tblRowKey}
                    className={styles.table__rows}
                >{generateTblCells()}</tr>
            )
        })
    };
    return (
        <table
            className={styles.table}
            data-testid="modules_table_root"
        >
            <thead>
                <tr className={styles.table__headers}>
                    {renderTblHeaders()}
                </tr>
            </thead>
            <tbody>
                {renderTblColumns()}
            </tbody>
        </table>
    )
};