import React, { useState } from 'react'
import "./works.scss"
import {KeyboardArrowRight, KeyboardArrowLeft} from "@material-ui/icons"
import { worksData } from '../../worksData'

export default function Works() {
    const[currentSlide, setCurrentSlide] =useState(0);
    const handleClick = (direction)=>{
        direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1: worksData.length - 1) :
        setCurrentSlide(currentSlide < worksData.length - 1 ? currentSlide+1: 0);
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {worksData.map(d=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <a href={d.link}>{d.other}</a>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <KeyboardArrowRight className="arrow right" onClick={()=>handleClick("right")}/>
            <KeyboardArrowLeft className="arrow left" onClick={()=>handleClick("left")}/>
        </div>
    )
}
