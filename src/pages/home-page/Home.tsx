import { MainLayout } from "@/layouts";
import { ModulesTable } from "@/components";

import styles from './home.module.scss';

export const Home = (): JSX.Element => (
    <MainLayout>
        <div
            className={styles.home}
            data-testid="homepage_root"
        >
            <ModulesTable />
        </div>
    </MainLayout>
);
