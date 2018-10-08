import React from 'react';
import { PromisedStateContext } from './PromisedStateContext';

export default class Idle extends React.PureComponent<{ children: React.ReactNode }> {
    public render() {
        return (
            <PromisedStateContext.Consumer>
                {
                    ({ whenStateIs }) => whenStateIs({
                        failed: () => null,
                        finished: (apiResult: any) => null,
                        idle: () => this.props.children,
                        running: () => null,
                    })
                }
            </PromisedStateContext.Consumer>
        );
    }
}

export function whenIdle<P>(Component: React.ComponentType<P>): React.StatelessComponent<P> {
    return (props: P) => {
        return (
            <PromisedStateContext.Consumer>
                {
                    ({ whenStateIs }) => whenStateIs({
                        failed: () => null,
                        finished: (apiResult: any) => null,
                        idle: () => <Component {...props} />,
                        running: () => null,
                    })
                }
            </PromisedStateContext.Consumer>
        );
    }
}