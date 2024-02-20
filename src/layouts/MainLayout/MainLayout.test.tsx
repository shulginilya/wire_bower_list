import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/utils';

import { MainLayout } from './MainLayout';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn()
}));

describe('Main Layout', () => {
    it('should render main layout', () => {
        renderWithProviders(<MainLayout />);
        const mainLayoutWrapper = screen.getByTestId('main_layout_root');
        expect(mainLayoutWrapper).toBeInTheDocument();
    });
});
