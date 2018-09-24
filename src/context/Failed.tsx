import React from 'react';
import { PromisedStateContext } from './PromisedStateContext';

export default class Failed extends React.PureComponent<{ children: React.ReactNode }> {
    public render() {
        return (
            <PromisedStateContext.Consumer>
                {
                    ({ whenStateIs }) => whenStateIs({
                        failed: () => this.props.children,
                        finished: (apiResult: any) => null,
                        idle: () => null,
                        running: () => null,
                    })
                }
            </PromisedStateContext.Consumer>
        );
    }
}
