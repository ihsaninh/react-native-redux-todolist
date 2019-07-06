import { createStore, combineReducers } from 'redux'
import todoReducer from './reducer/todoReducer'

const rootReducer = combineReducers({
    todos: todoReducer
})

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore
