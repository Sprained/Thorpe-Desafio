import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity, Alert } from 'react-native';
import { Container, Logo, Label, Input, Form, SingUp, Button, ButtonSing } from '../../Components/styles';

import logo from '../../Global/Logo.png'
import api from '../../Services/Api';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password_hash, setPassword] = useState('');
    const [repeat, setRepeat] = useState('');

    const handleRegister = async () => {
        const info = { name, email, password_hash };

        try {
            const response = await api.post('/users', info);

            api.defaults.headers.userid = response.data.id;

            // await AsyncStorage.setItem('token', response.data.user);

            navigation.navigate('home')
        } catch (error) {
            Alert.alert(error)
        }
    }

    const navigation = useNavigation();

    return(
        <Container>
            <Label>Register</Label>
            <Logo source={logo}/>

            <Form>
                <Label>Name</Label>
                <Input 
                    autoCapitalize='none' 
                    value={name}
                    onChangeText={setName} />

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

                <Label>Repeat</Label>
                <Input 
                    autoCapitalize='none'
                    value={repeat}
                    onChangeText={setRepeat} />
                
                <Button
                    onPress={() => handleRegister()}
                >
                    <ButtonSing>Sign in</ButtonSing>
                </Button>
            </Form>
        </Container>
    )
}