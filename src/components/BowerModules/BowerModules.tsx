import { useEffect } from "react";
import {
    Pagination,
    Table,
    SearchForm,
    Spinner,
} from "@/shared_components";

import {
    useAppDispatch,
    useAppSelector,
} from "@/appStore/hooks";
import {
	fetchBowerModules,
    selectData,
} from "@/appStore/reducers/bowerModulesSlice";
import { NetworkResponseStatus } from "@/appStore/reducers/bowerModulesSlice.data";

import styles from './bower_modules.module.scss';

export const BowerModules = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { modules } = useAppSelector(selectData);
    /*
        Fetch initial data
        !!! refactor that , avoid double server hit !!!
    */
    useEffect(() => {
        dispatch(fetchBowerModules(''));
    }, []);
    /*
        Search form submit handler
    */
    const onSubmitSearchHandler = (searchTerm: string | undefined): void => {
        if (searchTerm) {
            dispatch(fetchBowerModules(searchTerm));
        }
    };
    /*
        Modules table props
    */
    const tableProps = {
        headers: [
            {
                key: "name",
                title: "Name",
            },
            {
                key: "repository_url",
                title: "Repository Url",
            },
            {
                key: "stars",
                title: "Stars",
            }
        ],
        items: modules.data,
        resourseName: 'modules',
    };
    return (
        <div
            className={styles.bower_modules}
            data-testid="bower_modules_root"
        >
            <SearchForm
                onSubmitSearch={onSubmitSearchHandler}
            />
            <div className={styles.bower_modules__tbl}>
                <Table { ...tableProps } />
            </div>
            <Pagination { ...modules.pagination } />
            {
                modules.status === NetworkResponseStatus.loading && <Spinner />
            }
        </div>
    )
};
