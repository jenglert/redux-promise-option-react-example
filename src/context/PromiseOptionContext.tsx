import React from 'react';
import { PromiseOption } from 'redux-promise-option';

export const PromiseOptionContext = React.createContext<PromiseOption<any>>({
    isPresent: false,
    value: undefined,
});

export const PromiseOptionProvider = PromiseOptionContext.Provider;
