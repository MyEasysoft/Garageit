/**
 * This file contains server side endpoints that can be used to perform backend
 * tasks that can not be handled in the browser.
 *
 * The endpoints should not clash with the application routes. Therefore, the
 * endpoints are prefixed in the main server where this file is used.
 */

const express = require('express');
const bodyParser = require('body-parser');
const { deserialize } = require('./api-util/sdk');

const initiateLoginAs = require('./api/initiate-login-as');
const loginAs = require('./api/login-as');
const transactionLineItems = require('./api/transaction-line-items');
const initiatePrivileged = require('./api/initiate-privileged');
const transitionPrivileged = require('./api/transition-privileged');

const createUserWithIdp = require('./api/auth/createUserWithIdp');

const { authenticateFacebook, authenticateFacebookCallback } = require('./api/auth/facebook');
const { authenticateGoogle, authenticateGoogleCallback } = require('./api/auth/google');
const  updateProfileCallbacks = require('./api/update-profile');
const  updateProfileTransactionCallbacks = require('./api/update-profile-transaction');
const  updateProfileTransactionAgreementCallbacks = require('./api/update_profile_transaction_agreement');
const  updateProfileTransactionAgreementAcceptCallbacks = require('./api/update_profile_transaction_agreement_accept');
const  updateProfileReviewCallbacks = require('./api/update_profile_review_seller');
const  updateProfileReviewInfluencerCallbacks = require('./api/update-profile-review-influencer');
const  updateProfileSeenMsgCallbacks = require('./api/update_profile_record_seen_messages');
const  userCreateStripeAccountCallbacks = require('./api/create_new_connect_account');
const  userCreateListingCallbacks = require('./api/create_listing_copy_for_Seller_to_pay_Influencer');
const  userInitiateTransactionCallbacks = require('./api/initiate_transaction');
const  changePriceCallbacks = require('./api/change_price');




const router = express.Router();

// ================ API router middleware: ================= //

// Parse Transit body first to a string
router.use(
  bodyParser.text({
    type: 'application/transit+json',
  })
);

// Deserialize Transit body string to JS data
router.use((req, res, next) => {
  if (req.get('Content-Type') === 'application/transit+json' && typeof req.body === 'string') {
    try {
      req.body = deserialize(req.body);
    } catch (e) {
      console.error('Failed to parse request body as Transit:');
      console.error(e);
      res.status(400).send('Invalid Transit in request body.');
      return;
    }
  }
  next();
});

// ================ API router endpoints: ================ //

router.get('/initiate-login-as', initiateLoginAs);
router.get('/login-as', loginAs);
router.post('/transaction-line-items', transactionLineItems);
router.post('/initiate-privileged', initiatePrivileged);
router.post('/transition-privileged', transitionPrivileged);

// Create user with identity provider (e.g. Facebook or Google)
// This endpoint is called to create a new user after user has confirmed
// they want to continue with the data fetched from IdP (e.g. name and email)
router.post('/auth/create-user-with-idp', createUserWithIdp);

// Facebook authentication endpoints

// This endpoint is called when user wants to initiate authenticaiton with Facebook
router.get('/auth/facebook', authenticateFacebook);

// This is the route for callback URL the user is redirected after authenticating
// with Facebook. In this route a Passport.js custom callback is used for calling
// loginWithIdp endpoint in Flex API to authenticate user to Flex
router.get('/auth/facebook/callback', authenticateFacebookCallback);

// Google authentication endpoints

// This endpoint is called when user wants to initiate authenticaiton with Google
router.get('/auth/google', authenticateGoogle);

// This is the route for callback URL the user is redirected after authenticating
// with Google. In this route a Passport.js custom callback is used for calling
// loginWithIdp endpoint in Flex API to authenticate user to Flex
router.get('/auth/google/callback', authenticateGoogleCallback);

router.post('/v1/api/current_user/update_profile', updateProfileCallbacks);
router.post('/v1/api/current_user/update_profile_transaction', updateProfileTransactionCallbacks);
router.post('/v1/api/current_user/update_profile_transaction_agreement', updateProfileTransactionAgreementCallbacks);
router.post('/v1/api/current_user/update_profile_transaction_agreement_accept', updateProfileTransactionAgreementAcceptCallbacks);
router.post('/v1/api/current_user/update_profile_review_seller', updateProfileReviewCallbacks);
router.post('/v1/api/current_user/update-profile-review-influencer', updateProfileReviewInfluencerCallbacks);
router.post('/v1/api/current_user/update_profile_record_seen_messages', updateProfileSeenMsgCallbacks);
router.post('/v1/api/current_user/create_new_connect_account', userCreateStripeAccountCallbacks);
router.post('/v1/integration_api/listings/create', userCreateListingCallbacks);
router.post('/v1/integration_api/listings/initiate_transaction', userInitiateTransactionCallbacks);
router.post('/v1/api/integration_api/change_price', changePriceCallbacks);

module.exports = router;
