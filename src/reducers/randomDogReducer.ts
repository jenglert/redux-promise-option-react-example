import { idlePromisedState } from "redux-promised-state";
import { RANDOM_DOG_FETCHED_KEY } from "../actions/randomDogPromised";

const defaultState = idlePromisedState<React.ReactNode>(null);

export const randomDogReducer = (state: any = defaultState, action: any) => {
    if (action.type === RANDOM_DOG_FETCHED_KEY) {
        return {
            ...action.promisedState
        }
    }

    return state;
}