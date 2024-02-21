import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/utils';

import { bowerModulesInitState } from '@/appStore/reducers/bowerModulesSlice.data';

import { BowerModules } from './BowerModules';

describe('Bower modules component', () => {
    it('should render bower modules component', () => {
        renderWithProviders(<BowerModules />, {
            preloadedState: {
                bowerModules: bowerModulesInitState
            }
        })
        const bowerModulesComponentWrapper = screen.getByTestId('bower_modules_root');
        expect(bowerModulesComponentWrapper).toBeInTheDocument();
    });
});
