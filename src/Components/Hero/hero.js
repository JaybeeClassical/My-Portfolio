import React from 'react';
import Styles from '../Hero/hero.module.scss'
import me from '../../assest/me.png'
import Arrow2 from '../../assest/Arrow2.svg'
import Arrow3 from '../../assest/Arrow3.svg'
import Particles from 'react-tsparticles'
import { FiFacebook, FiTwitter, FiDownload, FiGithub, FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <div>
        <div className={Styles.Hero__Wrapper}>
            <div className={Styles.Hero_Stack__title}>
                <h1>Frontend Developer <br/> Wordpress Developer</h1>
            </div>
            <div className={Styles.Fixed_socialIcons}>
                <i><a href="https://web.facebook.com/Chinweike.Jaybee" target="_blank" rel="noopener"><FiFacebook style={{color: "#FFFFFF"}}/></a></i>
                <i><a href="https://twitter.com/Chinweike_Dev" target="_blank" rel="noopener"><FiTwitter style={{color: "#FFFFFF"}}/></a></i>
                <i><a href="https://drive.google.com/file/d/1D1HkKlquVMSUb1fX04uKirudjWeJ3pYj/view?usp=sharing" target="_blank" rel="noopener"><FiDownload style={{color: "#FFFFFF"}}/></a></i>
                <i><a href="https://github.com/JaybeeClassical" target="_blank" rel="noopener"><FiGithub style={{color: "#FFFFFF"}}/></a></i>
                <i><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener"><FiMail style={{color: "#FFFFFF"}} /></a></i>
            </div>
            <div className={Styles.Hero_my__imageWrapper}>
                <div className={Styles.Hero_my__image}>
                    {<img src={Arrow2} className={Styles.Hero_my__arrow2} />}
                    {<img src={Arrow3} className={Styles.Hero_my__arrow3} />}
                    {<img src={me} className={Styles.Hero_miniPhoto} />}
                    {<img src={me} className={Styles.Hero_miniPhoto2} />}
                    {<img src={me} className={Styles.Hero_miniPhoto3} />}
                </div>
            </div>
        </div>

        <Particles className={Styles.Hero__background_image}
            id="tsparticles"
            options={{
            background: {
                color: {
                value: "#021D44",
                },
            },
            fpsLimit: 60,
            interactivity: {
                detectsOn: "canvas",
                events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
                },
                modes: {
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                },
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
                },
            },
            particles: {
                color: {
                value: "#ffffff",
                },
                links: {
                color: " #8f4d8f",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
                },
                collisions: {
                enable: true,
                },
                move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
                },
                number: {
                density: {
                    enable: true,
                    value_area: 1000,
                },
                value: 80,
                },
                opacity: {
                value: 0.5,
                },
                shape: {
                type: "circle",
                },
                size: {
                random: true,
                value: 9,
                },
            },
            detectRetina: true,
            }}
      />
       
    </div>
  )
}

export default Hero;