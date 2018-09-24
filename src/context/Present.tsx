import React from 'react';
import { PromisedStateContext } from './PromisedStateContext';
import { ReactComponentWithValue } from './Types';

export class Present extends React.PureComponent<{ children: React.ReactNode }> {
    public render() {
        return (
            <PromisedStateContext.Consumer>
                {
                    ({ whenStateIs }) => whenStateIs({
                        failed: () => null,
                        finished: (apiResult: any) => this.props.children,
                        idle: () => null,
                        running: () => null,
                    })
                }
            </PromisedStateContext.Consumer>
        );
    }
}

export function whenPresent<T>(Component: ReactComponentWithValue<T>) {
    return (
        <PromisedStateContext.Consumer>
            {
                ({ whenStateIs }) => whenStateIs({
                    failed: () => null,
                    finished: (apiResult: any) => <Component value={apiResult} />,
                    idle: () => null,
                    running: () => null,
                })
            }
        </PromisedStateContext.Consumer>
    );
}
