import React, { useState } from 'react';
import css from './CustomListingDetailsCard.module.css';
import csss from './CustomListingDetailsCard2.module.css';

import l1 from '../../assets/l1.png';
import f1 from '../../assets/f1.png';
import f2 from '../../assets/f2.png';
import f3 from '../../assets/f3.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames';
import NamedLink from '../NamedLink/NamedLink';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faClose, faLessThan, faShare } from '@fortawesome/free-solid-svg-icons';
import ReviewRating from '../ReviewRating/ReviewRating';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import { lazyLoadWithDimensions } from '../../util/uiHelpers';
import AspectRatioWrapper from '../AspectRatioWrapper/AspectRatioWrapper';
import { Field, Form } from 'react-final-form';
import DatePicker2 from './DatePicker2';
import SearchMap from '../../containers/SearchPage/SearchMap/SearchMap';

const CustomListingDetailsCard = props =>{

    const {
        title,
        slug ,
        price,
        firstImage,
        variants,
        renderSizes,
        aspectWidth,
        aspectHeight,
        setActivePropsMaybe,
        id,
        hideSlide,
        imgUrl
        } = props;

    const LazyImage = lazyLoadWithDimensions(ResponsiveImage, { loadAfterInitialRendering: 3000 });
    const [showQueryForm , setShowQueryForm] = useState(false);
    const [showRentNow , setShowRentNow] = useState(false);
    const [showPayentCardForm , setShowPayentCardForm] = useState(false);
    const [showDefault,setShowDefault] = useState(true);
    const [showSuccess, setShowSuccess] = useState(false);

    const activeClassName = '';
    const landingPageProps = {
        name: 'LandingPage',
        activeClassName,
        match: { url: '/' },
    };
      
const onSubmit = (values)=>{
    console.log(values +"      zzzzzzzzzzzzzzzzzzzzzz");
  }

const SendQuestionForm = (props) => (
    
<Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
    <form onSubmit={handleSubmit} className={css.flow_form}>

        <h2 className={css.form_label}>Ask a question:</h2>
        <Field
        name="queryMessage"
        render={({ input, meta }) => (
            <div>
            <label>Ask a question:</label>
            <textarea {...input} />
            {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
        )}
        />
        <button className={classNames(css.btn_1,css.btn_full)} type="submit" >Send</button>
    </form>
    )}
/>
);

const handleContinue = ()=>{
    setShowPaymentSummary(!showPaymentSummary);
    setShowPayentCardForm(!showPayentCardForm);
    setShowDefault(false);
}

const PaymentCardForm = (props) => (
    
    <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={css.flow_form}>
            
            <div className={css.input_con}>
                    <h2 className={css.form_label}><FontAwesomeIcon className={css.me_2} icon={faLessThan}/>Extra Card</h2>
                    <h4 className={css.form_label}>Name on Card:</h4>
                    <Field
                    name="NameOnCard"
                    render={({ input, meta }) => (
                        <div>
                        <label>Name on Card:</label>
                        <input type='text' {...input} placeholder="Name on Card"/>
                        {meta.touched && meta.error && <span>{meta.error}</span>}
                        </div>
                    )}
                    />

                    <h4 className={css.form_label}>Card Number:</h4>
                    <Field
                    name="CardNumber"
                    render={({ input, meta }) => (
                        <div>
                        <label>Card Number:</label>
                        <input type='text' {...input} placeholder="----/----/----"/>
                        {meta.touched && meta.error && <span>{meta.error}</span>}
                        </div>
                    )}
                    />

                    <h4 className={css.form_label}>Card Type:</h4>
                    <Field
                    name="CardType"
                    render={({ input, meta }) => (
                        <div>
                        <label>Card Number:</label>
                        <select {...input}>
                        <option value="">Select Card Type</option>
                            <option value="VISA">VISA</option>
                            <option value="MasterCard">MasterCard</option>
                        </select>
                        {meta.touched && meta.error && <span>{meta.error}</span>}
                        </div>
                    )}
                    />

                    <h4 className={css.form_label}>Expiry Date:</h4>
                    <Field
                    name="ExpiryDate"
                    render={({ input, meta }) => (
                        <div>
                        <label>Card Number:</label>
                        <input type='text' {...input} placeholder="MM / YY"/>
                        {meta.touched && meta.error && <span>{meta.error}</span>}
                        </div>
                    )}
                    />

                    <h4 className={css.form_label}>CVV:</h4>
                    <Field
                    name="CVV"
                    render={({ input, meta }) => (
                        <div>
                        <label>Card Number:</label>
                        <input type='text' {...input} placeholder="-----"/>
                        {meta.touched && meta.error && <span>{meta.error}</span>}
                        </div>
                    )}
                    />

                    <h4 className={css.form_label}>Billing Address:</h4>
                    <Field
                    name="BillingAddress"
                    render={({ input, meta }) => (
                        <div>
                        <label>Card Number:</label>
                        <input type='text' {...input} placeholder="Enter Address"/>
                        {meta.touched && meta.error && <span>{meta.error}</span>}
                        </div>
                    )}
                    />
            </div>
            
            <button className={classNames(css.btn_1,css.btn_full)} type="button" onClick={handleContinue} >Continue</button>
        </form>
        )}
    />
    );

