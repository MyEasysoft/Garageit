/**
 *  TopbarMobileMenu prints the menu content for authenticated user or
 * shows login actions for those who are not authenticated.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ACCOUNT_SETTINGS_PAGES } from '../../../../routing/routeConfiguration';
import { FormattedMessage } from '../../../../util/reactIntl';
import { propTypes } from '../../../../util/types';
import { ensureCurrentUser } from '../../../../util/data';

import {
  AvatarLarge,
  InlineTextButton,
  NamedLink,
  NotificationBadge,
} from '../../../../components';

import css from './TopbarMobileMenu.module.css';
import home_icon from '../../../../assets/icons/home_icon.png';
import msg_icon from '../../../../assets/icons/msg_icon.png';
import favourite_icon from '../../../../assets/icons/favorite_icon.png';
import refer_icon from '../../../../assets/icons/refer_icon.png';
import reward_icon from '../../../../assets/icons/reward_icon.png';
import logout_icon from '../../../../assets/icons/logout_icon.png';
import signup_icon from '../../../../assets/icons/signup_icon.png';


const TopbarMobileMenu = props => {
  const {
    isAuthenticated,
    currentPage,
    currentUserHasListings,
    currentUser,
    notificationCount,
    onLogout,
  } = props;

  const user = ensureCurrentUser(currentUser);

  if (!isAuthenticated) {
    const signup = (
      <NamedLink name="SignupPage" className={css.signupLink}>
        <img className={css.icons} src={signup_icon} />
        <FormattedMessage id="TopbarMobileMenu.signupLink" />
      </NamedLink>
    );

    const login = (
      <NamedLink name="LoginPage" className={css.loginLink}>
        <img className={css.icons} src={logout_icon} />
        <FormattedMessage id="TopbarMobileMenu.loginLink" />
      </NamedLink>
    );

    const signupOrLogin = (
      <span className={css.authenticationLinks}>
        <FormattedMessage id="TopbarMobileMenu.signupOrLogin" values={{ signup, login }} />
      </span>
    );
    return (
      <div className={css.root}>
        <div className={css.content_out}>

          
          <h1 className={css.welcomeHeader}>Welcome</h1>
         
          {signup}
          {login}
        </div>
        <hr className={css.rule}/>
       
      </div>
    );
  }

  const notificationCountBadge =
    notificationCount > 0 ? (
      <NotificationBadge className={css.notificationBadge} count={notificationCount} />
    ) : null;

  const displayName = user.attributes.profile.firstName;
  const currentPageClass = page => {
    const isAccountSettingsPage =
      page === 'AccountSettingsPage' && ACCOUNT_SETTINGS_PAGES.includes(currentPage);
    return currentPage === page || isAccountSettingsPage ? css.currentPage : null;
  };

  return (
    <div className={css.root}>
      <div className={css.profile}>
        <AvatarLarge className={css.avatar} user={currentUser} />
        <div className={css.profile_text}>
          <h3 className={css.header}>Ashfak Sayem</h3>
          <p className={css.header}>ashfaksayem@gmail.com</p>
        </div>
      </div>
      
      <div className={css.content}>
       <hr className={css.rule}/>
       
        <NamedLink
          className={classNames(css.inbox, currentPageClass('LandingPage'))}
          name="LandingPage"
          params={{ tab: currentUserHasListings ? 'sales' : 'orders' }}
        >
          <img className={css.icons} src={home_icon} />
          Home
        </NamedLink>
        <NamedLink
          className={classNames(css.inbox, currentPageClass('InboxPage'))}
          name="InboxPage"
          params={{ tab: currentUserHasListings ? 'sales' : 'orders' }}
        >
          <img className={css.icons} src={msg_icon} />
          Message
          {notificationCountBadge}
        </NamedLink>
        <NamedLink
          className={classNames(css.navigationLink, currentPageClass('ManageListingsPage'))}
          name="ManageListingsPage"
        >
          <img className={css.icons} src={favourite_icon} />
          Favourite
        </NamedLink>
        <NamedLink
          className={classNames(css.navigationLink, currentPageClass('ProfileSettingsPage'))}
          name="ProfileSettingsPage"
        >
          <img className={css.icons} src={refer_icon} />
          Refer a friend
        </NamedLink>
        <NamedLink
          className={classNames(css.navigationLink, currentPageClass('AccountSettingsPage'))}
          name="AccountSettingsPage"
        >
          <img className={css.icons} src={reward_icon} />
          Rewards
        </NamedLink>
        <div className={css.spacer} />
      </div>

      <div className={css.logout_div}>
      <hr className={css.rule}/>
     

        <InlineTextButton rootClassName={css.logoutButton} onClick={onLogout}>
          <img className={css.icons} src={logout_icon} />
          <FormattedMessage id="TopbarMobileMenu.logoutLink" />
        </InlineTextButton>
      </div>


     
    </div>
  );
};

TopbarMobileMenu.defaultProps = { currentUser: null, notificationCount: 0, currentPage: null };

const { bool, func, number, string } = PropTypes;

TopbarMobileMenu.propTypes = {
  isAuthenticated: bool.isRequired,
  currentUserHasListings: bool.isRequired,
  currentUser: propTypes.currentUser,
  currentPage: string,
  notificationCount: number,
  onLogout: func.isRequired,
};

export default TopbarMobileMenu;
