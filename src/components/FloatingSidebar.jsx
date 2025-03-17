import React from "react";
import { Icon } from "@iconify/react";

const FloatingSidebar = () => {
  return (
    <>
      <div className="floating-sidebar">
        <a
          href="https://wa.me/918755465950"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="mdi:whatsapp" />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-sharma-863442171/?trk=opento_sprofile_details"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="mdi:linkedin" />
        </a>
        <a
          href="https://github.com/Abhishek-8755"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="mdi:github" />
        </a>
        <a href="tel:8755465950">
          <Icon icon="mdi:phone" />
        </a>
      </div>

      {/* ✅ "Hire Me" Button - Circular Floating Popup */}
      <a
        href="https://wa.me/918755465950"
        target="_blank"
        rel="noopener noreferrer"
        className="hire-me-button"
      >
        Hire Me
      </a>
    </>
  );
};

export default FloatingSidebar;
