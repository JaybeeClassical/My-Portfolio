import React from 'react';
import Header from './Header/header';
import './Styles/styles.scss'
import Footer from './Footer/footer'


const Layout = (props) => {
    return(
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout 