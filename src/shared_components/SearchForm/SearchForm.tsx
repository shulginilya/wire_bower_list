import { useRef, useCallback } from 'react';
import type { ISearchFormProps } from './SearchForm.types';

import styles from './search_form.module.scss';

export const SearchForm = ({
    onSubmitSearch
}: ISearchFormProps): JSX.Element => {
    const searchInputElement = useRef<HTMLInputElement>(null);
    const submitSearch = useCallback((event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const searchTerm = searchInputElement.current?.value || '';
        onSubmitSearch(searchTerm);
    }, [onSubmitSearch, searchInputElement.current?.value]);
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
