import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Global Styles
import './index.css';

// Import Layout Components
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import DataTicker from './components/DataTicker/DataTicker.jsx';
import Chatbot from './components/Chatbot/Chatbot.jsx';

// Import Page Components
import HomePage from './pages/HomePage.jsx';
import CareersPage from './pages/CareersPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer />
                <DataTicker />
                <Chatbot />
            </div>
        </Router>
    );
}

export default App;