import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo, Label, Input } from '../../Components/styles';

import logo from '../../Global/Assets/Logo.png';

export default function Login(){
    return(
        <Container>
            <Logo src={logo} />
            
            <form>
                <div>
                    <Label>Email</Label>
                    <Input />
                </div>
                <div>
                    <Label>Password</Label>
                    <Input />
                </div>
            
                <div>
                    <Link to=''>Not registered? Sign up</Link>
                </div>

                <button type='submit'>Sign in</button>
            </form>
        </Container>
    );
}