const [showLocationControl, setShowLocationControl] = useState(false);////////change this back to false
const [showPaymentSummary, setShowPaymentSummary] = useState(false);

const handleAskQuestion = (event)=>{
    event.preventDefault();
    setShowQueryForm(!showQueryForm);
}

const handleRentNow = (event)=>{
    event.preventDefault();
    setShowRentNow(!showRentNow);
}

const handleClose = ()=>{
    setShowLocationControl(!showLocationControl);
  }

const handleSetDeliveryLocation = ()=>{
    setShowLocationControl(!showLocationControl);
  }

  const handleConfirmDelivery = ()=>{
    console.log("Delivering -------------------------");
   // setShowPaymentSummary(!showPaymentSummary);
    setShowPayentCardForm(!showPayentCardForm);
    setShowLocationControl(!showLocationControl);
    setShowDefault(false);
    hideSlide();
  }

  
  const handleConfirmPayment = ()=>{
    setShowPaymentSummary(!showPaymentSummary);
    setShowSuccess(!showSuccess);
    
  }

const locationControl = showLocationControl?
        <div className={css.location_Modal}>
          <div className={css.location_form}>
            <div className={css.cancel}>
              <button className={css.close_btn} onClick={handleClose}><FontAwesomeIcon icon={faClose} /></button>
            </div>

            <h4>Select your delivery spot</h4>
           
            <div className={css.map_con}>
                <SearchMap/>
            </div>
           
            <div className={css.estimate}>
                <div>
                    <h3>Estimated Delivery amount</h3>
                    <p>Estimated time 8:30 - 9:15 PM</p>
                </div>
                <div><b>$ 5.00</b></div>
            </div>
            <button className={css.submit_btn} onClick={handleConfirmDelivery}>Confirm Delivery</button>
          </div>
        </div>:"";

const paymentSummary = showPaymentSummary?
        <div className={css.paysumry}>
         <h2>Payment Summary</h2>
         <div className={css.details_con}>
            <h5>Wood cutter booking</h5>
            < div className={css.flex_row_2}>
                <p>Two days (Jan 25th to Jan 26th)</p>
                <p><b>$ 120.00</b></p>
            </div>
            < div className={css.flex_row_2}>
                <p>Delivery Fee</p>
                <p><b>$ 5.00</b></p>
            </div>
            < div className={css.flex_row_2}>
                <p>Tax</p>
                <p><b>13%</b></p>
            </div>
            <hr/>
            < div className={css.flex_row_2}>
                <p>Total</p>
                <p><b>$ 141.25</b></p>
            </div>
            <button className={css.submit_btn} onClick={handleConfirmPayment}>Confirm Payment</button>
         </div>
        </div>:"";


