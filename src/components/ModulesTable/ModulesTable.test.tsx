import { render, screen } from '@testing-library/react';

import { ModulesTable } from './ModulesTable';

describe('Modules table component', () => {
    it('should render modules table component', () => {
        const testModulesTableComponentProps = {
            test: 'test'
        };
        render(<ModulesTable {...testModulesTableComponentProps} />);
        const modulesTableComponentWrapper = screen.getByTestId('modules_table_root');
        expect(modulesTableComponentWrapper).toBeInTheDocument();
    });
});
