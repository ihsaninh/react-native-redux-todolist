import { ADD_TODO } from '../action/types'

const initialState = {
    todo: '',
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat(action.payload)
            }
        case 'EDIT_TODO':
            const updateItem = state.todos.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload
                }

                return item
            })
            return {
                ...state,
                todos: updateItem
            }
        case 'REMOVE_TODO':
            const removeItem = state.todos.filter(
                item => item.id != action.payload
            )
            return {
                ...state,
                todos: removeItem
            }
        default:
            return state
    }
}

export default todoReducer
