import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ children, siteTitle }) => (
  <header className="usa-header usa-header--extended" role="banner">
    <div className="usa-navbar" style="background-color:rgb(26,87,173);">
      <div className="usa-logo" id="extended-logo">
        <em className="usa-logo__text">
          <Link to="/" title="Home" aria-label="Home">
            <img src="images/FDA_Logo_Icon_White.svg" style="width:82;height:60;" />
          </Link>
        </em>
      </div>
      <button className="usa-menu-btn">Menu</button>
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
