import React, { useEffect, useRef, useState } from 'react';
import { bool, node } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import classNames from 'classnames';

import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import * as validators from '../../util/validators';
import { Form, PrimaryButton, FieldTextInput, FieldRadioButton, FieldSelect, H3, H2 } from '../../components';

import css from './CustomListingForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import upload_icon from '../../assets/icons/upload_icon.png'
import cam_icon from '../../assets/icons/cam_icon.png'
import DatePicker2 from './DatePicker2';
//import { WebcamCapture } from './WebcamCapture';
import Webcam from "react-webcam";

const CustomListingComponent = props => (
   
  <FinalForm
  {...props}
  mutators={{ ...arrayMutators }}
  render={fieldRenderProps => {
    const {
      rootClassName,
      className,
      formId,
      handleSubmit,
      inProgress,
      invalid,
      intl,
      termsAndConditions,
      hideLocationControl,
      showSubmitBtn,
      createOrSignup,
      roleHeader,
    } = fieldRenderProps;

    const [show,setShow] = useState(true);
    const [showLocationBtn,setShowLocationBtn] = useState(true);
    const [showRadioFormOptions, setShowRadioFormOptions] = useState(false);
    const [showFormControl, setShowFormControl] = useState(true);
    const [showCamera, setShowCamera] = useState(false);
    const [imageSrc,setImageSrc] = useState("");
    const [showOpenCamBtn,setShowOpenCamBtn] = useState(true);
    const [selectedFile,setSelectedFile] = useState("");
    const [selectedImage,setSelectedImage] = useState({});
    const location = useLocation();
    const history = useHistory();
    const path = location.pathname;
    const fileInput = useRef(null);


    const url = window.location.pathname.split('/').pop();
    useEffect(
      ()=>{
  
        if(path==="/mobile/signup-options-listItem"){
         
          setShowFormControl(true)
        }else if(path === "/mobile/signup-options-rentItem"){
         
          setShowFormControl(true)
        }else if(path === "/mobile/signup-options-storeItem"){
         
          setShowFormControl(true)
        }
        else{}
  
  
      },[url]
    );
    

    const HandleChange = (event)=>{
        if(event.target.value==="Influencer"){
            setShow(true);
        }else{
          setShow(false)
        }
      };

    // email
    const emailRequired = validators.required(
      intl.formatMessage({
        id: 'SignupForm.emailRequired',
      })
    );
    const emailValid = validators.emailFormatValid(
      intl.formatMessage({
        id: 'SignupForm.emailInvalid',
      })
    );

    // password
    const passwordRequiredMessage = intl.formatMessage({
      id: 'SignupForm.passwordRequired',
    });
    const passwordMinLengthMessage = intl.formatMessage(
      {
        id: 'SignupForm.passwordTooShort',
      },
      {
        minLength: validators.PASSWORD_MIN_LENGTH,
      }
    );
    const passwordMaxLengthMessage = intl.formatMessage(
      {
        id: 'SignupForm.passwordTooLong',
      },
      {
        maxLength: validators.PASSWORD_MAX_LENGTH,
      }
    );
    const passwordMinLength = validators.minLength(
      passwordMinLengthMessage,
      validators.PASSWORD_MIN_LENGTH
    );
    const passwordMaxLength = validators.maxLength(
      passwordMaxLengthMessage,
      validators.PASSWORD_MAX_LENGTH
    );
    const passwordRequired = validators.requiredStringNoTrim(passwordRequiredMessage);
    const passwordValidators = validators.composeValidators(
      passwordRequired,
      passwordMinLength,
      passwordMaxLength
    );

    const classes = classNames(rootClassName || css.root, className);
    const submitInProgress = inProgress;
    const submitDisabled = invalid || submitInProgress;
    const showAsRequired = invalid || submitInProgress;

    const handleSetLocation = ()=>{
      hideLocationControl();
    }

    const handleClose = ()=>{
      //setCreateOrSignup(!createOrSignup);
    }

    const handleOptions = ()=>{
      //setCreateOrSignup(!createOrSignup);
    }

    const handleShowOptions = (event)=>{
      event.preventDefault();
      history.push("/mobile/signup-options");
    }
  
    const handleShowSignin =(event)=>{
      event.preventDefault();
      history.push("/login")
    }

    const submitBtn = showSubmitBtn? <PrimaryButton  className={css.submit_btn} type="submit" inProgress={submitInProgress} disabled={submitDisabled}>
                                      <FormattedMessage id="SignupForm.signUp" />
                                  </PrimaryButton>:<button onClick={handleSetLocation} type="button" className={css.next_btn} >Next</button>;

console.log(createOrSignup +"      =========================");
const createSignup = createOrSignup?
<div className={css.modal_div}>
  <div className={css.create_signup}>
    <div className={css.close_div}><FontAwesomeIcon onClick={handleClose} icon={faClose}/></div>
    <h3>Would you like to sign up?</h3>

    <PrimaryButton onClick={handleShowOptions}  className={css.create_btn} type="button">
      Create my account
    </PrimaryButton>
    <div className={css.rule_con}>
      <hr className={css.rule}/>OR <hr className={css.rule}/>
    </div>
    
    <PrimaryButton onClick={handleShowSignin} className={css.signin_btn} type="button">
        Sign in
    </PrimaryButton>

  </div>
</div>:"";

const handleFileClick = ()=>{
    fileInput.current.click();
}

const handleChange = (event)=>{
  if(event.target.files && event.target.files[0]){
  
    let reader = new FileReader();
    reader.onload = (e) =>{
      
      setImageSrc(e.target.result);
    }
    reader.readAsDataURL(event.target.files[0]);
    
  }
    
}

const handleOpenCam = ()=>{
  setShowCamera(!showCamera);
  setShowOpenCamBtn(!showOpenCamBtn);
}

const getScreenshot = ()=>{
  return {width: 1920, height: 1080};
}
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImageSrc(imageSrc);
     
      console.log(imageSrc);
    },
    [webcamRef]
  );
  return (
    <>
      <Webcam
        audio={false}
        height={250}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      
      <PrimaryButton  className={css.cam_btn} type="button" onClick={capture}>
            <img className={css.mR10} src={cam_icon}/>
            Take Photo
        </PrimaryButton>
    </>
  );
};

