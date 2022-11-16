import React from "react";
import './contact.css';
import {HiOutlineMail} from 'react-icons/hi';

function Contact(){
    return(
        <section id="contact" className='container'>
            <div className='contact-container'>
            <h1>Get in Touch</h1>
            <h5>eeleng.chung@gmail.com</h5>
            <HiOutlineMail className='msg-icon'/><br/>
            <a href="mailto: eeleng.chung@gmail.com?subject=Hey&body=I got your email from your portfolio"><button className="btn">Say Hello</button></a>
            </div>
        </section>
    )
}

export default Contact;