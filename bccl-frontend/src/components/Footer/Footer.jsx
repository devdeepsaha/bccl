import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h4>About BCCL</h4>
                        <ul>
                            {/* These links would ideally point to specific pages or sections if they existed */}
                            <li><Link to="/about/history">Our History</Link></li>
                            <li><Link to="/about/leadership">Leadership Team</Link></li>
                            <li><Link to="/about/mission">Mission & Vision</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            {/* This would link to an external tenders portal */}
                            <li><a href="https://coalindiatenders.nic.in/" target="_blank" rel="noopener noreferrer">Tenders</a></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/media">Media Center</Link></li>
                        </ul>
                    </div>
                     <div className="footer-col">
                        <h4>Contact</h4>
                        <ul>
                            <li><Link to="/contact">Head Office</Link></li>
                            <li><Link to="/contact#directory">Area Offices</Link></li>
                            <li><Link to="/contact#vigilance">Vigilance Dept.</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow Us</h4>
                        <ul className="social-links">
                             {/* Replace '#' with actual social media URLs */}
                            <li><a href="https://x.com/BCCLofficial" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
                            <li><a href="https://www.linkedin.com/company/bharat-coking-coal-limited" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://www.facebook.com/BCCLofficial/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                     &copy; {new Date().getFullYear()} Bharat Coking Coal Limited. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;