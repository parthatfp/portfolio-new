import React from 'react'
import './Services.css'
import Glasses from '../../img/glasses.png';
import Heartemoji from '../../img/heartemoji.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import CV from './cv.pdf'

export default function Services() {
    return (
        <div className="services">
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sint voluptates r sit amet consectetur adipisicing elit. Nulla sint voluptates
                    <br /> consequatur del sint voluptates consequatur del
                </span>
                <a href={CV} download>
                    <button className="button s-button">Download Cv</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className="cards">
                <div style={{ left: '14rem' }}>
                    <Card emoji={Heartemoji}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photoshop, Adobe, Adobe XD"} />
                </div>
                <div style={{ top: "12rem", left: '-4rem' }}>
                    <Card emoji={Glasses}
                        heading={'Developer'}
                        detail={"Html, Css, JavaScript, React, Laravel"} />
                </div>
                <div style={{ top: "19rem", left: '12rem' }}>
                    <Card emoji={Humble}
                        heading={'UI/UX'}
                        detail={"Html, Css, JavaScript, React, Laravel"} />
                </div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
            </div>
        </div>
    )
}
