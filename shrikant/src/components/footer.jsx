import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#212529",
        position: "fixed",
        bottom: "0",
        width: "100%"
      }}
    >
      <span style={{ color: "white", paddingTop: "1%", paddingBottom: "1%" }}>&copy; Hegde Insurance</span>
    </div>
  );
};

export default Footer;
