import React from 'react';
import logo from 'uswds/img/logo-img.png';

const Footer = () => (
  <footer className="usa-footer site-footer" role="contentinfo">
    <div className="footer-section-bottom" style={{backgroundColor: 'rgb(226, 226, 228)', textAlign: 'center', width: '100%'}}>
      <ul style={{listStyleType: 'none', color: 'black !important'}}>
        <li style={{padding:'10px'}}><a href=''>FDA Archive</a></li>
        <li style={{padding:'10px'}}><a href=''>About FDA</a></li>
        <li style={{padding:'10px'}}><a href=''>Accessibility</a></li>
        <li style={{padding:'10px'}}><a href=''>Visitor Information</a></li>
        <li style={{padding:'10px'}}><a href=''>Website Policies / Privacy</a></li>
        <li style={{padding:'10px'}}><a href=''>No FEAR Act</a></li>
        <li style={{padding:'10px'}}><a href=''>Vulnerability Disclosure Policy</a></li>
        <li style={{padding:'10px'}}><a href=''>FOIA</a></li>
        <li style={{padding:'10px'}}><a href=''>HHS.gov</a></li>
        <li style={{padding:'10px'}}><a href=''>USA.gov</a></li>
      </ul>
      <div style={{backgroundColor: 'rgb(46, 41, 37)', textAlign: 'center', width: '100%'}}>
        <a href="">Contact FDA</a>
      </div>
    </div>
  </footer>
);

export default Footer;
