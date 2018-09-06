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

// type propsToElement<T> = (value: T) => React.Component<{ value: T }>;

export function whenPresent<T>(Component: any) {
    return (
        <PromiseOptionContext.Consumer>
            {({ isPresent, value }) => {
                return isPresent ? <Component value={value} /> : null
            }
            }
        </PromiseOptionContext.Consumer>
    );
}
