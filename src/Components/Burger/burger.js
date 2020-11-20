import React, {useState} from 'react'
import styled from 'styled-components'
import MenuList from '../MenuList/menuList';


// import Styles from '../Burger/burger.module.scss'

const Hemburger = styled.div`
    width: 40px;
    flex-flow: column no-wrap;
    margin: 10px 30px;
    
    div{
        border-top: 2px #4831D4 solid;
        padding-bottom: ${({open}) => open ? '5px': '20px'};
        cursor: pointer;
        transform-origin: 1px;
        transition: all 0.3s linear;
        transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};


        :nth-child(2){
            border-top: 2px #4831D4 solid;
            width: ${({open}) => open ? '40px': '30px'};
            position: relative;
            top: ${({open}) => open ? '20px': '-3px'};
            left: ${({open}) => open ? '0px': '10px'};
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

    
`;

const Burger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
        <Hemburger  open={open} onClick={() => setOpen(!open)}>
            <div></div>
            <div></div>
        </Hemburger> 
        <MenuList open={open}/>
        </>
    )
}

export default Burger