const webCamera = showCamera?<WebcamCapture/>:"";

//showFormControl
const formControls_mobile = true?
    <div className={classNames(css.forn_con)}>


       
        <div className={css.fileupload_con} onClick={handleFileClick}>
            <div className={css.fileupload}>

                {imageSrc===""?
                  <><img src={upload_icon}/>
                  <h5>Choose file to upload</h5>
                  <p>Select zip,image,pdf or ms.word</p></>:<img className={css.fit_img} src={imageSrc}/>
                }
                
                

            </div>

        </div>
        
        <input 
            id='file' 
            name='file' 
            type='file' 
            hidden
            ref={fileInput}
            onChange={handleChange}
        />

        {webCamera}

        {showOpenCamBtn?
         <PrimaryButton  className={css.cam_btn} type="button" onClick={handleOpenCam}>
          <img className={css.mR10} src={cam_icon}/>
          Open Camera & Take Photo
        </PrimaryButton>:""
        }
       
        
       <h4 className={css.mT20}>Item details</h4>
       
       <p>
        What is the title of your listing?
       </p>
        
        <FieldTextInput
         
          type="text"
          id={formId ? `${formId}.title` : 'title'}
          name="title"
          autoComplete="given-name"
          label={intl.formatMessage({
            id: 'CustomListingForm.title',
          })}
          placeholder="Title"
          validate={validators.required(
            intl.formatMessage({
              id: 'CustomListingForm.title',
            })
          )}
        />


        <p>
            Listing description?
        </p>
        
        <FieldTextInput
          
          type="text"
          id={formId ? `${formId}.description` : 'description'}
          name="description"
          autoComplete="description"
          label={intl.formatMessage({
            id: 'CustomListingForm.description',
          })}
          placeholder="Listing description"
          validate={validators.required(
            intl.formatMessage({
              id: 'CustomListingForm.typeSomethingHere',
            })
          )}
        />
      
      <p>
       Listing details
      </p>
      
      
      <FieldTextInput
          
          type="text"
          id={formId ? `${formId}.details` : 'details'}
          name="details"
          autoComplete="family-name"
          label={intl.formatMessage({
            id: 'CustomListingForm.fullDetails',
          })}
          placeholder="Full details"
          validate={validators.required(
            intl.formatMessage({
              id: 'CustomListingForm.typeSomethingHere',
            })
          )}
        />

      <p>
       Listing price
      </p>
      
      
      <FieldTextInput
          
          type="text"
          id={formId ? `${formId}.price` : 'price'}
          name="price"
          autoComplete="price"
          label={intl.formatMessage({
            id: 'CustomListingForm.price',
          })}
          placeholder="Price"
          validate={validators.required(
            intl.formatMessage({
              id: 'CustomListingForm.typeSomethingHere',
            })
          )}
        />

    </div>
    :"";



   
    return (
      <Form className={classes} onSubmit={handleSubmit}>

            <div className={css.custom_form_con}>

                    <div>
                        <h2 className={css.header}>
                            Create Listing
                        </h2>
                    </div>

                    {formControls_mobile}

                    <p>Select dates for renting your item.</p>

                    <div className={css.calendar_con}>
                        <DatePicker2
                            containerClassName={css.custom_container}
                            calendarPosition="bottom-center"
                        />
                        
                    </div>
                    
                   
                    <PrimaryButton className={classNames(css.cancel_btn,css.mB20)} type="submit" inProgress={submitInProgress} disabled={submitDisabled}>
                        List now
                    </PrimaryButton>

                    <PrimaryButton  className={css.submit_btn_white} type="submit" inProgress={submitInProgress} disabled={submitDisabled}>
                        Save as draft
                    </PrimaryButton>
                        
                    
          </div>

      </Form>
    );
  }}
/>
)






const CustomListingForm = compose(injectIntl)(CustomListingComponent);
CustomListingForm.displayName = 'CustomListingComponent';

export default CustomListingForm;
