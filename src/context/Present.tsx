import React from 'react';
import { PromiseOptionContext } from './PromiseOptionContext';

export class Present extends React.PureComponent<{ children: React.ReactNode }> {
    public render() {
        return (
            <PromiseOptionContext.Consumer>
                {({ isPresent }) => isPresent ? this.props.children : null}
            </PromiseOptionContext.Consumer>
        );
    }
}

type propsToElement<T> = (value: T) => React.ReactElement<T>;

export function whenPresent<T>(Component: propsToElement<T>) {
    return function WhenPresentComponent(props: any) {
        return (
            <PromiseOptionContext.Consumer>
                {({ isPresent, value }) => isPresent ? <Component {...props} value={value} /> : null}
            </PromiseOptionContext.Consumer>
        );
    };
}
