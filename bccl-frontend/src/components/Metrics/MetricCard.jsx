import React from 'react';
// Styles are in Metrics.css

const MetricCard = ({ icon, value, label }) => {
    return (
        <div className="metric-card">
            <div className="icon">{icon}</div>
            <h3>{value}</h3>
            <p>{label}</p>
        </div>
    );
};

export default MetricCard;
