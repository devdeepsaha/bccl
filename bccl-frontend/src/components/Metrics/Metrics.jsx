import React from 'react';
import MetricCard from './MetricCard.jsx';
import './Metrics.css';

const Metrics = () => {
    const metricsData = [
        { icon: "⛏️", value: "40 MT+", label: "Annual Coal Production" },
        { icon: "👷", value: "45,000+", label: "Dedicated Workforce" },
        { icon: "✅", value: "98.9%", label: "Safety Compliance Rate" },
        { icon: "🌳", value: "500 Ha", label: "Land Reclaimed Annually" },
    ];

    return (
        <section id="metrics" className="section metrics-section">
            <div className="container">
                <h2 className="section-title">Our Performance at a Glance</h2>
                <p className="section-subtitle">We are committed to excellence in production, safety, and community development. Our key performance indicators reflect this dedication.</p>
                <div className="metrics-grid">
                    {metricsData.map((metric, index) => (
                        <MetricCard key={index} icon={metric.icon} value={metric.value} label={metric.label} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Metrics;
