import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import Api from '../../Services/Api';

import { Container, Logo, Label, Input } from '../../Components/styles';

import logo from '../../Global/Assets/Logo.png';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password_hash, setPassword] = useState('');

    useEffect(() => {
        userLogged();
    });

    const history = useHistory();

    const userLogged = () => {
        const id = localStorage.getItem('token');

        if(id){
            Api.defaults.headers.userid = id;
            return history.push('/home/');
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        const info = { email, password_hash }

        try {
            const response = await Api.post('/sessions', info);

            Api.defaults.headers.userid = response.data.id;

            history.push('/home/');

            localStorage.setItem('token', response.data.id);

            setEmail('')
            setPassword('')
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <Container>
            <Logo src={logo} />
            
            <form onSubmit={handleLogin}>
                <div>
                    <Label>Email</Label>
                    <Input value={email} onChange={text => setEmail(text.target.value)} />
                </div>
                <div>
                    <Label>Password</Label>
                    <Input value={password_hash} onChange={text => setPassword(text.target.value)} />
                </div>
            
                <div>
                    <Link to='/register'>Not registered? Sign up</Link>
                </div>

                <button type='submit'>Sign in</button>
            </form>
        </Container>
    );
}