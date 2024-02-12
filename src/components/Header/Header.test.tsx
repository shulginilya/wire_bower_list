import { render, screen } from '@testing-library/react';

import { Header } from './Header';

describe('Header', () => {
    it('should render Header', () => {
        render(<Header />);
        const headerWrapper = screen.getByTestId('header_root');
        expect(headerWrapper).toBeInTheDocument();
    });
});
