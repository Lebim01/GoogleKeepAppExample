import { createStore } from 'redux';

let initialState = {}
const reducer = (state, action) => {
    return { ...state, lastAction : action.type }
}
let store = createStore(reducer, initialState);
export default store