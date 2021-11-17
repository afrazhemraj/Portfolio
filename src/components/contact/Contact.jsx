import React, { useState } from 'react'
import "./contact.scss"

export default function Contact() {
    const [message, setMessage] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/contact.jpg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form
                action="https://formspree.io/f/mzbynkne"
                method="POST"
                onSubmit={handleSubmit}
                >
                <label>
                    <input type="email" name="_replyto" placeholder="Email"/>
                </label>
                <label>
                    <textarea name="message" placeholder="Message"></textarea>
                </label>
                <button type="submit">Send</button>
                {message && <span>Thank You, I'll Be in Touch Soon!</span>}
                </form>
            </div>            
        </div>
    )
}

/*
<form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank You, I'll Be in Touch Soon!</span>}
</form>
*/