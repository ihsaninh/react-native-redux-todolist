import React, { Fragment, Component } from 'react'
import TodoList from './src/screen/TodoList'
import { Provider } from 'react-redux'
import configureStore from './src/redux/store'

const store = configureStore()

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <TodoList />
                </Fragment>
            </Provider>
        )
    }
}

export default App
