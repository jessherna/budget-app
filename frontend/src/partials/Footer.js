import React from 'react';

const Footer = () => {
    const footerStyle = {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        padding: '10px',
        color: 'black',
        height: '2%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    return (
        <footer style={footerStyle}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Budget App. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;