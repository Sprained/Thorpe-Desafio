import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    max-width: 500px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    div{
        width: 100%;
        margin: 20px auto;
    }

    a{
        font-size: 20px;
        line-height: 24px;
        color: #138A72;
        text-align: start;
    }

    button{
        background: #138A72;
        border-radius: 100px;
        width: 100%;
        height: 50px;
        color: #fff;
        font-weight: bold;
        font-size: 22px;
        line-height: 27px;
    }
`
export const Logo = styled.img`
    width: 200px;
    height: 200px;
`

export const Label = styled.label`
    width: 100%;
    font-size: 24px;
    line-height: 29px;
    color: #138A72;
`
export const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #138A72;
    height: 30px;
`
export const InputTodo = styled.input`
    width: 90%;
    border: none;
    border-bottom: 1px solid #138A72;
    height: 30px;
`
export const Todo = styled.div`
    button{
        border: none;
        background-color: transparent;
        outline: none;
        width: 10%;
    }
`
export const TodoList = styled.div`
  display: flex;
  flex-direction: column;

  div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    button{
      border: none;
      background-color: transparent;
      outline: none;
    }
  }
`