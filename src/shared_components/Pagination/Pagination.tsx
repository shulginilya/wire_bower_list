import { useMemo } from 'react';
import type { IPaginationComponent } from './Pagination.types'; 

import styles from './pagination.module.scss';

export const Pagination = ({
    currentPage,
    recordsPerPage,
    recordsCount,
    onPaginateHandler,
}: IPaginationComponent): JSX.Element => {
    const pages = useMemo((): number[] => {
        if (!recordsCount) {
            return [];
        }
        const numberOfPages = Math.ceil(recordsCount / recordsPerPage);
        const pagesArray = [];
        for (let i = 1; i <= numberOfPages; i++) {
            pagesArray.push(i);
        }
        return pagesArray;
    }, [currentPage, recordsCount]);
    const renderPagination = useMemo((): JSX.Element => {
        const pageItems = pages.map(page => (
            <li
                key={`page_${page}`}
                className={styles.pagination__list__item}
                data-testid="pagination_pages"
            >
                <button
                    className={(currentPage === page) ? `${styles.pagination__list__item__link} ${styles.pagination__list__item__link_active}` : styles.pagination__list__item__link}
                    onClick={() => onPaginateHandler(page)}
                >{page}</button>
            </li>
        ));
        return (
            <ul className={styles.pagination__list}>
                {pageItems}
            </ul>
        );
    }, [currentPage, recordsCount]);
    return (
        <div
            className={styles.pagination}
            data-testid="modules_pagination_root"
        >
            {renderPagination}
        </div>
    )
};
