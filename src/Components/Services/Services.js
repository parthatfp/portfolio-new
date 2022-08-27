import React from 'react'
import './Services.css'
import Glasses from '../../img/glasses.png';
import Heartemoji from '../../img/heartemoji.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';

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
                <button className="button s-button">Download Cv</button>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
            <div className="cards">
                <div>
                    <Card emoji = {Heartemoji}
                    heading = {'Design'}
                    detail = {"Figma, Sketch, Photoshop, Adobe, Adobe XD"} />
                </div>
            </div>
        </div>
    )
}
