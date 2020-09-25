import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, Main, FormBox, RegisterForm, LoginForm } from './styles'; 


const SignIn: React.FC = () => {
    return (
        <>
            <Container>

            <Header>
            <h1><Link to="/">UPERTTECH</Link></h1>
            <h2 style={{ color: '#a8a8a8' }}>ORÇAMENTO</h2>
            </Header>   
                <Main>
                    <FormBox>
                        <RegisterForm>
                            <h3>Ainda não tem uma conta? Faça seu cadastro!</h3>
                            
                            <label>Nome</label>
                            <input type="text" placeholder="Digite seu nome" name="name" />

                            <label>E-mail</label>
                            <input type="text" placeholder="Digite seu email" name="email" />
                        
                            <label>Senha</label>
                            <input type="password" placeholder="Digite sua senha"  name="password" />

                            <label>Confirme sua senha</label>
                            <input type="password" placeholder="Confirme sua senha"  name="password" />

                            <button type="submit">Cadastrar</button>
                        </RegisterForm>

                        <LoginForm>
                        <h3>Já é cadastrado? Faça seu login!</h3>

                        <label id="loginLabel">E-mail</label>
                        <input type="text" placeholder="Digite seu e-mail" name="name" />

                        <label>Senha</label>
                        <input type="password" placeholder="Digite sua senha"  name="password" />

                        <button type="submit">Entrar</button>
                        </LoginForm>
                    </FormBox>
                </Main>
            </Container>
        </>
    );
}

export default SignIn;