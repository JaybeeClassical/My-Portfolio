import React, {useState} from 'react';
import Styles from '../Header/header.module.scss'
import me from '../../assest/me.png'
// import { useState } from 'react';



const Header = () => {
    return (
        <div className={Styles.wrapper__header}>
            <div>
                <img src={me} alt="my-photo" className={Styles.Header_my__logo} /> 
            </div>
            <MenuItem>
                <MenuList icon=" 😝 "/>
                <MenuList icon=" 😝 "/>
                <MenuList icon=" 😝 "/>
            </MenuItem>

            <MenuList icon="😝">
               <DropdownMenu/>
            </MenuList>
        </div>
    )
}

function DropdownMenu() {
    function DropdownItem(props) {
        return (
            <a href className={Styles.Menu_dropdownItem}>
                <span className={Styles.DropdownItem_iconButton__Left}>😝</span>
                {props.children}
                <span className={Styles.DropdownItem_iconButton__Right}>😝</span>
            </a>
        )
    }

    return (
        <div className={Styles.Menu_dropdown}>
            <DropdownItem>My Projects</DropdownItem>
            <DropdownItem>My Article</DropdownItem>
        </div>
    )
}

function MenuItem (props) {
    return (
       <ul className={Styles.Menuitem__Nav}>{props.children}</ul>
    )
}

function MenuList (props) {
    const [open, setOpen] = useState(false);

    return (
        <li className={Styles.MenuList__List}>
            <a href="#" className={Styles.List__icon} onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    )
}

export default Header;