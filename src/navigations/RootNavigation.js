import {createStackNavigator, createAppContainer } from "react-navigation"

import List from '../screens/TodoList'

const MainNavigator = createStackNavigator({
    List : {
        screen : List,
        navigationOptions : ({navigation}) => ({
            title : `ToDo List App`,
        })
    }
});

const RootNavigation = createAppContainer(MainNavigator);

export default RootNavigation