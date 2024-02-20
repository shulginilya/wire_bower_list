import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/utils';

import { NetworkResponseStatus } from '@/appStore/reducers/bowerModulesSlice.data';

import { BowerModules } from './BowerModules';

describe('Bower modules component', () => {
    it('should render bower modules component', () => {
        renderWithProviders(<BowerModules />, {
            preloadedState: {
                bowerModules: {
                    modules: {
                        data: [],
                        pagination: {
                            currentPage: 1,
                            recordsCount: 0,
                            recordsPerPage: 5,
                        },
                        currentSearchTerm: '',
                        status: NetworkResponseStatus.idle,
                        error: ''
                    },
                }
            }
        })
        const bowerModulesComponentWrapper = screen.getByTestId('bower_modules_root');
        expect(bowerModulesComponentWrapper).toBeInTheDocument();
    });
});
