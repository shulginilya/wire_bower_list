import {
    render,
    screen,
    fireEvent,
    waitFor,
} from '@testing-library/react';
import { SearchForm } from './SearchForm';

describe('SearchForm', () => {
    const onSubmitSearchHandlerMock = jest.fn();
    const mockSearchTerm = 'react';

    it('should call prop functtion uppon form submit', async () => {
        render(<SearchForm
            onSubmitSearch={onSubmitSearchHandlerMock}
        />);
        const searchInput = screen.getByTestId('search_form_input');
        const searchButton = screen.getByTestId('search_form_btn');
        fireEvent.input(searchInput, {
            target: {
                value: mockSearchTerm
            }
        });
        fireEvent.submit(searchButton);
        await waitFor(() => {
            expect(onSubmitSearchHandlerMock).toHaveBeenCalled();
        });
    });
});
