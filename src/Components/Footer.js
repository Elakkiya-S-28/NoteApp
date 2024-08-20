import React from 'react';
import './Style.css';
function Footer() {
    
        const currentyear = new Date().getFullYear();
        return (
        <div className="footer">
            <p>Copyrights © {currentyear} </p>
        </div>
        );
}

export default Footer;