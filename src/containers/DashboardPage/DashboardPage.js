import React, { useEffect, useState } from 'react';
import { bool, func, object, shape, string } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { useConfiguration } from '../../context/configurationContext';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { ensureCurrentUser } from '../../util/data';
import { isScrollingDisabled } from '../../ducks/ui.duck';

import { H3, Page, UserNav, NamedLink, LayoutSingleColumn, PrimaryButton } from '../../components';

import TopbarContainer from '../TopbarContainer/TopbarContainer';
import FooterContainer from '../FooterContainer/FooterContainer';

import { updateProfile, uploadImage } from './DashboardPage.duck';
import css from './DashboardPage.module.css';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import dashboardImg from '../../../src/assets/dashboard_img.png';
import card1 from '../../../src/assets/card1.png';
import camIcon from '../../../src/assets/Camera.png';
import classNames from 'classnames';
import trend from '../../../src/assets/trend.png';

const onImageUploadHandler = (values, fn) => {
  const { id, imageId, file } = values;
  if (file) {
    fn({ id, imageId, file });
  }
};

export const DashboardPageComponent = props => {
  
  const config = useConfiguration();
  const {
    currentUser,
    image,
    onImageUpload,
    onUpdateProfile,
    scrollingDisabled,
    updateInProgress,
    updateProfileError,
    uploadImageError,
    uploadInProgress,
    intl,
  } = props;

  const [showMobileProfile, setShowMobileProfile] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const path = location.pathname;
  const url = window.location.pathname.split('/').pop();
  useEffect(
    ()=>{

      if(path==="/profile-settings-mobile"){
        setShowMobileProfile(true)
      }

    },[url]
  );

  const handleSubmit = values => {
    const { firstName, lastName, bio: rawBio } = values;

    // Ensure that the optional bio is a string
    const bio = rawBio || '';

    const profile = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      bio,
    };
    const uploadedImage = props.image;

    // Update profileImage only if file system has been accessed
    const updatedValues =
      uploadedImage && uploadedImage.imageId && uploadedImage.file
        ? { ...profile, profileImageId: uploadedImage.imageId }
        : profile;

    onUpdateProfile(updatedValues);
  };

  const user = ensureCurrentUser(currentUser);
  const { firstName, lastName, bio } = user.attributes.profile;
  const profileImageId = user.profileImage ? user.profileImage.id : null;
  const profileImage = image || { imageId: profileImageId };

  
  const title = intl.formatMessage({ id: 'DashboardPage.title' });


  return (
    <Page className={css.root} title={title} scrollingDisabled={scrollingDisabled}>
      <LayoutSingleColumn
        topbar={
          <>
            <TopbarContainer currentPage="DashboardPage" />
            <UserNav currentPage="DashboardPage" />
          </>
        }
        footer={<FooterContainer />}
      >
        <div className={css.contents}>
         <img src={dashboardImg}/>
         <div className={css.sub_content}>
            <h2 className={css.align_left}>Hey Sam</h2>
            <p className={css.align_left}>Welcome to Garageit</p>
            <img className={css.magT20} src={card1}/>
            <p className={css.align_left}>What do you want to do today?</p>
            <div className={css.row}>
              <div className={css.col6}>
                <div className={css.full_col}>
                  <img className={css.upl_cursor} src={camIcon}/>
                </div>
                <div className={css.upl}>
                  <p className={css.text_center}>Upload Item</p>
                </div>
              </div>
              <div className={classNames(css.col6,css.flex_div)}>
                <div className={css.content2}>
                  <div>
                      <button className={classNames(css.no_border,css.trend_icon)} ><img src={trend}/></button>
                  </div>
                 
                </div>
                <div className={css.content2}>
                  <h3 className={css.align_left}>20</h3>
                  <h6 className={css.align_left}>Resent items</h6>
                  <p className={css.align_left}>Lorem ipsum dolar</p>
                </div>
              
              </div>
              
            </div>
            <div className={css.row}>
            <div className={classNames(css.col6,css.flex_div)}>
                <div className={css.content2}>
                  <div>
                      <button className={classNames(css.no_border,css.trend_icon)} ><img src={trend}/></button>
                  </div>
                 
                </div>
                <div className={css.content2}>
                  <h3 className={css.align_left}>100k</h3>
                  <h6 className={css.align_left}>Item views</h6>
                  <p className={css.align_left}>Lorem ipsum dolar</p>
                </div>
              
              </div>
              <div className={classNames(css.col6,css.flex_div)}>
                <div className={css.content2}>
                  <div>
                      <button className={classNames(css.no_border,css.trend_icon)} ><img src={trend}/></button>
                  </div>
                 
                </div>
                <div className={css.content2}>
                  <h3 className={css.align_left}>50</h3>
                  <h6 className={css.align_left}>Total reviews</h6>
                  <p className={css.align_left}>Lorem ipsum dolar</p>
                </div>
              
              </div>
              
            </div>

            <div className={css.magT30}>
              <p className={classNames(css.align_left,css.text_bold)}>Would you like to lorem ipsum lorem</p>
            </div>
            <div>
            <PrimaryButton  className={css.cam_btn} type="button">
              Switch to lorem ispum
            </PrimaryButton>:""
            </div>
         </div>

         
        </div>
      </LayoutSingleColumn>

    </Page>
  );
};

DashboardPageComponent.defaultProps = {
  currentUser: null,
  uploadImageError: null,
  updateProfileError: null,
  image: null,
  config: null,
};

DashboardPageComponent.propTypes = {
  currentUser: propTypes.currentUser,
  image: shape({
    id: string,
    imageId: propTypes.uuid,
    file: object,
    uploadedImage: propTypes.image,
  }),
  onImageUpload: func.isRequired,
  onUpdateProfile: func.isRequired,
  scrollingDisabled: bool.isRequired,
  updateInProgress: bool.isRequired,
  updateProfileError: propTypes.error,
  uploadImageError: propTypes.error,
  uploadInProgress: bool.isRequired,

  // from useConfiguration()
  config: object,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  
};

const mapDispatchToProps = dispatch => ({
  onImageUpload: data => dispatch(uploadImage(data)),
  onUpdateProfile: data => dispatch(updateProfile(data)),
});

const DashboardPage = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectIntl
)(DashboardPageComponent);

export default DashboardPage;
