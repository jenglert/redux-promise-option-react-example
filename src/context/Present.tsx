import React from 'react';
import { PromisedStateContext } from './PromisedStateContext';

export class Present extends React.PureComponent<{ children: React.ReactNode }> {
    public render() {
        return (
            <PromisedStateContext.Consumer>
            {   ({onTransition}) => 
                    onTransition({
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

export function whenPresent<T>(Component: any) {
    return (
        <PromisedStateContext.Consumer>
        {
            ({onTransition}) => onTransition({
                failed: () => null,
                finished: (apiResult: any) => <Component value={apiResult} />,
                idle: () => null,
                running: () => null,
            })
        }
        </PromisedStateContext.Consumer>
    );
}
