import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Toaster, toast } from 'react-hot-toast';
import sr from '../../utils/scrollReveal';
import db from "../../utils/firebase";
import "./contact.styles.css";

const Contact = () => {
    const [message, setMessage] = useState({
        name: "",
        email: "",
        content: ""
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        sr.reveal('.contact__title', {});
        sr.reveal('.contact__subtitle', { delay: 200 });
        sr.reveal('.contact__input', { delay: 400 });
        sr.reveal('.contact__button', { interval: 200 });
        console.log("Contact");
    }, []);

    const sendEmailAndSaveToDB = (e) => {
        e.preventDefault();

        if (!message.name || !message.email || !message.content) {
            toast.error("Name, email, and message content cannot be empty!");
            return;
        }

        setLoading(true);

        const templateParams = {
            from_name: message.name,
            reply_to: message.email,
            message: message.content,
            to_name: "Alex Dang",
        };

        // Send email with EmailJS
        emailjs.send('alex-dang_my_portfolio', 'template_alex-portfolio', templateParams, 'bpHV1ByfBuWaoZQS7')
            .then((response) => {
                toast.success("Message has been submitted and email sent!");

                // Save to Firestore with document ID as message.name
                db.collection("contacts").doc(message.name).set({
                    name: message.name,
                    email: message.email,
                    message: message.content,
                    date: new Date()
                }).then(() => {
                    setMessage({
                        name: "",
                        email: "",
                        content: ""
                    });
                    setLoading(false);
                }).catch(err => {
                    toast.error("Failed to save message to database: " + err.message);
                    setLoading(false);
                });

            }, (err) => {
                toast.error("Failed to send email: " + err.text);
                setLoading(false);
            });
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section-title">Contact</h2>
            <div className="contact__container bd-grid">
                <div>
                    <div className="contact__information">
                        <i className='bx bx-phone contact__icon'></i>
                        <div>
                            <h3 className="contact__title">Call Me</h3>
                            <span className="contact__subtitle">+84 378-507-421</span>
                        </div>
                    </div>
                    <div className="contact__information">
                        <i className='bx bx-envelope contact__icon' ></i>
                        <div>
                            <h3 className="contact__title">E-mail</h3>
                            <span className="contact__subtitle">AlexDangDev@gmail.com</span>
                        </div>
                    </div>
                </div>
                <form className="contact__form" onSubmit={sendEmailAndSaveToDB}>
                    <input 
                        type="text" 
                        placeholder="Your name" 
                        className="contact__input" 
                        value={message.name} 
                        onChange={e => setMessage({ ...message, name: e.target.value })} 
                    />
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="contact__input" 
                        value={message.email} 
                        onChange={e => setMessage({ ...message, email: e.target.value })} 
                    />
                    <textarea 
                        cols="0" 
                        rows="10" 
                        className="contact__input" 
                        placeholder='Tell me here'
                        value={message.content} 
                        onChange={e => setMessage({ ...message, content: e.target.value })} 
                    />
                    <div className="contact__button__container">
                        <button type="submit" className="contact__button button" disabled={loading}>
                            {loading ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                </form>
            </div>
            <Toaster />
        </section>
    );
};

export default Contact;
