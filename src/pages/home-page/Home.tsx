import { MainLayout } from "@/layouts";
import { BowerModules } from "@/components";

import styles from './home.module.scss';

export const Home = (): JSX.Element => (
    <MainLayout>
        <div
            className={styles.home}
            data-testid="homepage_root"
        >
            <BowerModules />
        </div>
    </MainLayout>
);
