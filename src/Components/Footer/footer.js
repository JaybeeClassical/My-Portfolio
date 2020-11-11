import React from 'react'
import Styles from '../Footer/footer.module.scss'

const Footer = () => {
    return (
        <div className={Styles.footer_wrapper}>
            <p>&copy; 2020, made with Love by Jude Chinweike</p>
            <p>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </p>
        </div>
    )
}

export default Footer;