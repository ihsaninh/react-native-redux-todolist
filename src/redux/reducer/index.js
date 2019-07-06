import { combineReducers } from 'redux'

import todoReducer from './todoReducer'

const appReducers = combineReducers({
    todos: todoReducer
})

export default appReducers
