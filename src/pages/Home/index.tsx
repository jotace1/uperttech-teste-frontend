import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Buttons, Main } from './styles';

const Home: React.FC = () => {
    return (
        <>
        <Container>
            <Header>

                <h1><Link to="/">UPERTTECH</Link></h1>

                <Buttons>
                    <a href="#" style={{ fontWeight: 600 }}>Quem somos</a>
                    <a href="#">Serviços</a>
                    <Link className="button" to="products">Soluções</Link>
                </Buttons>

            </Header>

            <Main>
                <div>
                    <p>Soluções inteligentes para mordenizar sua empresa</p>
                    <span>Expertise em gerência de projetos e em desenvolvimento de software para produzir soluções que vão direto ao ponto</span>
                    <Link className="button" to="signin">Solicite um orçamento</Link>
                </div>
            </Main>

            
        </Container>

        </>
    );
}

export default Home;