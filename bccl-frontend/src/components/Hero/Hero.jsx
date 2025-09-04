import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            {/* Logo is now a direct child of the hero section for positioning */}
            <img src="/logo.png" alt="BCCL Logo" className="hero-logo" />

            <div className="hero-content">
                <h1>Bharat Coking Coal Limited</h1>
                <p>Fueling India's Growth, Responsibly and Sustainably. A Leader in the Coal Mining Sector.</p>
                {/* This link should ideally go to a real page, using <Link> from react-router-dom */}
                <a href="#map" className="hero-btn">Explore Operations</a>
            </div>
        </section>
    );
};

export default Hero;

