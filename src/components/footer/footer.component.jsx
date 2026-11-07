import React from 'react';
import "./footer.styles.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__title">Alex Dang (Đặng Xuân Tùng)</p>
            <p style={{ margin: '-1rem 0 1.5rem', opacity: 0.9, fontSize: '0.95rem' }}>
                Senior Mobile Engineer &amp; Fullstack Developer • Flutter Tech Lead
            </p>
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/alexdang2000/" target="_blank" rel="noopener noreferrer" className="footer__icon" title="LinkedIn">
                    <i className="bx bxl-linkedin"></i>
                </a>
                <a href="https://github.com/ALexDangCoder" target="_blank" rel="noopener noreferrer" className="footer__icon" title="GitHub">
                    <i className="bx bxl-github"></i>
                </a>
                <a href="mailto:AlexDangDev@gmail.com" className="footer__icon" title="Email">
                    <i className="bx bx-envelope"></i>
                </a>
                <a href="https://www.facebook.com/DevAlex0111" target="_blank" rel="noopener noreferrer" className="footer__icon" title="Facebook">
                    <i className="bx bxl-facebook"></i>
                </a>
            </div>
            <p>&#169; {new Date().getFullYear()} Alex Dang. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
