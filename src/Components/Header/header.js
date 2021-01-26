import React from 'react'
import Styles from '../Header/header.module.scss'
import Burger from '../Burger/burger'

const Header = () => {
    return (
        <div className={Styles.Header__wrapper}>
            <div></div>
            <Burger />
        </div>
    )
}

export default Header