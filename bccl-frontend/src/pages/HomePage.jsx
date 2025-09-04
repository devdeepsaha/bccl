import React from 'react';

// Import your existing components for the homepage
import Hero from '../components/Hero/Hero.jsx';
import KeyMetrics from '../components/Metrics/Metrics.jsx';
import OperationsMap from '../components/InteractiveMap/InteractiveMap.jsx';

const HomePage = () => {
    return (
        <main>
            <Hero />
            <KeyMetrics />
            <OperationsMap />
        </main>
    );
};

export default HomePage;