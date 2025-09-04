import React, { useState } from 'react';
import '../components/Contact/ContactPage.css';
import { corporateInfo, personnel } from '../components/Contact/ContactData.js';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form Submitted!\nName: ${formData.fullName}\nEmail: ${formData.email}`);
        setFormData({ fullName: '', email: '', message: '' });
    };

    return (
        <div className="contact-page">
            <div className="container">
                <div className="page-header">
                    <h1>Get in Touch</h1>
                    <p>We're here to help. Reach out to us through the appropriate channels below.</p>
                </div>

                <div className="contact-layout">
                    {/* Left Column for Form and Essential Info */}
                    <div className="contact-main-panel">
                        <div className="corporate-info-card">
                             <div className="info-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                <span>{corporateInfo.addressLine1} {corporateInfo.addressLine2}</span>
                            </div>
                            <div className="info-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <span>{corporateInfo.phone}</span>
                            </div>
                             <div className="info-item">
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                <span>{corporateInfo.openingHours}</span>
                            </div>
                        </div>

                        <div className="contact-form-card">
                             <h3>Send us a Message</h3>
                             <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                                </div>
                                <button type="submit" className="submit-btn">Submit</button>
                            </form>
                        </div>
                    </div>

                    {/* Right Column for Personnel Directory */}
                    <div className="personnel-directory">
                        <h3 className="card-title">Key Contacts Directory</h3>
                        <div className="personnel-grid">
                            {personnel.map(person => (
                                <div key={person.name} className="personnel-card">
                                    <div className="personnel-card-header">
                                        <p className="personnel-name">{person.name}</p>
                                        <p className="personnel-designation">{person.designation}</p>
                                    </div>
                                    <div className="personnel-card-body">
                                        <div className="personnel-contact-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M7 15h10"></path><path d="M10 11h4"></path></svg>
                                            <span>{person.office}</span>
                                        </div>
                                        <div className="personnel-contact-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                            <a href={`mailto:${person.email}`}>{person.email}</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;