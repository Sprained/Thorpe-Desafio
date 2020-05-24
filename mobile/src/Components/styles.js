import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.Image`
    width: 200px;
    height: 200px;
    margin-bottom: 75px;
`


export const Form = styled.View`
    width: 80%;
`

export const Label = styled.Text`
    font-size: 18px;
    line-height: 22px;
    color: #138A72;
    font-family: 'MontserratAlternates';
`

export const Input = styled.TextInput`
    border: none;
    border-bottom-width: 1px;
    border-color: #138A72;
    margin-bottom: 20px;
`

export const SingUp = styled.Text`
    color: #138A72;
    text-decoration: underline;
    font-size: 15px;
    line-height: 18px;
    font-family: 'MontserratAlternates';
`

export const Button = styled.TouchableOpacity`
    background-color: #138A72;
    margin-top: 20px;
    border-radius: 100px;
    padding: 20px;
`

export const ButtonSing = styled.Text`
    font-size: 22px;
    line-height: 27px;
    color: #fff;
    text-align: center;
    font-family: 'Bold';
`