import React from 'react';
import { PromiseOptionContext } from './PromiseOptionContext';

export default class Absent extends React.PureComponent<{ children: React.ReactNode }> {
    public render() {
        return (
            <PromiseOptionContext.Consumer>
                {({ isPresent }) => !isPresent ? this.props.children : null}
            </PromiseOptionContext.Consumer>
        );
    }
}