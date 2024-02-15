import styles from './table.module.scss';

interface ITable {
    test: any;
};

export const Table = ({
    test
}: ITable): JSX.Element => {
    return (
        <div
            className={styles.table}
            data-testid="modules_table_root"
        >
            modules table
        </div>
    )
};
