import { useRef, useCallback } from 'react';
import styles from './search_form.module.scss';

interface ISearchFormProps {
    onSubmitSearch: (searchTerm: string | undefined) => void;
};

export const SearchForm = ({
    onSubmitSearch
}: ISearchFormProps): JSX.Element => {
    const searchInputElement = useRef<any>(null);
    const submitSearch = useCallback((event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        const searchTerm = searchInputElement.current?.value;
        onSubmitSearch(searchTerm);
    }, []);
    return (
        <form
            className={styles.search_form}
            onSubmit={submitSearch}
            data-testid="search_form_root"
        >
            <input
                className={styles.search_form__input}
                ref={searchInputElement}
                type="text"
            />
            <button
                type="submit"
                className={styles.search_form__btn}
            >search</button>
        </form>
    )
};
