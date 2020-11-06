import React from 'react'
import burgerMenu from '../../assest/Burger menu/menu.svg'
import Styles from '../Header/header.module.scss'

const Burger = () => {
    return (
        <div className={Styles.Burger}>
            <burgerMenu/>
        </div>
    )
}

export default Burger