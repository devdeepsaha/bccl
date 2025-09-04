import React, {useState} from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import coalImage from '../../assets/coal.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => setIsOpen(false);

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
    };

    return (
        <header className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="logo-wrapper" onClick={closeMenu}>
                    <img src={coalImage} alt="Coal India Logo" className="coal-india-logo" />
                    <span className="navbar-logo-text">PROJECT <span className="highlight">MITRA</span></span>
                </Link>

                <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation">
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                </button>

                <nav className={`nav ${isOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        {isHomePage ? (
                            <>
                                <li className="nav-item">
                                    <a href="#metrics" className="nav-link" onClick={(e) => handleScroll(e, 'metrics')}>Key Metrics</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#map" className="nav-link" onClick={(e) => handleScroll(e, 'map')}>Operations Map</a>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink>
                            </li>
                        )}
                        <li className="nav-item"><NavLink to="/careers" className="nav-link" onClick={closeMenu}>Careers</NavLink></li>
                        <li className="nav-item"><NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact Us</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;