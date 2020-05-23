import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Api from '../../Services/Api';

import { Container, Logo, Label, Input } from '../../Components/styles';

import logo from '../../Global/Assets/Logo.png';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password_hash, setPassword] = useState('');
    const [repeat, setRepeat] = useState('');

    const history = useHistory();

    const handleRegister = async (e) => {
        e.preventDefault();

        const info = { name, email, password_hash }

        try {
            const response  = await Api.post('/users', info);

            response.headers['userid'] = response.data.id

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
            
            <form onSubmit={handleRegister}>
                <div>
                    <Label>Name</Label>
                    <Input value={name} onChange={text => setName(text.target.value)} />
                </div>
                <div>
                    <Label>Email</Label>
                    <Input value={email} onChange={text => setEmail(text.target.value)} />
                </div>
                <div>
                    <Label>Password</Label>
                    <Input value={password_hash} onChange={text => setPassword(text.target.value)} />
                </div>
                <div>
                    <Label>Repeat</Label>
                    <Input value={repeat} onChange={text => setRepeat(text.target.value)} />
                </div>

                <button type='submit'>Sign in</button>
            </form>
        </Container>
    );
}