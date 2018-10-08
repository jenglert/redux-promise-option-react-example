import React from 'react';
import { PromisedStateContext } from './PromisedStateContext';

export class Running<T> extends React.PureComponent<{ children: React.ReactNode }> {
    public render() {
        return (
            <PromisedStateContext.Consumer>
                {
                    ({ whenStateIs }) => whenStateIs({
                        failed: () => null,
                        finished: (apiResult: T) => null,
                        idle: () => null,
                        running: () => this.props.children,
                    })
                }
            </PromisedStateContext.Consumer>
        );
    }
}

export function whenRunning<P>(Component: React.ComponentType<P>): React.StatelessComponent<P> {
    return (props: P) => {
        return (
            <PromisedStateContext.Consumer>
                {
                    ({ whenStateIs }) => whenStateIs({
                        failed: () => null,
                        finished: (apiResult: any) => null,
                        idle: () => null,
                        running: () => <Component {...props} />,
                    })
                }
            </PromisedStateContext.Consumer>
        );
    }
}
