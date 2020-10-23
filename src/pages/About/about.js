import React from 'react'
import Layout from '../../Components/layout';
import Styles from '../About/about.module.scss'


const About =() => {
    return (
        <Layout>
            <div className={Styles.wrapper__about}>
                <h1>This is my about page</h1>
            </div>
        </Layout>
    )
}

export default About;