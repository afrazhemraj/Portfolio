import React from 'react'
import "./navbar.scss"
import {Person, Mail, GitHub} from "@material-ui/icons"

export default function Navbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"navbar "  + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">afraz hemraj.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>647-527-9497</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>afrazhemraj@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <GitHub className="icon"/>
                        <a href="https://github.com/afrazhemraj">github.com/afrazhemraj</a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                </div>
            </div>
        </div>
    )
}
