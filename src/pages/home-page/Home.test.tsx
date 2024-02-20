import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/utils';

import { Home } from './Home';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn()
}));

describe('HomePage', () => {
    it('should render the page', () => {
        renderWithProviders(<Home />);
        const homePageWrapper = screen.getByTestId('homepage_root');
        expect(homePageWrapper).toBeInTheDocument();
    });
});
