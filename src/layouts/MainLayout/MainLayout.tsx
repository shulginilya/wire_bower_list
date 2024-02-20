import {
    Header,
    Footer,
    Sidebar,
} from '@/components';
import type { IMainLayout } from './MainLayout.types';

import styles from './main_layout.module.scss';

export const MainLayout = ({
    children
}: IMainLayout): JSX.Element => (
    <>
        <Header />
        <div
            className={styles.main_layout}
            data-testid="main_layout_root"
        >
            <div className={styles.main_layout__navi}><Sidebar /></div>
            <div className={styles.main_layout__content}>{children}</div>
        </div>
        <Footer />
    </>
);
