import React from 'react';

const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "70vh",
    width: "100%",
    borderTop: "1px solid #555",
    padding: "1rem 0",
    backgroundColor: "#343a40",
    color: "#fff",
    textAlign: "center"
  };

  return (
    <footer style={footerStyle}>
      <p className="mb-0">
        © {new Date().getFullYear()} Imran Todo List. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
