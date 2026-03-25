import * as React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerMain">
        {/* Brand */}
        <div className="footerBrand">
          <ReactRouterLink to="/" className="footerLogo">
            <img src="/img/s_logo.svg" alt="SAIL" className="footerLogoImg" />
            <span className="footerLogoText">SAIL</span>
          </ReactRouterLink>
          <p className="footerDesc">
            Boston University Hariri Institute for Computing.
            <br />
            Innovating at the intersection of computing and research.
          </p>
          {/* BU attribution */}
          <div className="footerBuRow">
            <img
              src="/img/bu-logo.png"
              alt="Boston University"
              className="footerBuLogo"
            />
            <span className="footerBuText">
              Boston University Rafik B. Hariri Institute for Computing and
              Computational Science &amp; Engineering
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footerCol">
          <div className="footerColTitle">Quick Links</div>
          <ReactRouterLink to="/" className="footerLink">
            Home
          </ReactRouterLink>
          <ReactRouterLink to="/projects" className="footerLink">
            Projects
          </ReactRouterLink>
          <ReactRouterLink to="/people" className="footerLink">
            People
          </ReactRouterLink>
          <ReactRouterLink to="/#contact" className="footerLink">
            Contact
          </ReactRouterLink>
          <ReactRouterLink to="/join" className="footerLink">
            Join
          </ReactRouterLink>
        </div>

        {/* Connect */}
        <div className="footerCol">
          <div className="footerColTitle">Connect</div>
          <a href="mailto:sail@bu.edu" className="footerLink">
            sail@bu.edu
          </a>
          <ReactRouterLink to="/#contact" className="footerLink">
            Contact Us
          </ReactRouterLink>
          <a
            href="https://github.com/hicsail"
            className="footerLink"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.bu.edu"
            className="footerLink"
            target="_blank"
            rel="noreferrer"
          >
            BU Home
          </a>
        </div>

        {/* Location */}
        <div className="footerCol">
          <div className="footerColTitle">Our Location</div>
          <p className="footerAddress">
            Hariri Institute for Computing
            <br />
            665 Commonwealth Ave., 12th Floor
            <br />
            Boston, MA 02215
          </p>
          <a
            href="https://maps.bu.edu/?id=647#!ce/29650?m/558432?sbc/"
            className="footerMapBtn"
            target="_blank"
            rel="noreferrer"
          >
            Find Us On Campus
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footerBottom">
        <span className="footerCopy">
          © {new Date().getFullYear()} Boston University Hariri Institute for
          Computing. All rights reserved.
        </span>
        <div className="footerSocials">
          <a
            href="mailto:sail@bu.edu"
            className="footerSocialLink"
            aria-label="Email"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '1.1rem' }}
            >
              mail
            </span>
          </a>
          <a
            href="https://twitter.com/hicsail"
            className="footerSocialLink"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '1.1rem' }}
            >
              share
            </span>
          </a>
          <a
            href="https://www.linkedin.com/company/bu-sail/"
            className="footerSocialLink"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '1.1rem' }}
            >
              language
            </span>
          </a>
          <a
            href="https://github.com/hicsail"
            className="footerSocialLink"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '1.1rem' }}
            >
              code
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
