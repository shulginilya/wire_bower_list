import { useNavigate } from "react-router-dom";

import styles from './sidebar.module.scss';

export const Sidebar = (): JSX.Element => {
    const navigate = useNavigate();
    return (
        <div className={styles.sidebar}>
            <ul className={styles.sidebar__list}>
                <li
                    data-testid="sidebar_list_item"
                    className={styles.sidebar__list__item}
                >
                    <button
                        className={styles.sidebar__list__item__link}
                        onClick={() => navigate('/')}
                    >Home</button>
                </li>
                <li
                    data-testid="sidebar_list_item"
                    className={styles.sidebar__list__item}
                >
                    <button
                        className={styles.sidebar__list__item__link}
                        onClick={() => navigate('/demo')}
                    >Demo Page</button>
                </li>
            </ul>
        </div>
    )
};

