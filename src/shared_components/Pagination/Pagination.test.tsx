import { render, screen } from '@testing-library/react';

import { Pagination } from './Pagination';

describe('Modules table pagination', () => {
    it('should render modules table pagination', () => {
        const testModulesTablePaginationProps = {
            currentPage: 1,
            recordsCount: 0,
            recordsPerPage: 0,
        };
        render(<Pagination {...testModulesTablePaginationProps} />);
        const modulesTablePaginationWrapper = screen.getByTestId('modules_pagination_root');
        expect(modulesTablePaginationWrapper).toBeInTheDocument();
    });
});
