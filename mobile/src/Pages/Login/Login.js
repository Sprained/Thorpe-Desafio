import React, { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import { Container, Logo, Label, Input, Form, SingUp, Button, ButtonSing } from '../../Components/styles';

import logo from '../../Global/Logo.png'
import api from '../../Services/Api';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password_hash, setPassword] = useState('');

    useEffect(() => {
        userLogged();
    })

    const userLogged = async () =>{
        const token = await AsyncStorage.getItem('token')
    
        if(token){
            api.defaults.headers.authorization = `Barrer ${token}`;
            navigation.navigate('home')
        }
      }

    const handleLogin = async () => {

        const info = { email, password_hash };

        try {
            const response = await api.post('/sessions', info);

            api.defaults.headers.authorization = `Barrer ${response.data.token}`;

            await AsyncStorage.setItem('token', response.data.token);

            navigation.navigate('home')
        } catch (error) {
            Alert.alert(error)
        }
    }

    const navigation = useNavigation();

    return(
        <Container>
            <Logo source={logo}/>

            <Form>
                <Label>Email</Label>
                <Input 
                    autoCapitalize='none' 
                    value={email}
                    onChangeText={setEmail} />

                <Label>Password</Label>
                <Input 
                    autoCapitalize='none'
                    value={password_hash}
                    onChangeText={setPassword} />

                <TouchableOpacity
                    onPress={() => navigation.navigate('register')}
                >
                    <SingUp>Not registered? Sign up</SingUp>
                </TouchableOpacity>
                
                <Button
                    onPress={() => handleLogin()}
                >
                    <ButtonSing>Sign in</ButtonSing>
                </Button>
            </Form>
        </Container>
    )
}