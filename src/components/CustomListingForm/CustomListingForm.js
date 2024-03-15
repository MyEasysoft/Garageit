import React, { useEffect, useState } from 'react';
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
    const location = useLocation();
    const history = useHistory();
    const path = location.pathname;


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

//showFormControl
const formControls_mobile = true?
    <div className={classNames(css.forn_con)}>


        <div className={css.fileupload_con}>
            <div className={css.fileupload}>
                <img src={upload_icon}/>
                <h5>Choose file to upload</h5>
                <p>Select zip,image,pdf or ms.word</p>

            </div>

        </div>

       

        <PrimaryButton  className={css.cam_btn} type="button" inProgress={submitInProgress} disabled={submitDisabled}>
            <img className={css.mR10} src={cam_icon}/>
            Open Camera & Take Photo
        </PrimaryButton>

       <h4 className={css.mT20}>Item details</h4>
       
       <p>
        Lorem Ipsum lorem ipsum?
        What would like to call your item?
       </p>
        
        <FieldTextInput
         
          type="text"
          id={formId ? `${formId}.fname` : 'fname'}
          name="fname"
          autoComplete="given-name"
          label={intl.formatMessage({
            id: 'SignupForm.firstNameLabel',
          })}
          placeholder="Firstname"
          validate={validators.required(
            intl.formatMessage({
              id: 'SignupForm.typeSomethingHere',
            })
          )}
        />


        <p>
            Is there any description of your item?
        </p>
        
        <FieldTextInput
          
          type="text"
          id={formId ? `${formId}.lname` : 'lname'}
          name="lname"
          autoComplete="family-name"
          label={intl.formatMessage({
            id: 'SignupForm.lastNameLabel',
          })}
          placeholder="Last name"
          validate={validators.required(
            intl.formatMessage({
              id: 'SignupForm.typeSomethingHere',
            })
          )}
        />
      
      <p>
        Lorem Ipsum lorem ipsum?
      </p>
      
      
      <FieldTextInput
       
        type="password"
        id={formId ? `${formId}.password` : 'password'}
        name="password"
        autoComplete="new-password"
        label={intl.formatMessage({
          id: 'SignupForm.passwordLabel',
        })}
        placeholder={intl.formatMessage({
          id: 'SignupForm.typeSomethingHere',
        })}
        validate={passwordValidators}
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
