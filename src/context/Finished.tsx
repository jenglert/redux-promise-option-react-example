import React from 'react';
import { PromisedStateContext } from './PromisedStateContext';
import { IPropsWithValue, PropsWithoutValue } from './Types';

export class Finished<T> extends React.PureComponent<{ children: React.ReactNode }> {
    public render() {
        return (
            <PromisedStateContext.Consumer>
                {
                    ({ whenStateIs }) => whenStateIs({
                        failed: () => null,
                        finished: (apiResult: T) => this.props.children,
                        idle: () => null,
                        running: () => null,
                    })
                }
            </PromisedStateContext.Consumer>
        );
    }
}

export function whenFinished<T, P extends IPropsWithValue<T>>(Component: React.ComponentType<P>): 
            React.StatelessComponent<PropsWithoutValue<P>> {
    return (props: PropsWithoutValue<P>) => {
        return (
            <PromisedStateContext.Consumer>
                {
                    ({ whenStateIs }) => whenStateIs({
                        failed: () => null,
                        finished: (apiResult: T) => <Component {...props} value={apiResult} />,
                        idle: () => null,
                        running: () => null,
                    })
                }
            </PromisedStateContext.Consumer>
        );
    }
}