const listinPageProps = {
    name: 'LandingPage',
    activeClassName,
    match: { url: '/s' },
  };

  
  return (
    <>
            <div className={classNames(css.mobile)}>
           
                <div className={css.card_rows}>

                    <div className={classNames(css.flex_col,css.card)}>
                        <div className={classNames(css.flex_col,css.card)}>

                               {showDefault?
                                            <div className={classNames(css.flex_col,css.p_2)}>
                                            <div className={classNames(css.flex_row)}>
                                                <div>
                                                    <h1 className={css.text_left}>{title}</h1>
                                                    <p className={css.text_left}>{slug}</p>
                                                        <div className={css.logedinControl}>
                                                            <ReviewRating
                                                                rating={4}
                                                                className={css.ratng_blue}
                                                            />
                                                            <i className={css.reviews}>12 reviews</i>
                                                        </div>
                                                        <p className={(css.text_left,css.mb_5p)}>{"Already booked"}</p>
                                                        <div>
                                                            <button className={css.btn_5}>Book on 21st Jan</button>
                                                            <button className={css.btn_5}>Book on 30th Jan</button>
                                                        </div>

                                                </div>
                                                <div>
                                                    <FontAwesomeIcon className={css.icon_size} icon={faHeart}/>
                                                </div>
                                            </div>
                                            <div className={classNames(css.price_con,css.desk)}>
                                                <span className={css.price}>$20.00 / Hr</span>
                                            </div>
                                        </div>:""
                                    }
                                
                                    <hr className={css.hr}/>

                                    {!showQueryForm && !showRentNow && !showPaymentSummary && showDefault?
                                        <>
                                            <h3 className={classNames(css.text_left,css.magL20)}>Description</h3>
                                            <p className={classNames(css.magL20,css.mb_20)}>
                                                {slug}
                                            </p>
                                            
                                            <button  className={classNames(css.btn_1,css.no_bg)} onClick={handleRentNow}>Rent Now</button>
                                            <button  className={classNames(css.btn_1,css.no_bg)} onClick={handleAskQuestion}>Ask a question</button>

                                        </>:""
                                    }
                                    
                                    {showQueryForm && showDefault?
                                        <SendQuestionForm/>:""
                                    }
                                    
                                    {showRentNow && showDefault?
                                    <><h5 className={css.no_trans}>Select date for booking</h5>

                                    <div className={css.calendar_con}>
                                        <DatePicker2
                                            containerClassName={css.custom_container}
                                            calendarPosition="bottom-center"

                                        />
                                        <h5 className={css.no_trans}>Need this delivered</h5>
                                        <div className={css.flex_btn}>
                                            <button>Yes</button>
                                            <button>No</button>
                                        </div>
                                        <div className={css.flex_btn_full}>
                                            <button onClick={handleSetDeliveryLocation}>Request for Rent</button>
                                        </div>
                                    </div></>
                                    :""}

                                    {!showRentNow && !showPaymentSummary?
                                    <>
                                     <h2 className={css.text_black}>Reviews</h2>

                                    <div className={classNames(csss.flex_col,csss.card_2)}>
                                            <div className={classNames(csss.flex_col2,csss.card,csss.no_shadow)}>
                                                <div className={csss.profile_icon_con}>
                                                    <img className={classNames(csss.resize,csss.abs_posi,csss.no_rad)} src={f1}/>
                                                    <div>
                                                        <h3>Sophie Moore</h3>
                                                        <p>Head of Design at Google</p>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <hr className={csss.hr}/>
                                            <div className={csss.text_left}>
                                                        <h4 className={csss.mb_2}>“Totally recommended”</h4>
                                                        <p className={classNames(csss.mb_2,csss.text_left)}>
                                                            Lorem ipsum dolor sit amet consectetur amet odio ante nunc enim quam 
                                                            diam dui tempor nisi risus bibendum cursus ac non tortor posuere fringilla 
                                                            donec enim congue morbi netus sit non quis.
                                                        </p>
                                            </div>
                                    </div>
                                    </>:""}

                                    {locationControl}
                                    {showPayentCardForm?
                                        <PaymentCardForm/>
                                        :""
                                    }
                                    {paymentSummary}
                                


                                    {showSuccess?
                                        <div className={css.successPage_con}>
                                        <h2>Thank you!</h2>
                                        <p>
                                            Your Request is being processed!
                                            Stay Tuned for the Owner's Response!
                                        </p>
                                        <NamedLink className={css.submit_btn}  {...listinPageProps}>Continue Browsing</NamedLink>
                                        
                                        </div>:""
                                        }
                                   

                                   
                                    

                            </div>
                         
                    </div>

                </div>
           
            </div>
                
    </>
  );
}


export default CustomListingDetailsCard;
