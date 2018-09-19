import React from 'react';
import { idlePromisedState, IPromisedState } from 'redux-promised-state';

export const PromisedStateContext = React.createContext<IPromisedState<any>>(idlePromisedState<any>(null));

export const PromisedStateProvider = PromisedStateContext.Provider;
