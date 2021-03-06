import React from 'react'
import Styles from '../Homepage/homepage.module.scss'
import Vector122 from '../../assest/Vector122.svg'
import Ellipse81 from '../../assest/Ellipse81.svg'
import Separator from '../../assest/separator.svg'
import { DiGit, DiBootstrap, DiCss3, DiJavascript1, DiNpm, DiReact, DiSass, DiWordpress } from "react-icons/di";
import { GrGatsbyjs, GrGithub, GrWindows } from "react-icons/gr";
import { SiVisualstudio } from "react-icons/si";
import Hero from '../../Components/Hero/hero'

const Homepage = () => {
    return (
        <div className={Styles.Homepage__Container}>
            <Hero />
            <div className={Styles.Homepage__Wrapper}>
                <img src={Vector122} className={Styles.intro_section__svg}  alt="design"/>
                <img src={Ellipse81} className={Styles.intro_section__EllipseSvg} alt="design"/>
                <div className={Styles.intro_content}>
                    <h2 id="about" className={Styles.intro_about}>About me</h2>
                    <p>I am a Front-end Developer, Wordpress Developer who find so much fun in exploring 
                        Front-end Technologies. A Good Bitcoin Enthusiats 
                    </p>
                    <h2 className={Styles.intro_WhatIDo}>What I do</h2>
                    <img src={Separator} alt="separator" className={Styles.intro_separator}/>
                </div>

                <div className={Styles.homepage_intro__wrapper}>
                    <div className={Styles.intro_left}>
                        <h2>Front-Development</h2>
                        <p>Front-end developer, building scalable, optimized , accessible 
                            Front-end Applications.
                        </p>
                    </div>
                    <div className={Styles.intro_right}>
                        <h2>Wordpress Design</h2>
                        <p>Building, Customizing websites using the world most popular Content
                            Management System (CMS). Integrating Wordpress with Front-end Tools like:
                            <ol style={{marginLeft: "20px"}}>
                                <li>Frontity</li>
                                <li>Gatsby</li>
                            </ol>
                        </p>
                        <img src={Vector122} className={Styles.intro_right__svg} alt="design"/>
                    </div>
                </div>
                <div className={Styles.intro_center}>
                    <h2>Technical Content</h2>
                    <p>
                        Writing Down my experiences and difficulties using most Web Technologies
                    </p>
                </div>

                <div className={Styles.homepage_skills}>
                    <img src={Separator} alt="separator" className={Styles.intro_separator}/>
                    <img src={Ellipse81} className={Styles.skills__svg} alt="design"/>
                        <h2>Skills/Tools/Framework</h2>
                        <div className={Styles.skills__icons}>
                            <i><DiGit/></i>
                            <i><DiBootstrap/></i>
                            <i><DiCss3/></i>
                            <i><DiGit/></i>
                            <i><DiJavascript1/></i>
                            <i><DiNpm/></i>
                            <i><DiReact/></i>
                            <i><DiSass/></i>
                            <i><DiWordpress/></i>      
                            <i><GrGatsbyjs/></i>      
                            <i><GrGithub/></i>      
                            <i><GrWindows/></i>      
                            <i><SiVisualstudio/></i>      
                        </div>
                </div>
            </div>
            <div id="contact" className={Styles.contact_me}>
                <h1>Want to Hire me?</h1>
                <p>Got a question or proposal <br />
                 Want to Hire me or just want to say hello? Go ahead.
                </p>
            </div>
        </div>
    )
}

export default Homepage