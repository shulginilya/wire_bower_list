import styles from './header.module.scss';

export const Header = (): JSX.Element => (
    <div
        className={styles.header}
        data-testid="header_root"
    >
        header
    </div>
);
