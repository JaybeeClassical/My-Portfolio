import React from 'react'
import Styles from '../Footer/footer.module.scss'
import { FiFacebook, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";


const Footer = () => {
    return (
        <div className={Styles.footer_wrapper}>
            <p>&copy; 2020, made with ❤️ by Jude Chinweike</p>
            <p className={Styles.footer_socialIcon}>
                <i><a href="#"><FiFacebook style={{color: " #121313"}}/></a></i>
                <i><a href="#"><FiTwitter style={{color: " #121313"}}/></a></i>
                <i><a href="#"><FiGithub style={{color: " #121313"}}/></a></i>
                <i><a href="#"><FiLinkedin style={{color: " #121313"}}/></a></i>
            </p>
        </div>
    )
}

export default Footer;