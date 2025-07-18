import React, { useState, useEffect } from 'react';
import './FloatingDarkMode.css';

const FloatingDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Aplicar modo oscuro al body
    useEffect(() => {
        if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.documentElement.classList.add('dark-mode');
        } else {
        document.body.classList.remove('dark-mode');
        document.documentElement.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    // Persistir preferencia del usuario
    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode === 'true') {
        setIsDarkMode(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', isDarkMode.toString());
    }, [isDarkMode]);

    return (
        <div className="floating-dark-mode">
        <button 
            className={`floating-toggle ${isDarkMode ? 'dark' : 'light'}`}
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
            title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
            <div className="toggle-icon">
            {isDarkMode ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
            ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
            )}
            </div>
        </button>
        </div>
    );
};

export default FloatingDarkMode;