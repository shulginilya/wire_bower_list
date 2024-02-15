import { render, screen } from '@testing-library/react';

import { Table } from './Table';

describe('Modules table', () => {
    it('should render modules table', () => {
        const testModulesTableProps = {
            test: 'test'
        };
        render(<Table {...testModulesTableProps} />);
        const modulesTableWrapper = screen.getByTestId('modules_table_root');
        expect(modulesTableWrapper).toBeInTheDocument();
    });
});
