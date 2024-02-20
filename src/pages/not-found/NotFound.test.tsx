import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/utils';

import { NotFound } from './NotFound';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn()
}));

describe('404 page', () => {
    it('should render 404 page', () => {
        renderWithProviders(<NotFound />);
        const notFoundPageWrapper = screen.getByTestId('not_found_root');
        expect(notFoundPageWrapper).toBeInTheDocument();
    });
});
