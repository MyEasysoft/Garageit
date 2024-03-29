import React, { useState, useEffect } from 'react';
import { bool, func, object, oneOf, shape } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';

import { useConfiguration } from '../../context/configurationContext';
import { useRouteConfiguration } from '../../context/routeConfigurationContext';
import { camelize } from '../../util/string';
import { pathByRouteName } from '../../util/routes';
import { apiBaseUrl } from '../../util/api';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { ensureCurrentUser } from '../../util/data';
import {
  isSignupEmailTakenError,
  isTooManyEmailVerificationRequestsError,
} from '../../util/errors';

import { login, authenticationInProgress, signup, signupWithIdp } from '../../ducks/auth.duck';
import { isScrollingDisabled, manageDisableScrolling } from '../../ducks/ui.duck';
import { sendVerificationEmail } from '../../ducks/user.duck';

import {
  Page,
  Heading,
  NamedRedirect,
  LinkTabNavHorizontal,
  SocialLoginButton,
  ResponsiveBackgroundImageContainer,
  Modal,
  LayoutSingleColumn,
  NamedLink,
  FieldTextInput,
  PrimaryButton,
} from '../../components';

import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';
import FooterContainer from '../../containers/FooterContainer/FooterContainer';

import TermsAndConditions from './TermsAndConditions/TermsAndConditions';
import ConfirmSignupForm from './ConfirmSignupForm/ConfirmSignupForm';
import LoginForm from './LoginForm/LoginForm';
import SignupForm from './SignupForm/SignupForm';
import EmailVerificationInfo from './EmailVerificationInfo';

// We need to get ToS asset and get it rendered for the modal on this page.
import { TermsOfServiceContent } from '../../containers/TermsOfServicePage/TermsOfServicePage';

// We need to get PrivacyPolicy asset and get it rendered for the modal on this page.
import { PrivacyPolicyContent } from '../../containers/PrivacyPolicyPage/PrivacyPolicyPage';

import { TOS_ASSET_NAME, PRIVACY_POLICY_ASSET_NAME } from './AuthenticationPage.duck';

import css from './AuthenticationPage.module.css';
import { FacebookLogo, GoogleLogo } from './socialLoginLogos';
import formBg from '../../assets/garage.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import img1 from '../../assets/gift.png';
import map from '../../assets/map.png';
import { faCancel, faClose } from '@fortawesome/free-solid-svg-icons';
import DynamicMapboxMap from '../../components/Map/DynamicMapboxMap';
import SearchMap from '../SearchPage/SearchMap/SearchMap';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

// Social login buttons are needed by AuthenticationForms
export const SocialLoginButtonsMaybe = props => {
  const routeConfiguration = useRouteConfiguration();
  const { isLogin, showFacebookLogin, showGoogleLogin, from } = props;
  const showSocialLogins = showFacebookLogin || showGoogleLogin;

  const getDefaultRoutes = () => {
    const baseUrl = apiBaseUrl();

    // Route where the user should be returned after authentication
    // This is used e.g. with EditListingPage and ListingPage
    const fromParam = from ? `from=${from}` : '';

    // Default route where user is returned after successfull authentication
    const defaultReturn = pathByRouteName('LandingPage', routeConfiguration);
    const defaultReturnParam = defaultReturn ? `&defaultReturn=${defaultReturn}` : '';

    // Route for confirming user data before creating a new user
    const defaultConfirm = pathByRouteName('ConfirmPage', routeConfiguration);
    const defaultConfirmParam = defaultConfirm ? `&defaultConfirm=${defaultConfirm}` : '';

    return { baseUrl, fromParam, defaultReturnParam, defaultConfirmParam };
  };

  const authWithFacebook = () => {
    const defaultRoutes = getDefaultRoutes();
    const { baseUrl, fromParam, defaultReturnParam, defaultConfirmParam } = defaultRoutes;
    window.location.href = `${baseUrl}/api/auth/facebook?${fromParam}${defaultReturnParam}${defaultConfirmParam}`;
  };

  const authWithGoogle = () => {
    const defaultRoutes = getDefaultRoutes();
    const { baseUrl, fromParam, defaultReturnParam, defaultConfirmParam } = defaultRoutes;
    window.location.href = `${baseUrl}/api/auth/google?${fromParam}${defaultReturnParam}${defaultConfirmParam}`;
  };

  return showSocialLogins ? (
    <div className={css.idpButtons}>
      <div className={css.socialButtonsOr}>
        <span className={css.socialButtonsOrText}>
          <FormattedMessage id="AuthenticationPage.or" />
        </span>
      </div>

      {showFacebookLogin ? (
        <div className={css.socialButtonWrapper}>
          <SocialLoginButton onClick={() => authWithFacebook()}>
            <span className={css.buttonIcon}>{FacebookLogo}</span>
            {isLogin ? (
              <FormattedMessage id="AuthenticationPage.loginWithFacebook" />
            ) : (
              <FormattedMessage id="AuthenticationPage.signupWithFacebook" />
            )}
          </SocialLoginButton>
        </div>
      ) : null}

      {showGoogleLogin ? (
        <div className={css.socialButtonWrapper}>
          <SocialLoginButton onClick={() => authWithGoogle()}>
            <span className={css.buttonIcon}>{GoogleLogo}</span>
            {isLogin ? (
              <FormattedMessage id="AuthenticationPage.loginWithGoogle" />
            ) : (
              <FormattedMessage id="AuthenticationPage.signupWithGoogle" />
            )}
          </SocialLoginButton>
        </div>
      ) : null}
    </div>
  ) : null;
};

