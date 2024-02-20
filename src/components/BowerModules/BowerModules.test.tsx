import { render, screen } from '@testing-library/react';

import { BowerModules } from './BowerModules';

jest.mock('@/appStore/hooks', () => ({
    ...jest.requireActual('@/appStore/hooks'),
    useAppDispatch: () => jest.fn()
}));

jest.mock('@/appStore/hooks', () => ({
    ...jest.requireActual('@/appStore/hooks'),
    useAppSelector: () => jest.fn(() => ({
        modules: {
            data: [],
            pagination: {
                currentPage: 1,
                recordsCount: 0,
                recordsPerPage: 0,
            },
            currentSearchTerm: '',
            status: '',
            error: ''
        }
    }))
}));

describe('Bower modules component', () => {
    it('should render bower modules component', () => {
        render(<BowerModules />);
        const bowerModulesComponentWrapper = screen.getByTestId('bower_modules_root');
        expect(bowerModulesComponentWrapper).toBeInTheDocument();
    });
});
