import styles from './sidebar.module.scss';

export const Sidebar = (): JSX.Element => (
    <div
        className={styles.sidebar}
        data-testid="sidebar_root"
    >
        sidebar
    </div>
);