// Tabs for SignupForm and LoginForm
export const AuthenticationForms = props => {
  const [showLocationControl, setShowLocationControl] = useState(false);////////change this back to false
  const [showSubmitBtn, setShowSubmitBtn] = useState(false);
  const [showLogiSignupForm, setShowLogiSignupForm] = useState(true); 
  const [showFormControl, setShowFormControl] = useState(true);
  const [createOrSignup, setCreateOrSignup] = useState(false);
  const [roleHeader, setRoleHeader] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const location = useLocation();
  const path = location.pathname;
  const {
    isLogin,
    showFacebookLogin,
    showGoogleLogin,
    from,
    submitLogin,
    loginError,
    idpAuthError,
    signupError,
    authInProgress,
    submitSignup,
    termsAndConditions,
    handleShowSignupOptions,
    handleShowRadioFormOptions,
  } = props;


  //Add the url as parameter to useeffect, to force pace refresh
  //so that the create account form can pop up
  const url = window.location.pathname.split('/').pop();
  useEffect(
    ()=>{
       //This is mobile view
      //Show respective mobile content
      if(path==="/mobile/signup-or-login"){
        setShowLogiSignupForm(true);
        setShowFormControl(false)
        setCreateOrSignup(true);
      }else if(path === "/mobile/signup-options"){
        setShowLogiSignupForm(false);
        setShowFormControl(false)
        setCreateOrSignup(false);
        handleShowSignupOptions(true);
      }else{}

      if(path==="/mobile/signup-options-listItem"){
        setShowLogiSignupForm(true);
        handleShowRadioFormOptions(false);
        setShowFormControl(true);
        setRoleHeader("List Item form");
        setSelectedRole("List Item");
      }else if(path === "/mobile/signup-options-rentItem"){
        setShowLogiSignupForm(true);
        handleShowRadioFormOptions(false);
        setShowFormControl(true);
        setRoleHeader("Rent Item form");
        setSelectedRole("Rent Item");
      }else if(path === "/mobile/signup-options-storeItem"){
        setShowLogiSignupForm(true);
        handleShowRadioFormOptions(false);
        setShowFormControl(true);
        setRoleHeader("Store Item form");
        setSelectedRole("Store Item");
      }
      else{}


    },[url]
  );
  

  const fromState = { state: from ? { from } : null };
  const tabs = [
    {
      text: (
        <Heading as={!isLogin ? 'h1' : 'h2'} rootClassName={css.tab}>
          <FormattedMessage id="AuthenticationPage.signupLinkText" />
        </Heading>
      ),
      selected: !isLogin,
      linkProps: {
        name: 'SignupPage',
        to: fromState,
      },
    },
    {
      text: (
        <Heading as={isLogin ? 'h1' : 'h2'} rootClassName={css.tab}>
          <FormattedMessage id="AuthenticationPage.loginLinkText" />
        </Heading>
      ),
      selected: isLogin,
      linkProps: {
        name: 'LoginPage',
        to: fromState,
      },
    },
  ];

  //Insert the selected role (selectedRole) from state before sending the data to server
  const handleSubmitSignup = values => {
    const { fname, lname, ...rest } = values;
    const params = { firstName: fname.trim(), lastName: lname.trim(), role:selectedRole, ...rest };
    submitSignup(params);
  };

  const hideLocationControl = ()=>{
    setShowLocationControl(!showLocationControl);
  }

  const loginErrorMessage = (
    <div className={css.error}>
      <FormattedMessage id="AuthenticationPage.loginFailed" />
    </div>
  );

  const idpAuthErrorMessage = (
    <div className={css.error}>
      <FormattedMessage id="AuthenticationPage.idpAuthFailed" />
    </div>
  );

  const signupErrorMessage = (
    <div className={css.error}>
      {isSignupEmailTakenError(signupError) ? (
        <FormattedMessage id="AuthenticationPage.signupFailedEmailAlreadyTaken" />
      ) : (
        <FormattedMessage id="AuthenticationPage.signupFailed" />
      )}
    </div>
  );

  const loginOrSignupError =
    isLogin && !!idpAuthError
      ? idpAuthErrorMessage
      : isLogin && !!loginError
      ? loginErrorMessage
      : !!signupError
      ? signupErrorMessage
      : null;

  const activeClassName = 'my-active-class';

  const landingPageProps = {
    name: 'LandingPage',
    activeClassName,
    match: { url: '/' },
  };

  const handleClose = ()=>{
    setShowLocationControl(!showLocationControl);
  }

  const handleShowSubmitBtn = ()=>{
    setShowSubmitBtn(!showSubmitBtn);
    setShowLocationControl(!showLocationControl);
  }
  
  const locationControl = showLocationControl?
        <div className={css.location_Modal}>
          <div className={css.location_form}>
            <div className={css.cancel}>
              <button className={css.close_btn} onClick={handleClose}><FontAwesomeIcon icon={faClose} /></button>
            </div>
            <h2>
              Good News! We Deliver to your location!
            </h2>
            <img className={css.map_img} src={img1} />
            <p className={css.left_align}>
              Set Your Location, Sit Back, and Await Your Delivery!
            </p>

            
            <div className={css.map_con}>
            <SearchMap/>
          </div>
           
            <input className={css.zip} type='text' placeholder='Enter your zip code'/>
            <button onClick={handleShowSubmitBtn} className={css.submit_btn}>
              Save my delivery location
            </button>
            <NamedLink {...landingPageProps}>Skip for now</NamedLink>
          </div>
        </div>:"";


  return (
    <>
      {showLogiSignupForm?
      <div>
      {locationControl}
      <div className={css.content}>
        <LinkTabNavHorizontal className={css.tabs} tabs={tabs} />
        {loginOrSignupError}

        {isLogin ? (
          <LoginForm className={css.loginForm} onSubmit={submitLogin} inProgress={authInProgress} />
        ) : (
          <div>
                  <SignupForm
                    className={css.signupForm}
                    onSubmit={handleSubmitSignup}
                    inProgress={authInProgress}
                    termsAndConditions={termsAndConditions}
                    hideLocationControl={hideLocationControl}
                    showSubmitBtn={showSubmitBtn}
                    showFormControl={showFormControl}
                    createOrSignup={createOrSignup}
                    roleHeader={roleHeader}
                  />
          </div>
        )}

        <SocialLoginButtonsMaybe
          isLogin={isLogin}
          showFacebookLogin={showFacebookLogin}
          showGoogleLogin={showGoogleLogin}
          from={from}
        />
      </div>
    </div>:""}
    </>
   
    
   
  );
};

