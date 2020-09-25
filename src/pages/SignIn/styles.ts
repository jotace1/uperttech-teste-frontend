import styled from 'styled-components';
import { shade } from 'polished';
import backgroundImg from '../../assets/background3.svg';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    background: url(${backgroundImg}) no-repeat center;
    background-size: cover;
`;

export const Header = styled.div`
    display: flex;
    max-height: 100px;
    padding-top: 30px;
    margin: 0px 50px;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;  

    a{
        text-decoration: none;
        color: black;
    }
`;

export const Main = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const FormBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    height: 650px;
    width: 550px;
    border-radius: 10px;
    background-color: #E0E5FF;
    align-items: center;
    justify-content: center;

    div {
        height: 100%;

    }

    div + div {
        border-left: 2px solid white;
    }
`;

export const RegisterForm = styled.div`
        display: flex;
        flex-direction:column;
        flex: 1;
        
        align-items: center;
        max-width: 250px;

        padding-top: 10px;
        padding-left: 10px;

        input {
        border: 2px solid #E0E5FF;
        border-radius: 10px;
        height: 50px;
        width: 230px;
        text-align: center;
    }

    label {
        margin: 10px 0 10px;
    }
    
    button {
        width: 200px;
        height:50px;
        border: none;
        text-decoration: none;
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: #4d71fb;
        box-shadow: 2px 2px 10px #4d71fb;
        font-size: 20px;
        color: #fff;
        margin-bottom: 200px;

        &:hover {
        color: ${shade(0.2, '#4d71fb')};
      }
    }

    h3 + input {
        margin-top: 30px;
    }

    input + input {
        margin-top: 30px;
    }

    input + button {
        margin-top: 30px;
    }
`;

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 250px;
    padding-top: 10px;
    padding-left: 10px;


    label {
        margin: 10px 0 10px;
    }

    #loginLabel {
        margin-top: 33px;
    }

    input {
        border: 2px solid #E0E5FF;
        border-radius: 10px;
        height: 50px;
        width: 230px;
        text-align: center;
    }
    
    button {
        width: 200px;
        height:50px;
        border: none;
        text-decoration: none;
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: #4d71fb;
        box-shadow: 2px 2px 10px #4d71fb;
        font-size: 20px;
        color: #fff;
        margin-bottom: 200px;

        &:hover {
        color: ${shade(0.2, '#4d71fb')};
      }
    }

    h3 + input {
        margin-top: 30px;
    }

    input + input {
        margin-top: 30px;
    }

    input + button {
        margin-top: 30px;
    }

`;