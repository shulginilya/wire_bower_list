import { render, screen } from '@testing-library/react';

import { Sidebar } from './Sidebar';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn()
}));

describe('Sidebar', () => {
    it('should render sidebar', () => {
        render(<Sidebar />);
        const listItems = screen.getAllByTestId("sidebar_list_item");
        expect(listItems.length).toEqual(2);
    });
});
