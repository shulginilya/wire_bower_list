import { render, screen } from '@testing-library/react';

import { DemoPage } from './DemoPage';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn()
}));

describe('Demo page', () => {
    it('should render demo page', () => {
        render(<DemoPage />);
        const demoPagePageWrapper = screen.getByTestId('demo_page_root');
        expect(demoPagePageWrapper).toBeInTheDocument();
    });
});
