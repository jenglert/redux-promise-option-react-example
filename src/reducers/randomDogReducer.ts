import { RANDOM_DOG_FETCHED_KEY } from "../actions/randomDogFetched";

const defaultState = {
    isPresent: false,
    value: null,
};

export const randomDogReducer = (state: any = defaultState, action: any) => {
    if (action.type === RANDOM_DOG_FETCHED_KEY) {
        return {
            isPresent: action.isPresent,
            value: action.value,
        }
    }

    return state;
}