import { MainLayout } from "@/layouts";
import { SearchForm } from "@/components";

import { useAppDispatch } from "@/appStore/hooks";
import {
	fetchBowerModules
} from "@/appStore/reducers/bowerModulesSlice";

import styles from './home.module.scss';

export const Home = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const onSubmitSearchHandler = (searchTerm: string | undefined): void => {
        console.log('searchTerm: ', searchTerm);
        if (searchTerm) {
            dispatch(fetchBowerModules(searchTerm));
        }
    };
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
