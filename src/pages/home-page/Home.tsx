import { MainLayout } from "@/layouts";
import styles from './home.module.scss';

export const Home = (): JSX.Element => (
    <MainLayout>
        <div
            className={styles.home}
            data-testid="homepage_root"
        >
        </div>
    </MainLayout>
);
