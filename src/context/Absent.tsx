import React from 'react';
import { PromisedStateContext } from './PromisedStateContext';

export default class Absent extends React.PureComponent<{ children: React.ReactNode }> {
    public render() {
        return (
            <PromisedStateContext.Consumer>
            {   ({onTransition}) => onTransition({
                    failed: () => null,
                    finished: (apiResult: any) => null,
                    idle: () => null,
                    running: () => this.props.children,
                })
            }
            </PromisedStateContext.Consumer>
        );
    }
}