// Form for confirming information from IdP (e.g. Facebook)
// This is shown before new user is created to Marketplace API
const ConfirmIdProviderInfoForm = props => {
  const { authInfo, authInProgress, confirmError, submitSingupWithIdp, termsAndConditions } = props;
  const idp = authInfo ? authInfo.idpId.replace(/^./, str => str.toUpperCase()) : null;

  const handleSubmitConfirm = values => {
    const { idpToken, email, firstName, lastName, idpId } = authInfo;
    const { email: newEmail, firstName: newFirstName, lastName: newLastName, ...rest } = values;

    // Pass email, fistName or lastName to Marketplace API only if user has edited them
    // sand they can't be fetched directly from idp provider (e.g. Facebook)

    const authParams = {
      ...(newEmail !== email && { email: newEmail }),
      ...(newFirstName !== firstName && { firstName: newFirstName }),
      ...(newLastName !== lastName && { lastName: newLastName }),
    };

    // If the confirm form has any additional values, pass them forward as user's protected data
    const protectedData = !isEmpty(rest) ? { ...rest } : null;

    submitSingupWithIdp({
      idpToken,
      idpId,
      ...authParams,
      ...(!!protectedData && { protectedData }),
    });
  };

  const confirmErrorMessage = confirmError ? (
    <div className={css.error}>
      {isSignupEmailTakenError(confirmError) ? (
        <FormattedMessage id="AuthenticationPage.signupFailedEmailAlreadyTaken" />
      ) : (
        <FormattedMessage id="AuthenticationPage.signupFailed" />
      )}
    </div>
  ) : null;

  return (
    <div className={css.content}>
      <Heading as="h1" rootClassName={css.signupWithIdpTitle}>
        <FormattedMessage id="AuthenticationPage.confirmSignupWithIdpTitle" values={{ idp }} />
      </Heading>

      <p className={css.confirmInfoText}>
        <FormattedMessage id="AuthenticationPage.confirmSignupInfoText" />
      </p>
      {confirmErrorMessage}
      <ConfirmSignupForm
        className={css.form}
        onSubmit={handleSubmitConfirm}
        inProgress={authInProgress}
        termsAndConditions={termsAndConditions}
        authInfo={authInfo}
        idp={idp}
      />
    </div>
  );
};

