import React from 'react';
import { IPromisedState } from 'redux-promised-state';
import Failed from './context/Failed';
import { whenFinished } from './context/Finished';
import Idle from './context/Idle';
import { PromisedStateProvider } from './context/PromisedStateContext';
import { Running } from './context/Running';


interface IDogPicViewProps {
    randomDog: IPromisedState<string>,
    getARandomDog: () => any,
}

const DogImage = ({ value, alt }: { value: string, alt: string }) => (<img src={value} alt={alt} />);

const FinishedDogImage = whenFinished(DogImage);

export default class DogPicView extends React.PureComponent<IDogPicViewProps> {

    public componentDidMount() {
        this.props.getARandomDog();
    }

    public render() {
        return (
            <PromisedStateProvider value={this.props.randomDog} >
                <FinishedDogImage alt="some alt text" />
                <Running>
                    <img src={require('./svg/bars.svg')} alt="loading" />
                </Running>
                <Failed>
                    <h2>The request failed!</h2>
                </Failed>
                <Idle>
                    <h2>The request hasn't started yet</h2>
                </Idle>
            </PromisedStateProvider>
        );
    }
}