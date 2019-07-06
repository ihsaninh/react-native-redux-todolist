import React, { Component, Fragment } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    Keyboard,
    TouchableOpacity,
    Alert
} from 'react-native'
import { connect } from 'react-redux'

import * as actionTodos from './../redux/action/todo'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            newTodo: ''
        }
    }

    placeSubmitHandler = () => {
        this.props.addTodos({
            id: Math.floor(Math.random() * 9),
            name: this.state.newTodo
        })

        this.setState({ newTodo: '' })
        Keyboard.dismiss()
    }

    handleButtonEdit = () => {
        this.props.editTodos({
            id: this.state.id,
            name: this.state.newTodo
        })

        this.setState({ newTodo: '' })
        Keyboard.dismiss()
    }

    handleChangeText = text => {
        this.setState({ newTodo: text })
    }

    handleEdit = item => () => {
        this.setState({ newTodo: item.name, id: item.id })
    }

    handleRemoveData = id => () => {
        Alert.alert(
            'Yakin mau dihapus ?',
            'Yang sudah hilang gak bisa balik lagi loh',
            [
                {
                    text: 'Ga jadi deh',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'Gapapa gan',
                    onPress: () => this.props.removeTodos(id)
                }
            ],
            { cancelable: false }
        )
    }

    render() {
        console.log(this.props.todos)
        return (
            <View style={styles.container}>
                <Text style={styles.TodolistText}>TodoList App</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Todo List"
                        style={styles.placeInput}
                        value={this.state.newTodo}
                        onChangeText={this.handleChangeText}
                    />
                    <Button
                        title="Add"
                        style={styles.placeButton}
                        onPress={this.placeSubmitHandler}
                    />
                    <Button
                        title="Edit"
                        style={styles.placeButton}
                        onPress={this.handleButtonEdit}
                    />
                </View>

                {this.props.todos.todos.map((item, i) => (
                    <TouchableOpacity
                        onPress={this.handleEdit(item)}
                        onLongPress={this.handleRemoveData(item.id)}
                        style={{
                            backgroundColor: '#fffff',
                            padding: 15,
                            borderBottomWidth: 1,
                            borderBottomColor: 'grey',
                            width: '100%'
                        }}
                        key={i}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                ))}

                {this.props.todos.todos.length === 0 && (
                    <Text style={{ fontSize: 20 }}>{'Empty..'}</Text>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    TodolistText: {
        marginBottom: 10,
        fontSize: 20
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    placeInput: {
        width: '70%'
    },
    placeButton: {
        width: '30%'
    },
    listContainer: {
        width: '100%'
    }
})

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodos: value => dispatch(actionTodos.addTodo(value)),
        editTodos: value => dispatch(actionTodos.editTodo(value)),
        removeTodos: id => dispatch(actionTodos.removeTodo(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
