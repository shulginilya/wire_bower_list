import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { TableSortCell } from './TableSortCell';

describe('Table sort cell', () => {
    const mockOnSort = jest.fn();

    beforeEach(() => {
        const testTableSortCellProps = {
            name: 'test',
            title: 'test',
            onSort: mockOnSort,
        };
        render(<TableSortCell {...testTableSortCellProps} />);
    });

    it('should sort desc order', async () => {
        const descSortBtn = screen.getByTestId('tbl_sort_desc_btn');
        fireEvent.click(descSortBtn);
        await waitFor(() => {
            expect(mockOnSort).toHaveBeenCalledWith({
                name: 'test',
                sortOrder: 'desc'
            });
        });
    });

    it('should sort asc order', async () => {
        const ascSortBtn = screen.getByTestId('tbl_sort_desc_asc');
        fireEvent.click(ascSortBtn);
        await waitFor(() => {
            expect(mockOnSort).toHaveBeenCalledWith({
                name: 'test',
                sortOrder: 'asc'
            });
        });
    });
});
