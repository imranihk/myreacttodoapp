import React from 'react';

const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "70vh",
    width: "100%",
    borderTop: "1px solid #6c757d",
    backgroundColor: "#212529",
    color: "#adb5bd",
    textAlign: "center",
    padding: "1rem 0"
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <p className="mb-0">
          © {new Date().getFullYear()} Imran Todo List • All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
