import types from './types'


export const openCustomMenu = (position,docId) => {
    return {
        type : types.OPEN_CUSTOM_MENU,
        payload : {
            position,
            showMenu : true,
            documentId : docId
        }
    }
}

export const closeCustomMenu = () => {
    return {
        type : types.CLOSE_CUSTOM_MENU
    }
}

export const setPane = (num) => {
    return {
        type : types.SET_PANE,
        payload : {
            numberOfPanes : num
        }
    }
}