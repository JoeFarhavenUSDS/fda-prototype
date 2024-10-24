import React from 'react';
import logo from 'uswds/img/logo-img.png';

const Footer = () => (
  <footer className="usa-footer site-footer" role="contentinfo">
    <div className="footer-section-bottom" style={{backgroundColor: 'rgb(226, 226, 228)', textAlign: 'center', width: '100%'}}>
      <ul>
        <li><a href=''>FDA Archive</a></li>
        <li><a href=''>About FDA</a></li>
        <li><a href=''>Accessibility</a></li>
        <li><a href=''>Visitor Information</a></li>
        <li><a href=''>Website Policies / Privacy</a></li>
        <li><a href=''>No FEAR Act</a></li>
        <li><a href=''>Vulnerability Disclosure Policy</a></li>
        <li><a href=''>FOIA</a></li>
        <li><a href=''>HHS.gov</a></li>
        <li><a href=''>USA.gov</a></li>
      </ul>
    </div>
    <div className="footer-section-bottom" style={{backgroundColor: 'rgb(46, 41, 37)', textAlign: 'center', width: '100%'}}>
      <a href="" class="btn btn-default btn-md">Contact FDA</a>
    </div>
  </footer>
);

export default Footer;
