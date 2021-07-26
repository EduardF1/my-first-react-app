import React from "react";

const footerText = '© F.S.E.';
const copyrightYear = new Date().getFullYear();

function Footer() {
    return (
        <footer>
            <p>{footerText} {copyrightYear}</p>
        </footer>
    );
}

export default Footer;