import { render, screen } from '@testing-library/react';

import { SearchForm } from './SearchForm';

describe('SearchForm', () => {
    const onSubmitSearchHandlerMock = jest.fn();

    it('should render search form', () => {
        render(<SearchForm
            onSubmitSearch={onSubmitSearchHandlerMock}
        />);
        const searchFormWrapper = screen.getByTestId('search_form_root');
        expect(searchFormWrapper).toBeInTheDocument();
    });
});
