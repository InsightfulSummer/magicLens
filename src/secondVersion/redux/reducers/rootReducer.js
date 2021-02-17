import {
    combineReducers
} from 'redux'
import customOptionsReducer from '../reducers/customOptions'
import paneReducer from '../reducers/paneReducer'

const rootReducer = combineReducers({
    customOptionsReducer,
    paneReducer
})

export default rootReducer