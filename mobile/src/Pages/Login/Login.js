import React from 'react';

import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Container, Logo, Label, Input, Form, SingUp, Button, ButtonSing } from '../../Components/styles';

import logo from '../../Global/Logo.png'

export default function Login(){
    return(
        <Container>
            <Logo source={logo}/>

            <Form>
                <Label>Email</Label>
                <Input 
                    autoCapitalize='none' />

                <Label>Password</Label>
                <Input 
                    autoCapitalize='none' />

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