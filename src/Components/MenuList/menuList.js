import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'


const Ul = styled.ul`
    flex-flow: column nowrap;
    list-style: none;

    background-color: #FFFFFF;
    position: fixed;
    right: ${({open}) => open ? '30px' : '0'};
    top: 60px;
    padding: 50px 20px;
    height: auto;
    width: 250px;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    z-index: -44;
    border-radius: 25px;
    border: solid 2px white;
    position: absolute;
    color: #021D44;

    li{
        font-size: 28px;
        padding: 18px 10px; 
        transition: transform 0.2s ease-in-out;
        font-weight: bold;
    }

    @media (max-width: 768px){
        width: 100%;
        height: 100vh;
        top: 0;
        right: 0;
    }
`;

const MenuList = ({open}) => {
    return (
        <Ul open={open}>
            <li><Link to="#about">About</Link></li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Blog</li>
        </Ul>
    )
}

export default MenuList