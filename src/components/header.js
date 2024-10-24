import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ children, siteTitle }) => (
  <header className="usa-header usa-header--extended" role="banner">
    <div className="usa-navbar" style={{backgroundColor: '#222c67', padding: '10px', width: '100%', height: '60px'}}>
      <img src="images/FDA_Logo_Icon_White.svg" style={{height:80, paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px'}} />
      <ul style={{listStyleType: 'none', float: 'right'}}>
        <li style={{display: 'inline-block'}}><a title="" id="btn-search" style={{borderColor: 'rgb(229,182,17)', borderRadius: '3px', borderStyle: 'solid', borderWidth: '1px', fontFamily: 'Helvetica, Arial', fontSize: '12px', fontWeight: '400', paddingBottom: '5px', paddingLeft: '10px', paddingTop: '5px', paddingRight: '10px', color: 'white'}}>
          <span class="fa fa-search" aria-hidden="true">&nbsp;</span>
          <span>Search</span>
        </a></li>
        <li style={{display: 'inline-block'}}><a id="menu-btn" style={{borderColor: 'rgb(229,182,17)', borderRadius: '3px', borderStyle: 'solid', borderWidth: '1px', fontFamily: 'Helvetica, Arial', fontSize: '12px', fontWeight: '400', paddingBottom: '5px', paddingLeft: '10px', paddingTop: '5px', paddingRight: '10px', color: 'white'}} href="#primary-nav" data-toggle="collapse" aria-expanded="true">
          <span class="fa fa-bars" aria-hidden="true">&nbsp;</span>
          <span>Menu</span>
        </a></li>
      </ul>
    </div>
    {children}
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
