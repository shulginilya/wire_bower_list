import { render, screen } from '@testing-library/react';

import { BowerModules } from './BowerModules';

describe('Bower modules component', () => {
    it('should render bower modules component', () => {
        render(<BowerModules />);
        const bowerModulesComponentWrapper = screen.getByTestId('bower_modules_root');
        expect(bowerModulesComponentWrapper).toBeInTheDocument();
    });
});
