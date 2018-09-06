import { connect } from 'react-redux';
import { randomDogPromised } from './actions/randomDogPromised';
import DogPicView from './DogPicView';

const mapStateToProps = (state: any) => {
    return {
        randomDog: state.randomDog
    };
};

const mapDispatchToProps = {
    getARandomDog: () => randomDogPromised(
        fetch('https://dog.ceo/api/breeds/image/random').then(async response =>
            (await response.json()).message
        )
    ),
}

export default connect(mapStateToProps, mapDispatchToProps)(DogPicView);


