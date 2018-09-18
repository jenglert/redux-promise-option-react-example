import React from 'react';
import { IPromisedState } from 'redux-promised-state';
import Absent from './context/Absent';
import { whenPresent } from './context/Present';
import { PromisedStateProvider } from './context/PromisedStateContext';

interface IDogPicViewProps {
    randomDog: IPromisedState<string>,
    getARandomDog: () => any,
}

const DogImage = ({ value }: { value: string }) => (<img src={value} alt='a sweet dog picture' />);

export default class DogPicView extends React.PureComponent<IDogPicViewProps> {

    public componentDidMount() {
        this.props.getARandomDog();
    }

    public render() {
        return (
            <PromisedStateProvider value={this.props.randomDog} >
                {whenPresent(DogImage)}
                <Absent>
                    <img src={require('./svg/bars.svg')} alt="loading" />
                </Absent>
            </PromisedStateProvider>
        );
    }
}