export const AuthenticationOrConfirmInfoForm = props => {
  const {
    tab,
    authInfo,
    from,
    showFacebookLogin,
    showGoogleLogin,
    submitLogin,
    submitSignup,
    submitSingupWithIdp,
    authInProgress,
    loginError,
    idpAuthError,
    signupError,
    confirmError,
    termsAndConditions,
    handleShowSignupOptions,
    handleShowFormControl,
    handleShowRadioFormOptions,
   
  } = props;
  const isConfirm = tab === 'confirm';
  const isLogin = tab === 'login';

  return isConfirm ? (
    <ConfirmIdProviderInfoForm
      authInfo={authInfo}
      submitSingupWithIdp={submitSingupWithIdp}
      authInProgress={authInProgress}
      confirmError={confirmError}
      termsAndConditions={termsAndConditions}
    />
  ) : (
    <AuthenticationForms
      isLogin={isLogin}
      showFacebookLogin={showFacebookLogin}
      showGoogleLogin={showGoogleLogin}
      from={from}
      loginError={loginError}
      idpAuthError={idpAuthError}
      signupError={signupError}
      submitLogin={submitLogin}
      authInProgress={authInProgress}
      submitSignup={submitSignup}
      termsAndConditions={termsAndConditions}
      handleShowSignupOptions={handleShowSignupOptions}
      handleShowFormControl={handleShowFormControl}
      handleShowRadioFormOptions={handleShowRadioFormOptions}
      
    ></AuthenticationForms>
  );
};

const getAuthInfoFromCookies = () => {
  return Cookies.get('st-authinfo')
    ? JSON.parse(Cookies.get('st-authinfo').replace('j:', ''))
    : null;
};

const getAuthErrorFromCookies = () => {
  return Cookies.get('st-autherror')
    ? JSON.parse(Cookies.get('st-autherror').replace('j:', ''))
    : null;
};

