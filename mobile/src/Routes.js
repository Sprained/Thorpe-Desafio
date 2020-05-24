import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import ImageEditor from './Pages/ImageEditor/ImageEditor';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name='login' component={Login} />
                <Stack.Screen name='register' component={Register} />
                <Stack.Screen name='home' component={Home} />
                <Stack.Screen name='imageeditor' component={ImageEditor} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}