import {
    Pagination,
    Table,
    SearchForm,
} from "@/shared_components";

import {
    useAppDispatch,
    useAppSelector,
} from "@/appStore/hooks";
import {
	fetchBowerModules,
    selectData,
} from "@/appStore/reducers/bowerModulesSlice";

import styles from './modules_table.module.scss';

export const ModulesTable = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const {
		modules,
		status,
	} = useAppSelector(selectData);
    console.log('modules: ', modules);
    console.log('status: ', status);
    /*
        Search form submit handler
    */
    const onSubmitSearchHandler = (searchTerm: string | undefined): void => {
        console.log('searchTerm: ', searchTerm);
        if (searchTerm) {
            dispatch(fetchBowerModules(searchTerm));
        }
    };
    /*
        Modules table props
    */
    const tableProps = {
        test: 'test',
    };
    return (
        <div
            className={styles.modules_table}
            data-testid="modules_table_root"
        >
            <SearchForm
                onSubmitSearch={onSubmitSearchHandler}
            />
            <Table { ...tableProps } />
            <Pagination { ...modules.pagination } />
        </div>
    )
};