export const AuthenticationPageComponent = props => {
  const [tosModalOpen, setTosModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [authInfo, setAuthInfo] = useState(getAuthInfoFromCookies());
  const [authError, setAuthError] = useState(getAuthErrorFromCookies());
  const config = useConfiguration();
  const [showRadioFormOptions, setShowRadioFormOptions] = useState(false);
  const [showSocialBtn, setShowSocialBtn] = useState(false);
 const history = useHistory();
  

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // On mobile, it's better to scroll to top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tosModalOpen, privacyModalOpen]);

  const {
    authInProgress,
    currentUser,
    intl,
    isAuthenticated,
    location,
    loginError,
    scrollingDisabled,
    signupError,
    submitLogin,
    submitSignup,
    confirmError,
    submitSingupWithIdp,
    tab,
    sendVerificationEmailInProgress,
    sendVerificationEmailError,
    onResendVerificationEmail,
    onManageDisableScrolling,
    tosAssetsData,
    tosFetchInProgress,
    tosFetchError,
    handleShowFormControl,
  } = props;


  const url = window.location.pathname.split('/').pop();
  useEffect(() => {
    // Remove the autherror cookie once the content is saved to state
    // because we don't want to show the error message e.g. after page refresh
    if (authError) {
      Cookies.remove('st-autherror');
    }

  }, [url]);

  
  const locatn = useLocation();
  const path = location.pathname;

  // History API has potentially state tied to this route
  // We have used that state to store previous URL ("from"),
  // so that use can be redirected back to that page after authentication.
  const locationFrom = location.state?.from || null;
  const authinfoFrom = authInfo?.from || null;
  const from = locationFrom ? locationFrom : authinfoFrom ? authinfoFrom : null;

  const user = ensureCurrentUser(currentUser);
  const currentUserLoaded = !!user.id;
  const isLogin = tab === 'login';

  // We only want to show the email verification dialog in the signup
  // tab if the user isn't being redirected somewhere else
  // (i.e. `from` is present). We must also check the `emailVerified`
  // flag only when the current user is fully loaded.
  const showEmailVerification = !isLogin && currentUserLoaded && !user.attributes.emailVerified;

  // Already authenticated, redirect away from auth page
  if (isAuthenticated && from) {
    return <Redirect to={"/mobile/listing/new"} />;
  } else if (isAuthenticated && currentUserLoaded && !showEmailVerification) {
    return <NamedRedirect name="LandingPage" />;
  }

  const resendErrorTranslationId = isTooManyEmailVerificationRequestsError(
    sendVerificationEmailError
  )
    ? 'AuthenticationPage.resendFailedTooManyRequests'
    : 'AuthenticationPage.resendFailed';
  const resendErrorMessage = sendVerificationEmailError ? (
    <p className={css.error}>
      <FormattedMessage id={resendErrorTranslationId} />
    </p>
  ) : null;

  const marketplaceName = config.marketplaceName;
  const schemaTitle = isLogin
    ? intl.formatMessage({ id: 'AuthenticationPage.schemaTitleLogin' }, { marketplaceName })
    : intl.formatMessage({ id: 'AuthenticationPage.schemaTitleSignup' }, { marketplaceName });
  const schemaDescription = isLogin
    ? intl.formatMessage({ id: 'AuthenticationPage.schemaDescriptionLogin' }, { marketplaceName })
    : intl.formatMessage({ id: 'AuthenticationPage.schemaDescriptionSignup' }, { marketplaceName });

  const topbarClasses = classNames({
    [css.hideOnMobile]: showEmailVerification,
  });


  //Go to the respective routes for the different signup options
  const HandleChange = (event,data)=>{
    event.preventDefault();
    console.log(event.target.value);
    if(event.target.value === "listItem"){
      history.push("/mobile/signup-options-listItem");
    }else if(event.target.value === "rentItem"){
      history.push("/mobile/signup-options-rentItem");
    }else{
      history.push("/mobile/signup-options-storeItem");
    }
  }
  
  const handleShowSignupOptions = ()=>{
    setShowRadioFormOptions(!showRadioFormOptions);
  }

  const handleShowRadioFormOptions = ()=>{
    setShowRadioFormOptions(!showRadioFormOptions);
  }

  const radioFormOptions = showRadioFormOptions?

  <form>
    <div className={css.mobile}>
        <h2 className={css.header}>
          Create account
        </h2>
      <div className={css.option_con}>
          <div className={css.header_content}>
            <h3>
              Choose how you plan to utilize Garageit!
            </h3>
            <p>
              Select all options that apply
            </p>
          </div>

          <div  onChange={HandleChange} className={css.radioContainer}>

            <div className={css.radio_btn}>
              <input className={css.radio} type='radio' value='listItem' name='role'/><span>I want to list my items</span>
            </div>
            <div className={css.radio_btn}>
              <input className={css.radio} type='radio' value='rentItem' name='role'/><span>I want to rent item</span>
            </div>
            <div className={css.radio_btn}>
              <input className={css.radio} type='radio' value='storeItem' name='role'/><span>I want to store my item</span>
            </div>
                    
        </div>
      </div>
    </div>
   
   
  </form>
  :"";

  const socialBtn = true?
  
        <div className={css.personal_details}>
          <h2>Personal Details</h2>
          <div className={css.social}>
          <button className={css.social_btn}>
              <FontAwesomeIcon className={css.mag_R_20} icon={faGoogle} />
              Signup with Google</button>
          <button className={css.social_btn}>
            <FontAwesomeIcon className={css.mag_R_20} icon={faFacebook} />
              Signup with Facebook</button>
          </div>
          <div className={css.rule_con}>
            <hr className={css.rule}/>OR <hr className={css.rule}/>
          </div>
        </div>:"";


  console.log("Email verification   --------------------");

  let role = "";
  if(path==="/mobile/signup-options-listItem"){
   role = "listItem";
  }else if(path === "/mobile/signup-options-rentItem"){
    role = "rentItem";
  }else if(path === "/mobile/signup-options-storeItem"){
    role = "storeItem";
  }
  else{}


  //If the role is ListItem
  //Redirect to CustomListingPage
  if(showEmailVerification && role === "listItem"){
    const history = useHistory();
    history.push("/mobile/listing/new");
  }else if(showEmailVerification && role === "RentItem"){
    const history = useHistory();
    history.push("/s");
  }


  return (
    <Page
      title={schemaTitle}
      scrollingDisabled={scrollingDisabled}
      schema={{
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        name: schemaTitle,
        description: schemaDescription,
      }}
    >

      <LayoutSingleColumn
        mainColumnClassName={css.layoutWrapperMain}
        topbar={<TopbarContainer className={topbarClasses} />}
        footer={<FooterContainer />}
      >

         <div className={css.bg_img}>
          <img src={formBg}/>
            <div className={css.overlay_con}>
              <div className={css.overlay_header}>
                  <h1>Create Account</h1>
                  <p>Home &gt; Create Account </p>
              </div>
          </div>
        </div>


        {radioFormOptions}

        {socialBtn}
          {showEmailVerification ? (

            <EmailVerificationInfo
              name={user.attributes.profile.firstName}
              email={<span className={css.email}>{user.attributes.email}</span>}
              onResendVerificationEmail={onResendVerificationEmail}
              resendErrorMessage={resendErrorMessage}
              sendVerificationEmailInProgress={sendVerificationEmailInProgress}
            />

          ) : (
            <AuthenticationOrConfirmInfoForm
              tab={tab}
              authInfo={authInfo}
              from={from}
              showFacebookLogin={!!process.env.REACT_APP_FACEBOOK_APP_ID}
              showGoogleLogin={!!process.env.REACT_APP_GOOGLE_CLIENT_ID}
              submitLogin={submitLogin}
              submitSignup={submitSignup}
              submitSingupWithIdp={submitSingupWithIdp}
              authInProgress={authInProgress}
              loginError={loginError}
              idpAuthError={authError}
              signupError={signupError}
              confirmError={confirmError}
              handleShowSignupOptions={handleShowSignupOptions}
              handleShowRadioFormOptions={handleShowRadioFormOptions}
              
              termsAndConditions={
                <TermsAndConditions
                  onOpenTermsOfService={() => setTosModalOpen(true)}
                  onOpenPrivacyPolicy={() => setPrivacyModalOpen(true)}
                  intl={intl}
                />
              }
            />
          )}
       
      </LayoutSingleColumn>
      <Modal
        id="AuthenticationPage.tos"
        isOpen={tosModalOpen}
        onClose={() => setTosModalOpen(false)}
        usePortal
        onManageDisableScrolling={onManageDisableScrolling}
      >
        <div className={css.termsWrapper}>
          <TermsOfServiceContent
            inProgress={tosFetchInProgress}
            error={tosFetchError}
            data={tosAssetsData?.[camelize(TOS_ASSET_NAME)]?.data}
          />
        </div>
      </Modal>
      <Modal
        id="AuthenticationPage.privacyPolicy"
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
        usePortal
        onManageDisableScrolling={onManageDisableScrolling}
      >
        <div className={css.privacyWrapper}>
          <PrivacyPolicyContent
            inProgress={tosFetchInProgress}
            error={tosFetchError}
            data={tosAssetsData?.[camelize(PRIVACY_POLICY_ASSET_NAME)]?.data}
          />
        </div>
      </Modal>
    </Page>
  );
};

AuthenticationPageComponent.defaultProps = {
  currentUser: null,
  loginError: null,
  signupError: null,
  confirmError: null,
  tab: 'signup',
  sendVerificationEmailError: null,
  showSocialLoginsForTests: false,
  privacyAssetsData: null,
  privacyFetchInProgress: false,
  privacyFetchError: null,
  tosAssetsData: null,
  tosFetchInProgress: false,
  tosFetchError: null,
};

AuthenticationPageComponent.propTypes = {
  authInProgress: bool.isRequired,
  currentUser: propTypes.currentUser,
  isAuthenticated: bool.isRequired,
  loginError: propTypes.error,
  scrollingDisabled: bool.isRequired,
  signupError: propTypes.error,
  confirmError: propTypes.error,

  submitLogin: func.isRequired,
  submitSignup: func.isRequired,
  tab: oneOf(['login', 'signup', 'confirm']),

  sendVerificationEmailInProgress: bool.isRequired,
  sendVerificationEmailError: propTypes.error,
  onResendVerificationEmail: func.isRequired,
  onManageDisableScrolling: func.isRequired,

  // to fetch privacy-policy page asset
  // which is shown in modal
  privacyAssetsData: object,
  privacyFetchInProgress: bool,
  privacyFetchError: propTypes.error,

  // to fetch terms-of-service page asset
  // which is shown in modal
  tosAssetsData: object,
  tosFetchInProgress: bool,
  tosFetchError: propTypes.error,

  // from withRouter
  location: shape({ state: object }).isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  const { isAuthenticated, loginError, signupError, confirmError } = state.auth;
  const { currentUser, sendVerificationEmailInProgress, sendVerificationEmailError } = state.user;
  const {
    pageAssetsData: privacyAssetsData,
    inProgress: privacyFetchInProgress,
    error: privacyFetchError,
  } = state.hostedAssets || {};
  const { pageAssetsData: tosAssetsData, inProgress: tosFetchInProgress, error: tosFetchError } =
    state.hostedAssets || {};

  return {
    authInProgress: authenticationInProgress(state),
    currentUser,
    isAuthenticated,
    loginError,
    scrollingDisabled: isScrollingDisabled(state),
    signupError,
    confirmError,
    sendVerificationEmailInProgress,
    sendVerificationEmailError,
    privacyAssetsData,
    privacyFetchInProgress,
    privacyFetchError,
    tosAssetsData,
    tosFetchInProgress,
    tosFetchError,
  };
};

const mapDispatchToProps = dispatch => ({
  submitLogin: ({ email, password }) => dispatch(login(email, password)),
  submitSignup: params => dispatch(signup(params)),
  submitSingupWithIdp: params => dispatch(signupWithIdp(params)),
  onResendVerificationEmail: () => dispatch(sendVerificationEmail()),
  onManageDisableScrolling: (componentId, disableScrolling) =>
    dispatch(manageDisableScrolling(componentId, disableScrolling)),
});

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const AuthenticationPage = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectIntl
)(AuthenticationPageComponent);

export default AuthenticationPage;
