import { connect } from 'react-redux';
import { randomDogPromised } from './actions/randomDogPromised';

const mapStateToProps = (state: any) => {

};

const mapDispatchToProps = {
    getARandomDog: dispatch => dispatch(randomDogPromised(
        fetch('https://dog.ceo/api/breeds/image/random').then(response =>
            response.json.message
        )
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(DocPicView);


