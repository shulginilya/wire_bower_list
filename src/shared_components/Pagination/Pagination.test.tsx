import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/utils';

import { bowerModulesInitState } from '@/appStore/reducers/bowerModulesSlice.data';
import { Pagination } from './Pagination';

describe('Modules table pagination', () => {
    const onSubmitSearchHandlerMock = jest.fn();
    
    const emptyDataProps = {
        recordsCount: 0,
    };

    const noneEmptyDataProps = {
        recordsCount: 30,
    };

    it('should render pagination with none empty data', () => {
        const paginationProps = {
            ...bowerModulesInitState.modules.pagination,
            ...noneEmptyDataProps,
            ...{
                onPaginateHandler: onSubmitSearchHandlerMock,
            }
        };
        renderWithProviders(<Pagination {...paginationProps} />, {
            preloadedState: {
                bowerModules: bowerModulesInitState
            }
        });
        const pages = screen.getAllByTestId('pagination_pages');
        expect(pages.length).toBeGreaterThan(0);
    });

    it('should not render pagination when there are no data available', () => {
        const paginationProps = {
            ...bowerModulesInitState.modules.pagination,
            ...emptyDataProps,
            ...{
                onPaginateHandler: onSubmitSearchHandlerMock,
            }
        };
        renderWithProviders(<Pagination {...paginationProps} />, {
            preloadedState: {
                bowerModules: bowerModulesInitState
            }
        });
        const pages = screen.queryByTestId('pagination_pages');
        expect(pages).toBe(null);
    });
});
