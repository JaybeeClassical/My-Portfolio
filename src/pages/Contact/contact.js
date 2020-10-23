import React from 'react'
import Layout from '../../Components/layout';
import Styles from '../Contact/contact.module.scss'


const Contact =() => {
    return (
        <Layout>
            <div className={Styles.wrapper__about}>
                <h1>This is my Contact page</h1>
            </div>
        </Layout>
    )
}

export default Contact;