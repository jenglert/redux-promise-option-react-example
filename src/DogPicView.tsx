import React from 'react';
import { PromiseOption } from 'redux-promise-option';
import Absent from './context/Absent';
import { whenPresent } from './context/Present';
import { PromiseOptionProvider } from './context/PromiseOptionContext';

interface IDogPicViewProps {
    randomDog: PromiseOption<string>,
}

const DogImage = (value: string) => (
    <img src={value} alt='a sweet dog picture' />
)

export default class DogPicView extends React.PureComponent<IDogPicViewProps> {

    public render() {
        return (
            <PromiseOptionProvider value={this.props.randomDog} >
                {whenPresent(DogImage)}
                <Absent>
                    <img src={require('./svg/bars.svg')} alt="loading" />
                </Absent>
            </PromiseOptionProvider>
        );
    }
}