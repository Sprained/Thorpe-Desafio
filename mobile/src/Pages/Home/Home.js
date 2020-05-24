import React, { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import { Container, Logo, Label, Input, Form, Send, TodoList, HR, Todo } from '../../Components/styles';

import logo from '../../Global/Logo.png'
import api from '../../Services/Api';

export default function Home(){
    const [ content, setContent ] = useState('')
    const [ todoList, setTodoList ] = useState([])
    const [ contador, setContador ] = useState(true);

    useEffect(() => {
        requestTodo();
    }, [contador]);

    const newTodo = async () => {

        const info = { content }

        await api.post('/todos', info);

        setContent('')
        setContador(true);
    }

    const requestTodo = async () => {
        const response = await api.get('/todos');

        setTodoList(response.data);

        setContador(false)
    }

    const deleteTodo = async (id) => {
        await api.delete(`/todos/${id}`)

        setContador(true);
    }

    const navigation = useNavigation();

    return(
        <Container>
            <Logo source={logo}/>

            <Form>
                <Label>What do you have to do?</Label>
                <Send>
                    <TouchableOpacity
                        onPress={() => newTodo()}
                    >
                        <MaterialIcons name='send' size={20} color="#138A72" />
                    </TouchableOpacity>
                </Send>
                <Input
                    autoCapitalize='none' 
                    value={content}
                    onChangeText={setContent} />
            </Form>

            {
                todoList.map(todo => 
                    <Todo>
                        <TodoList key={todo._id}>
                            <Label>{todo.content}</Label>
                            <TouchableOpacity
                                onPress={() => deleteTodo(todo._id)}
                            >
                                <MaterialIcons name='close' color='#138A72' size={20} />
                            </TouchableOpacity>
                        </TodoList>
                        <HR/>
                    </Todo>
                    )
            }
        </Container>
    )
}