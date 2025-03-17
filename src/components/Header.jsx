import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`header-top-fixed one-page-nav ${
        mobileToggle ? 'menu-open menu-open-desk' : ''
      } ${scrolled ? 'fixed-header' : ''}`}
    >
      <div className="container">
        <div className="logo">
          {/* FIX: Use ScrollLink for scrolling inside the page */}
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <img className="logo-light" alt="Logo" src="/images/logo1.png" />
          </ScrollLink>
        </div>

        {/* Navigation Menu */}
        <ul className="main-menu">
          <li>
            <ScrollLink to="home" spy smooth offset={-80} duration={500}>
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" spy smooth offset={-80} duration={500}>
              About Me
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="project" spy smooth offset={-80} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="services" spy smooth offset={-80} duration={500}>
              Services
            </ScrollLink>
          </li>
          <li>
  <ScrollLink to="hireme" spy smooth offset={-80} duration={500}>
    Hire Me
  </ScrollLink>
</li>
<li>
  <ScrollLink to="consultancy" spy smooth offset={-80} duration={500}>
    Student Guide
  </ScrollLink>
</li>

          <li>
            <ScrollLink to="contactus" spy smooth offset={-80} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>

        {/* Call-to-Action */}
        <div className="d-flex">
          <ScrollLink
            to="contactus"
            spy
            smooth
            offset={-80}
            duration={500}
            className="px-btn d-none d-lg-inline-flex"
          >
            Let's Talk
          </ScrollLink>
          <button
            className="toggler-menu d-lg-none"
            onClick={() => setMobileToggle(!mobileToggle)}
          >
            <span />
          </button>
        </div>
      </div>
    </div>
  );
}
