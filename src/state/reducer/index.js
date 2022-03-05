// created to export all the reducers using combinedReducer from redux

import { combineReducers } from "redux";
import TodosReducer  from './TodosReducer'

const reducers = combineReducers({
    todo : TodosReducer
})

export default reducers;