import React from 'react';

export interface IPropsWithValue<T> {
    value: T;
}

export type PropsWithoutValue<P> = Pick<P, Exclude<keyof P, 'value'>>;

export type ReactComponentTypeWithValue<T> = React.ComponentType<IPropsWithValue<T>>;

export type ReactComponentWithValue<T> = React.Component<IPropsWithValue<T>>;