import {
    combineReducers
} from 'redux'
import customOptionsReducer from '../reducers/customOptions'

const rootReducer = combineReducers({
    customOptionsReducer,
})

export default rootReducer