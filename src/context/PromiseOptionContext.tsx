import React from 'react';
import { PromiseOption } from 'redux-promise-option';

export const PromiseOptionContext = React.createContext<PromiseOption<string>>({
    isPresent: false,
    value: undefined,
});

export const PromiseOptionProvider = PromiseOptionContext.Provider;
