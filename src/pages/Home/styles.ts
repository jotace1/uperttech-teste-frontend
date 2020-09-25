import styled from 'styled-components';
import { shade } from 'polished';

import backgroundImg from '../../assets/background3.svg';
import mainImg from '../../assets/art3.svg';



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

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    
    a{
        color: black;
        text-decoration: none;
    }

    a + a {
        margin-left: 30px;
    }

    a + button {
        margin-left: 30px;
    }

    .button {
        height: 50px;
        width: 150px;
        border: none;
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: #4d71fb;
        box-shadow: 2px 2px 10px #4d71fb;
        font-size: 20px;
        color: #fff;

        &:hover {
        color: ${shade(0.2, '#4d71fb')};
      }
    }
`;

export const Main = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    justify-content: flex-start;
    align-items:center;
    background: url(${mainImg}) no-repeat right;
    background-size: contain;


    div {
        padding-top: 50px;
        margin-left: 100px;
        display: flex;
        flex-direction: column;
        align-items:flex-start;
        max-width: 600px;

        p {
        color: #00127F;
        font-size: 50px;
        font-weight: 800;
        }

        span {
            font-size: 20px;
            color: #a8a8a8;
            max-width: 400px;
            
        }
        
        .button {
        height: 60px;
        width: 300px;
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

    p + span {
        margin-top: 60px;
    }
    span + a {
        margin-top: 60px;
    }
    }
`;
