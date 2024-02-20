import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';

import { setupStore } from '@/appStore/store';
import type { AppStore, RootState } from '@/appStore/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: Partial<RootState>;
    store?: AppStore;
};

export const renderWithProviders = (
    ui: React.ReactElement,
    {
        preloadedState = {},
        store = setupStore(preloadedState),
        ...renderOptions
    }: ExtendedRenderOptions = {}
) => {
    const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => (
        <Provider store={store}>{children}</Provider>
    );
    return {
        store,
        ...render(ui, { wrapper: Wrapper, ...renderOptions })
    };
};
