import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import db from "../../utils/firebase";
import "./contact.styles.css";

const Contact = () => {
    const [message, setMessage] = useState({
        name: "",
        email: "",
        content: ""
    });
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);

    const sendEmailAndSaveToDB = (e) => {
        e.preventDefault();

        if (!message.name || !message.email || !message.content) {
            setStatusMessage({ type: "error", text: "Name, email, and message content cannot be empty." });
            return;
        }

        setLoading(true);
        setStatusMessage(null);

        const templateParams = {
            from_name: message.name,
            reply_to: message.email,
            message: message.content,
            to_name: "Alex Dang",
        };

        emailjs.send('alex-dang_my_portfolio', 'template_alex-portfolio', templateParams, 'bpHV1ByfBuWaoZQS7')
            .then(() => {
                setStatusMessage({ type: "success", text: "Message delivered successfully." });

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
                }).catch(() => {
                    setLoading(false);
                });
            }, (err) => {
                setStatusMessage({ type: "error", text: "Failed to deliver message: " + (err.text || "network error") });
                setLoading(false);
            });
    };

    return (
        <section className="contact" id="contact">
            <div className="bd-grid">
                <h2 className="contact__headline" data-reveal>Direct Contact</h2>
                <p className="contact__intro" data-reveal>
                    Open to technical leadership roles, engineering consultancy, and high-impact mobile projects.
                </p>

                <div className="contact__container">
                    <div className="contact__channels" data-reveal>
                        <div className="contact__channel-item" data-reveal>
                            <span className="contact__channel-label">Email</span>
                            <span className="contact__channel-value">
                                <a href="mailto:AlexDangDev@gmail.com">AlexDangDev@gmail.com</a>
                            </span>
                        </div>

                        <div className="contact__channel-item" data-reveal>
                            <span className="contact__channel-label">GitHub</span>
                            <span className="contact__channel-value">
                                <a href="https://github.com/ALexDangCoder" target="_blank" rel="noopener noreferrer">
                                    github.com/ALexDangCoder
                                </a>
                            </span>
                        </div>

                        <div className="contact__channel-item" data-reveal>
                            <span className="contact__channel-label">Location</span>
                            <span className="contact__channel-value">
                                Hanoi City, Vietnam
                            </span>
                        </div>

                        <div className="contact__channel-item" data-reveal>
                            <span className="contact__channel-label">LinkedIn</span>
                            <span className="contact__channel-value">
                                <a href="https://www.linkedin.com/in/alexdang2000/" target="_blank" rel="noopener noreferrer">
                                    linkedin.com/in/alexdang2000
                                </a>
                            </span>
                        </div>
                    </div>

                    <form className="contact__form" onSubmit={sendEmailAndSaveToDB} data-reveal>
                        <div className="contact__field">
                            <label htmlFor="contact-name" className="contact__label">Your Name</label>
                            <input 
                                id="contact-name"
                                type="text" 
                                className="contact__input" 
                                value={message.name} 
                                onChange={e => setMessage({ ...message, name: e.target.value })} 
                                required
                            />
                        </div>

                        <div className="contact__field">
                            <label htmlFor="contact-email" className="contact__label">Your Email Address</label>
                            <input 
                                id="contact-email"
                                type="email" 
                                className="contact__input" 
                                value={message.email} 
                                onChange={e => setMessage({ ...message, email: e.target.value })} 
                                required
                            />
                        </div>

                        <div className="contact__field">
                            <label htmlFor="contact-content" className="contact__label">Project or Inquiry Details</label>
                            <textarea 
                                id="contact-content"
                                rows="5" 
                                className="contact__input" 
                                value={message.content} 
                                onChange={e => setMessage({ ...message, content: e.target.value })} 
                                required
                            />
                        </div>

                        {statusMessage && (
                            <p style={{ 
                                fontSize: 'var(--step-small)', 
                                fontWeight: 600, 
                                color: statusMessage.type === 'success' ? '#16a34a' : '#dc2626' 
                            }}>
                                {statusMessage.text}
                            </p>
                        )}

                        <button type="submit" className="button button--dark contact__submit-btn" disabled={loading}>
                            {loading ? 'Submitting...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
