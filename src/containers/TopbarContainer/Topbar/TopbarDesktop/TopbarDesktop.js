import React, { useState, useEffect } from 'react';
import { bool, func, object, number, string } from 'prop-types';
import classNames from 'classnames';

import { FormattedMessage, intlShape } from '../../../../util/reactIntl';
import { ACCOUNT_SETTINGS_PAGES } from '../../../../routing/routeConfiguration';
import { propTypes } from '../../../../util/types';
import {
  Avatar,
  InlineTextButton,
  LinkedLogo,
  Menu,
  MenuLabel,
  MenuContent,
  MenuItem,
  NamedLink,
} from '../../../../components';

import TopbarSearchForm from '../TopbarSearchForm/TopbarSearchForm';

import css from './TopbarDesktop.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const TopbarDesktop = props => {
  const {
    className,
    appConfig,
    currentUser,
    currentPage,
    rootClassName,
    currentUserHasListings,
    notificationCount,
    intl,
    isAuthenticated,
    onLogout,
    onSearchSubmit,
    initialSearchFormValues,
  } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const marketplaceName = appConfig.marketplaceName;
  const authenticatedOnClientSide = mounted && isAuthenticated;
  const isAuthenticatedOrJustHydrated = isAuthenticated || !mounted;

  const classes = classNames(rootClassName || css.root, className);

  const search = (
    <TopbarSearchForm
      className={css.searchLink}
      desktopInputRoot={css.topbarSearchWithLeftPadding}
      onSubmit={onSearchSubmit}
      initialValues={initialSearchFormValues}
      appConfig={appConfig}
    />
  );

  const notificationDot = notificationCount > 0 ? <div className={css.notificationDot} /> : null;

  const messages = authenticatedOnClientSide ? (
    <NamedLink
      className={css.inboxLink}
      name="InboxPage"
      params={{ tab: currentUserHasListings ? 'sales' : 'orders' }}
    >
      <span className={css.inbox}>
        Messages
        {notificationDot}
      </span>
    </NamedLink>
  ) : null;

  const currentPageClass = page => {
    const isAccountSettingsPage =
      page === 'AccountSettingsPage' && ACCOUNT_SETTINGS_PAGES.includes(currentPage);
    return currentPage === page || isAccountSettingsPage ? css.currentPage : null;
  };

  const profileMenu = authenticatedOnClientSide ? (
    <Menu>
      <MenuLabel className={css.profileMenuLabel} isOpenClassName={css.profileMenuIsOpen}>
        <Avatar className={css.avatar} user={currentUser} disableProfileLink />
      </MenuLabel>
      <MenuContent className={css.profileMenuContent}>
        <MenuItem key="ManageListingsPage">
          <NamedLink
            className={classNames(css.yourListingsLink, currentPageClass('ManageListingsPage'))}
            name="ManageListingsPage"
          >
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.yourListingsLink" />
          </NamedLink>
        </MenuItem>
        <MenuItem key="ProfileSettingsPage">
          <NamedLink
            className={classNames(css.profileSettingsLink, currentPageClass('ProfileSettingsPage'))}
            name="ProfileSettingsPage"
          >
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.profileSettingsLink" />
          </NamedLink>
        </MenuItem>
        <MenuItem key="AccountSettingsPage">
          <NamedLink
            className={classNames(css.yourListingsLink, currentPageClass('AccountSettingsPage'))}
            name="AccountSettingsPage"
          >
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.accountSettingsLink" />
          </NamedLink>
        </MenuItem>
        <MenuItem key="logout">
          <InlineTextButton rootClassName={css.logoutButton} onClick={onLogout}>
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.logout" />
          </InlineTextButton>
        </MenuItem>
      </MenuContent>
    </Menu>
  ) : null;

  const signupLink = isAuthenticatedOrJustHydrated ? null : (
    <NamedLink name="SignupPage" className={css.signupLink}>
      <span className={css.signup}>
        <FormattedMessage id="TopbarDesktop.signup" />
      </span>
    </NamedLink>
  );

  const loginLink = isAuthenticatedOrJustHydrated ? null : (
    <NamedLink name="LoginPage" className={css.loginLink}>
      <span className={css.login}>
        <FormattedMessage id="TopbarDesktop.login" />
      </span>
    </NamedLink>
  );

  const activeClassName = 'my-active-class';
    
    const landingPageProps = {
        name: 'LandingPage',
        activeClassName,
        match: { url: '/' },
      };


      const location = useLocation();
      const path = location.pathname;
    
     // const listingText = role === "Seller"?"TopbarDesktop.createJob":"TopbarDesktop.createGig";
    //(path==="/" || path==="/login" || path==="/account/seller-instruction" || path==="/signup" || path==="/s")?"":
      const newListLink = 
        <NamedLink className={css.createListingLink} name="NewListingPage">
          <span className={css.createListing}>
           Listings
          </span>
        </NamedLink>
      ;

      const inboxLink = authenticatedOnClientSide ? (
        <NamedLink
          className={css.inboxLink}
          name="InboxPage"
          params={{ tab: currentUserHasListings ? 'sales' : 'orders' }}
        >
          <span className={css.inbox}>
            <FormattedMessage id="TopbarDesktop.inbox" />
            {notificationDot}
          </span>
        </NamedLink>
      ) : null;
    



  return (
          <div className={css.navs}>
            <nav className={classNames(classes, css.top_nav)}>
                  
                    <div> <NamedLink {...landingPageProps} className={css.btn_1}>Need storage?</NamedLink></div>
                    <div><NamedLink {...landingPageProps} className={css.btn_1}>List my items</NamedLink></div>
              
                  
            </nav>
            <nav className={classes}>
            
                  <div>
                      <LinkedLogo
                        className={css.logoLink}
                        format="desktop"
                        alt={intl.formatMessage({ id: 'TopbarDesktop.logo' }, { marketplaceName })}
                      />
                        
                  </div>
                  
                  <div className={css.nav_links}>

                      <NamedLink {...landingPageProps} className={css.btn_1}>Home</NamedLink>
                      {newListLink}
                      <NamedLink {...landingPageProps} className={css.btn_1}>About</NamedLink>
                      {messages}
                      <NamedLink {...landingPageProps} className={css.btn_1}>Contact</NamedLink>
                      {loginLink}
                      <NamedLink {...landingPageProps} className={css.btn_1}><FontAwesomeIcon icon={faBell}/></NamedLink>
                      <NamedLink {...landingPageProps} className={css.btn_1}><FontAwesomeIcon icon={faHeart}/></NamedLink>
                      <NamedLink {...landingPageProps} className={css.btn_1}><FontAwesomeIcon icon={faCartShopping}/></NamedLink>
                      <NamedLink {...landingPageProps} className={css.btn_1}><FontAwesomeIcon icon={faUser}/></NamedLink>
                      {profileMenu}
                      
     
                  </div>

            </nav>
  </div>
  );
};

TopbarDesktop.defaultProps = {
  rootClassName: null,
  className: null,
  currentUser: null,
  currentPage: null,
  notificationCount: 0,
  initialSearchFormValues: {},
  appConfig: null,
};

TopbarDesktop.propTypes = {
  rootClassName: string,
  className: string,
  currentUserHasListings: bool.isRequired,
  currentUser: propTypes.currentUser,
  currentPage: string,
  isAuthenticated: bool.isRequired,
  onLogout: func.isRequired,
  notificationCount: number,
  onSearchSubmit: func.isRequired,
  initialSearchFormValues: object,
  intl: intlShape.isRequired,
  appConfig: object,
};

export default TopbarDesktop;
