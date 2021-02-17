import types from '../actions/types'
const initialState = {
    numberOfPanes : 1
}

const reducer = (state=initialState, actions) => {
    switch (actions.type) {
        case types.SET_PANE:
            return {
                ...state, numberOfPanes : actions.payload.numberOfPanes
            }
    
        default:
            return state;
    }
}

export default reducer