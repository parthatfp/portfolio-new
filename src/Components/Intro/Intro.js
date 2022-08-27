import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

export default function Intro() {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Partha Ghose</span>
                    <span>Frontend Developer with high level of experience in web designing and development, producting the quality work</span>
                </div>

                <button className="button i-button">Hire Me</button>

                <div className="i-icons">
                    <img src={Github} alt="" srcset="" />
                    <img src={Linkedin} alt="" srcset="" />
                    <img src={Instagram} alt="" srcset="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" srcset="" />
                <img src={Vector2} alt="" srcset="" />
                <img src={Boy} alt="" srcset="" />
                <img src={Glassesimoji} alt="" srcset="" />
                <div style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv image={Crown} txt1='web' txt2='Developer' />
                </div>
                <div style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv image={Thumbup} txt1='Best Design' txt2='Award' />
                </div>
                {/* blur divv */}
                <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
                <div className="blur" style={{background: "rgb(164 215 225)", top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
            </div>
        </div>
    )
}
