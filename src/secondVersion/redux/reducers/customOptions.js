import types from '../actions/types'
const initialState = {
    position : [0,0],
    showMenu : false,
    documentId : -1
}


const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case types.OPEN_CUSTOM_MENU:
            return {
                ...state, 
                position : actions.payload.position,
                showMenu : actions.payload.showMenu,
                documentId : actions.payload.documentId
            }

        case types.CLOSE_CUSTOM_MENU:
            return {
                ...state, 
                position : [0,0],
                showMenu : false,
                documentId : -1
            }
    
        default:
            return state;
    }
}

export default reducer