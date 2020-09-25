import React from 'react';
import { Link } from 'react-router-dom';

import ProductItem from '../../components/ProductItem';

import codeReviewImg from '../../assets/Products/code_review.svg';
import mindMapImg from '../../assets/Products/mind_map.svg';
import mobileDevelopmentImg from '../../assets/Products/mobile_development.svg';
import osUpgradeImg from '../../assets/Products/os_upgrade.svg';
import websitesImg from '../../assets/Products/websites.svg';
import productInterationImg from '../../assets/Products/product_interation.svg';


import { Container, Header, Main } from './styles';

const Products: React.FC = () => {
    return (

        <Container>
            <Header>
                <h1><Link to="/">UPERTTECH</Link></h1>
                <h2 style={{ color: '#a8a8a8' }}>NOSSOS SERVIÇOS</h2>
            </Header>

            <Main>
                <ProductItem title="Code Review" image={codeReviewImg}/>
                <ProductItem title="Websites" image={websitesImg} />
                <ProductItem title="Mobile Development" image={mobileDevelopmentImg} />
                <ProductItem title="Mind Map" image={mindMapImg} />
                <ProductItem title="Product Interation" image={productInterationImg} />
                <ProductItem title="OS upgrade" image={osUpgradeImg}/>
            </Main>

        </Container>
    );
}

export default Products;