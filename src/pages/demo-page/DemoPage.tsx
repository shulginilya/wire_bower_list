import { MainLayout } from '@/layouts';
import styles from './demo_page.module.scss';

export const DemoPage = (): JSX.Element => (
    <MainLayout>
        <div
            className={styles.demo_page}
            data-testid="demo_page_root"
        >
            demo content
        </div>
    </MainLayout>
);
