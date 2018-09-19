import React from 'react';
import { PromisedStateContext } from './PromisedStateContext';

export default class Idle extends React.PureComponent<{ children: React.ReactNode }> {
    public render() {
        return (
            <PromisedStateContext.Consumer>
            {   ({onTransition}) => {
                    console.log('onTransition', onTransition);  // tslint:disable-line
                    return onTransition({
                        failed: () => null,
                        finished: (apiResult: any) => null,
                        idle: () => this.props.children,
                        running: () => null,
                    })
                }
            }
            </PromisedStateContext.Consumer>
        );
    }
}
