import React from 'react';

import { Button, Box, Image, Info } from './styles';


interface Request {
    title: string;
    image: string;
}

const ProductItem: React.FC<Request> = ({ title, image }: Request) => {


    return (
        <Button href= "#">

        <Box>
            <Image>
                <img src={image} alt="Code Review" style= {{ maxWidth: 200, maxHeight: 200 }}/>
            </Image>
            <Info>
                <p>{title}</p>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a lorem leo. Suspendisse vel molestie tortor.</span>
            </Info>
        </Box>

        </Button>
    );
}

export default ProductItem;
