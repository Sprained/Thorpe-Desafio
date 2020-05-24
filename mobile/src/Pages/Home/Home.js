import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native';
import { Container, Logo, Label, Input, Form, SingUp, Button, ButtonSing } from '../../Components/styles';

import logo from '../../Global/Logo.png'
import api from '../../Services/Api';

export default function Home(){
    const [email, setEmail] = useState('');
    const [password_hash, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const info = { email, password_hash };

        try {
            const response = await api.post('/sessions', info);

            api.defaults.headers.userid = response.data.id;

            // await AsyncStorage.setItem('token', response.data.user);

            navigation.navigate('')
        } catch (error) {
            console.log(error);
        }
    }

    const navigation = useNavigation();

    return(
        <Container>
            <Label>Home</Label>
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

                <TouchableOpacity>
                    <SingUp>Not registered? Sign up</SingUp>
                </TouchableOpacity>
                
                <Button>
                    <ButtonSing>Sign in</ButtonSing>
                </Button>
            </Form>
        </Container>
    )
}