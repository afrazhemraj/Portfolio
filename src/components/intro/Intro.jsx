import React from 'react'
import "./intro.scss"
import {KeyboardArrowDown} from "@material-ui/icons"
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1000,
            backSpeed: 60,
            strings: ["Mechatronics Engineering Student", "Web Developer", "CAD Designer"],
        });
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/afraz.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Afraz Hemraj</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <KeyboardArrowDown className="icon"/>
                </a>
            </div>
            
        </div>
    )
}
