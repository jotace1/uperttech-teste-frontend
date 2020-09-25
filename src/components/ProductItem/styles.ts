import styled from 'styled-components';


export const Button = styled.a`
    text-decoration: none;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-10px);
    }
`;

export const Box = styled.div`
    height: 350px;
    width: 300px;
    
    background-color: #E0E5FF;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.div`
    margin-top: 20px;
    display: flex;
    flex: 1;
    align-items: flex-start;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    
    flex: 1;

    align-items: center;


    p {
        color: #00127F;
        font-weight: 600;
    }

    span {
            font-size: 15px;
            color: #a8a8a8;
            max-width: 300px;
            margin: 10px 20px;
    }
`;