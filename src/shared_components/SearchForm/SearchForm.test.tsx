import { render, screen } from '@testing-library/react';
import { SearchForm } from './SearchForm';

describe('SearchForm', () => {
    const onSubmitSearchHandlerMock = jest.fn();

    beforeEach(() => {
        render(<SearchForm
            onSubmitSearch={onSubmitSearchHandlerMock}
        />);
    });

    it('should render search form', () => {
        const searchFormWrapper = screen.getByTestId('search_form_root');
        expect(searchFormWrapper).toBeInTheDocument();
    });
});
