import React from 'react'
import Layout from '../../Components/layout';
import Styles from '../Projects/projects.module.scss'


const Projects =() => {
    return (
       <Layout>
            <div className={Styles.wrapper__about}>
                <h1>This is my Projects page</h1>
            </div>
       </Layout>
    )
}

export default Projects;