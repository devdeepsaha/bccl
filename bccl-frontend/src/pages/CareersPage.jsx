import React, { useState } from 'react';
import { careerData } from '../components/Careers/CareerData.js';
import '../components/Careers/Careers.css';

const categoryStyles = {
    Results: { icon: '🏆', color: '#e68787ff' },
    Applications: { icon: '📝', color: '#88b6d4ff' },
    Recruitment: { icon: '👥', color: '#c199d2ff' },
    'Internal Notices': { icon: '📢', color: '#dfc69eff' },
};

const CareerCard = ({ notice }) => {
    const { icon, color } = categoryStyles[notice.category] || { icon: '📄', color: '#7f8c8d' };
    
    return (
        <a href={notice.link} className="career-card-link">
            <div className="career-card" style={{ borderLeftColor: color }}>
                <div className="card-icon" style={{ backgroundColor: color }}>
                    {icon}
                </div>
                <div className="card-content">
                    <p className="card-category">{notice.category}</p>
                    <h4 className="card-title">{notice.title}</h4>
                    <div className="card-footer">
                        <span className="card-date">{new Date(notice.date).toLocaleDateString('en-GB')}</span>
                        {notice.isNew && <span className="new-badge">NEW</span>}
                    </div>
                </div>
            </div>
        </a>
    );
};

const CareersPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Recruitment', 'Applications', 'Results', 'Internal Notices'];

    const filteredData = (activeCategory === 'All'
        ? careerData
        : careerData.filter(notice => notice.category === activeCategory)
    ).sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by most recent

    return (
        <div className="careers-page">
            <div className="container">
                <div className="page-header">
                    <h1>Careers & Opportunities</h1>
                    <p>Explore current openings, results, and notifications from BCCL.</p>
                </div>

                <div className="filter-tabs">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`tab-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="career-cards-container">
                    {filteredData.length > 0 ? (
                        filteredData.map(notice => (
                            <CareerCard key={notice.id} notice={notice} />
                        ))
                    ) : (
                        <p className="no-results-message">No notices found in this category.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CareersPage;