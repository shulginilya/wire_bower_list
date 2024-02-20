import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/utils';

import { DemoPage } from './DemoPage';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn()
}));

describe('Demo page', () => {
    it('should render demo page', () => {
        renderWithProviders(<DemoPage />);
        const demoPagePageWrapper = screen.getByTestId('demo_page_root');
        expect(demoPagePageWrapper).toBeInTheDocument();
    });
});
