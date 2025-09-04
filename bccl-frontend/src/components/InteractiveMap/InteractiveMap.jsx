import React, { useState, useRef, useEffect } from 'react';
import mapImage from '../../assets/map.png';
import './InteractiveMap.css';
import { mapPoints } from './mapData.js';

const OperationsMap = () => {
    const [activePoint, setActivePoint] = useState(null);
    const [zoom, setZoom] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const mapRef = useRef(null);
    const startPos = useRef({ x: 0, y: 0 });

    const handlePointClick = (id) => {
        // If the clicked point is already active, deactivate it. Otherwise, activate it.
        setActivePoint(prevActivePoint => (prevActivePoint === id ? null : id));
    };

    const handleZoomIn = () => {
        setZoom(prevZoom => Math.min(prevZoom + 0.2, 3));
    };

    const handleZoomOut = () => {
        const newZoom = Math.max(zoom - 0.2, 1);
        setZoom(newZoom);
    };

    const handleMouseDown = (e) => {
        if (zoom > 1) {
            setIsDragging(true);
            startPos.current = { x: e.clientX - position.x, y: e.clientY - position.y };
            mapRef.current.style.cursor = 'grabbing';
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging || zoom <= 1) return;
        
        const x = e.clientX - startPos.current.x;
        const y = e.clientY - startPos.current.y;
        
        const mapWidth = mapRef.current.offsetWidth;
        const mapHeight = mapRef.current.offsetHeight;
        const maxX = (mapWidth * zoom - mapWidth) / 2;
        const maxY = (mapHeight * zoom - mapHeight) / 2;

        const constrainedX = Math.max(Math.min(x, maxX), -maxX);
        const constrainedY = Math.max(Math.min(y, maxY), -maxY);
        
        setPosition({ x: constrainedX, y: constrainedY });
    };

    const handlePanEnd = () => {
        setIsDragging(false);
        if (mapRef.current) {
            mapRef.current.style.cursor = 'grab';
        }
    };
    
    const handleTouchStart = (e) => {
        if (zoom > 1) {
            setIsDragging(true);
            const touch = e.touches[0];
            startPos.current = { x: touch.clientX - position.x, y: touch.clientY - position.y };
        }
    };

    const handleTouchMove = (e) => {
        if (!isDragging || zoom <= 1) return;

        // Prevent default behavior to avoid scrolling the page
        e.preventDefault(); 
        
        const touch = e.touches[0];
        const x = touch.clientX - startPos.current.x;
        const y = touch.clientY - startPos.current.y;
        
        // Calculate the boundaries to constrain panning
        const mapWidth = mapRef.current.offsetWidth;
        const mapHeight = mapRef.current.offsetHeight;
        const maxX = (mapWidth * zoom - mapWidth) / 2;
        const maxY = (mapHeight * zoom - mapHeight) / 2;

        const constrainedX = Math.max(Math.min(x, maxX), -maxX);
        const constrainedY = Math.max(Math.min(y, maxY), -maxY);
        
        setPosition({ x: constrainedX, y: constrainedY });
    };

    const handleTouchEndOrCancel = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (zoom === 1) {
            setPosition({ x: 0, y: 0 });
        }
    }, [zoom]);
    
    const selectedPoint = activePoint ? mapPoints.find(p => p.id === activePoint) : null;

    return (
        <section id="map" className="section map-section">
            <div className="container">
                <h2 className="section-title">Our Operational Areas</h2>
                <p className="section-subtitle">Explore our key mining divisions. Click on a point to see its details.</p>
                
                <div className="map-layout">
                    <div 
                        className="map-container"
                        ref={mapRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handlePanEnd}
                        onMouseLeave={handlePanEnd}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEndOrCancel}
                    >
                        <div className="zoom-controls">
                            <button onClick={handleZoomIn}>+</button>
                            <button onClick={handleZoomOut}>-</button>
                        </div>
                        <div 
                            className="pannable-map"
                            style={{
                                transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                                cursor: zoom > 1 ? 'grab' : 'default',
                            }}
                        >
                            <img src={mapImage} alt="Map of BCCL operational areas" />
                            {mapPoints.map(point => (
                                <div
                                    key={point.id}
                                    className={`map-point ${activePoint === point.id ? 'active' : ''}`}
                                    style={{ top: point.top, left: point.left }}
                                    onClick={() => handlePointClick(point.id)}
                                >
                                    <div className="dot" style={{ '--zoom-level': zoom }}></div>
                                    <div className="default-label" style={{ '--zoom-level': zoom }}>
                                        {point.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="info-panel">
                        {selectedPoint ? (
                            <div className="info-panel-content">
                                <h3>{selectedPoint.name}</h3>
                                <p>{selectedPoint.description}</p>
                                <a 
                                    href={`https://www.google.com/search?q=${encodeURIComponent(selectedPoint.searchQuery)}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="learn-more-btn"
                                >
                                    Learn More
                                </a>
                            </div>
                        ) : (
                           <div className="info-panel-placeholder">
                               <p>Click on a point on the map to view details.</p>
                           </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OperationsMap;