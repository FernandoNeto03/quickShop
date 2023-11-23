import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Feather} from '@expo/vector-icons'
import React from 'react';
import Header from '../Header/header';



const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{headerShown: Header}}>
            <Tab.Screen
             name='Cart'
             component={CartScreen}
             options={{
                tabBarIcon: ({color, size}) => <Feather name='shopping-cart' color={color} size={size}/>,
                tabBarLabel: 'Carrinho'
                }}
            />

        </Tab.Navigator>
    )
}