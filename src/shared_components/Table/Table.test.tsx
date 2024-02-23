import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/utils';

import {
    bowerModulesInitState,
    bowerModulesTestData,
    bowerModulesTestDataHeaders,
} from '@/appStore/reducers/bowerModulesSlice.data';

import { Table } from './Table';

describe('Modules table', () => {
    const commonTestProps = {
        resourseName: 'test',
        itemTestId: 'table',
    };

    it('should render modules table', () => {
        const testModulesTableProps = {
            headers: bowerModulesTestDataHeaders,
            items: bowerModulesTestData,
            ...commonTestProps,
        };
        renderWithProviders(<Table {...testModulesTableProps} />, {
            preloadedState: {
                bowerModules: bowerModulesInitState
            }
        });
        const tableItems = screen.getAllByTestId(commonTestProps.itemTestId);
        expect(tableItems.length).toBeGreaterThan(0);
    });

    it('should render empty modules table', () => {
        const testModulesTableProps = {
            headers: [],
            items: [],
            resourseName: 'test',
            itemTestId: 'table',
        };
        renderWithProviders(<Table {...testModulesTableProps} />, {
            preloadedState: {
                bowerModules: bowerModulesInitState
            }
        });
        const tableItems = screen.queryByTestId(commonTestProps.itemTestId);
        expect(tableItems).toBe(null);
    });
});
