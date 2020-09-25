import styled from 'styled-components';
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
    margin-top: 50px;
    display: grid;
    grid-template-columns: 350px 350px 350px;
    row-gap: 30px;
    align-items: center;
    justify-content: center;
`;