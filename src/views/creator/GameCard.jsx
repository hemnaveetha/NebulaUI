import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const GameCard = ({ backgroundImage, route }) => {
    const navigate = useNavigate();

    return (
        <CardWrapper
            style={{ backgroundImage: `url(${backgroundImage})` }}
            onClick={() => navigate(route)}
        />
    );
};

export default GameCard;

const CardWrapper = styled.div`
    width: 500px;
    height: 300px;
    margin: 30px;
    border-radius: 8px;
    background-size: cover;
    background-position: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3); /* Slightly lighter overlay */
        border-radius: 8px;
    }
`;
