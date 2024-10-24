/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Banner from './banner';
import Footer from './footer';
import Header from './header';
import Nav from './nav';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          navigation {
            title
            items {
              text
              link
            }
          }
          secondaryLinks {
            text
            link
          }
        }
      }
    }
  `);

  const { title, navigation, secondaryLinks } = data.site.siteMetadata;

  return (
    <>
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>
      <Banner />
      <div className="usa-overlay" />
<div class="row fda-masthead">
							<div class="col-xs-4 col-md-8"> 
					<a href="/" title="FDA Homepage">
						<h1 class="fda-masthead__fda-logo">U.S. Food and Drug Administration</h1>
					</a>
       	</div>
				
        <div class="col-xs-8 col-md-4">
          <ul class="fda-masthead__item-list">
            <li><a title="" id="btn-search" class="btn btn-default btn-sm fda-masthead__btn-search">
              <span class="fa fa-search" aria-hidden="true">&nbsp;</span>
              <span class="fda-masthead__btn-label">Search</span>
            </a></li>
            <li><a id="menu-btn" class="btn btn-default btn-sm fda-masthead__btn-menu collapsed" href="#primary-nav" data-toggle="collapse" aria-expanded="true">
              <span class="fa fa-bars" aria-hidden="true">&nbsp;</span>
              <span class="fda-masthead__btn-label">Menu</span>
            </a></li>
          </ul>
				</div>
							
						<form class="fda-masthead__search sr-only" role="search" action="/search" method="GET" name="searchForm" id="search-form" accept-charset="UTF-8">
							
							<div class="search-popover" id="search-popover">
								<div class="input-group pull-right" id="search-group">
									<label class="sr-only" for="search-query">Search FDA</label>
									
									<input class="form-control search-input" id="search-query" name="s" aria-autocomplete="list" aria-haspopup="true" title="Enter the terms you wish to search for." placeholder="Search FDA" type="text"> 
									
									<span class="input-group-btn" id="input-group-btn">
										
										<button type="submit" class="btn btn-danger search-btn" id="search-btn" title="Search"><span class="fa fa-search" aria-hidden="true"><span class="sr-only">Submit search</span></span></button>

									</span>

								</div>
							</div>
																				
						</form>					

			</div>
  {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
