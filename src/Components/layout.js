import React from 'react';
import Header from './Header/header';
import './Styles/styles.scss'


const Layout = (props) => {
    return(
        <div>
            <Header />
            {props.children}
        </div>
    )
}

export default Layout 