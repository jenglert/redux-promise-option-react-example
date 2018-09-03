
export const RANDOM_DOG_FETCHED_KEY = 'randomDogFetched';

export const randomDogPromised = (doggoPromise: Promise<string>) => ({
    promise: doggoPromise,
    type: RANDOM_DOG_FETCHED_KEY,
});