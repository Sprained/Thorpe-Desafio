import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Api from '../../Services/Api';

import { MdSend, MdClose } from 'react-icons/md'

import { Container, Logo, Label, InputTodo, Todo, TodoList } from '../../Components/styles';

import logo from '../../Global/Assets/Logo.png';

export default function Home(){
    const [ content, setContent ] = useState('')
    const [ todoList, setTodoList ] = useState([])
    const [ contador, setContador ] = useState(true);

    useEffect(() => {
        userLogged();
        requestTodo();
    }, [contador]);

    const userLogged = () => {
        const token = localStorage.getItem('token');
        Api.defaults.headers.authorization = `Barrer ${token}`;
    }

    const newTodo = async (e) => {
        e.preventDefault()

        const info = { content }

        await Api.post('/todos', info);

        setContent('')
        setContador(true);
    }

    const requestTodo = async () => {
        const response = await Api.get('/todos');

        setTodoList(response.data);

        setContador(false)
    }

    const deleteTodo = async (id) => {
        await Api.delete(`/todos/${id}`)

        setContador(true);
    }

    return(
        <Container>
            <Logo src={logo} />

            <form onSubmit={newTodo}>
                <Todo>
                    <Label>What do you have to do?</Label>
                    <InputTodo 
                        value={content} 
                        onChange={text => setContent(text.target.value)} />
                    <button type="submit">
                        <MdSend size={20} color="#138A72" />
                    </button>
                </Todo>
            </form>

            {
                todoList.map(todo => 
                    <TodoList key={todo._id}>
                        <div>
                            <Label>{todo.content}</Label>
                            <button onClick={() => deleteTodo(todo._id)}>
                            <MdClose 
                                size={30} 
                                color='#138A72'
                                />
                            </button>
                        </div>
                    </TodoList>
                    )
            }
        </Container>
    );
}