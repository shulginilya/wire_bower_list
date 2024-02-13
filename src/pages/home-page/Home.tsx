import { useCallback } from "react";
import { MainLayout } from "@/layouts";
import { SearchForm } from "@/components";
import styles from './home.module.scss';

export const Home = (): JSX.Element => {
    const onSubmitSearchHandler = useCallback((searchTerm: string | undefined) => {
        console.log('searchTerm: ', searchTerm);
    }, []);
    return (
        <MainLayout>
            <div
                className={styles.home}
                data-testid="homepage_root"
            >
                <SearchForm
                    onSubmitSearch={onSubmitSearchHandler}
                />
            </div>
        </MainLayout>
    )
};
