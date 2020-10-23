import React from 'react';
import Styles from '../Hero/hero.module.scss'
import me from '../../assest/me.png'

const Hero = () => {
  return (
      <div>
        <div className={Styles.Hero__background_image}>
            <div className={Styles.Hero__Wrapper}>
                <div className={Styles.Hero_Stack__title}>
                    <h1>Frontend Developer <p style={{color:"blue"}}>&</p> Wordpress Developer</h1>
                </div>
                <div className={Styles.Hero_my__imageWrapper}>
                    <img src={me} alt="my-photo" className={Styles.Hero_my__image} /> 
                </div>
            </div>
        </div>
      </div>
  )
}

export default Hero;