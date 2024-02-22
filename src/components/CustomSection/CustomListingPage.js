import React from 'react';
import css from './CustomListingPage.module.css';

import banner from '../../assets/img1.PNG';
import w1 from '../../assets/cover1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faHeart, faSignIn, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames';
import NamedLink from '../NamedLink/NamedLink';


const CustomListingComponent = props =>{
    const activeClassName = 'my-active-class';
    
    const landingPageProps = {
        name: 'LandingPage',
        activeClassName,
        match: { url: '/' },
      };

   

  return (
    
    <>
            <div className={classNames(css.container,css.desktop)}>
                <h2><span className={css.letter_spacing_1}>#GARAGEITEXPERIENCE</span></h2>
                <h1>Discover Our Latest Storage Collection</h1>
                <NamedLink {...landingPageProps} className={css.btn_1}>Create Account</NamedLink>

            </div>

            <div className={classNames(css.mobile)}>

                <div className={css.header}>
                    <h2>Ready for Rental</h2>
                </div>

                <div className={classNames(css.flex_col,css.card)}>

                    <div className={css.circle_1}><span className={css.new_}>New</span></div>
                    <img className={classNames(css.resize,css.abs_posi)} src={banner}/>
                    <div className={css.price_con}>
                        <span className={css.price}>$20.00/Hr</span>
                    </div>
                    <div className={classNames(css.flex_col,css.p_2)}>

                        <div className={classNames(css.flex_row)}>
                            <div>
                                <h1>Heat Presser</h1>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div>
                                <FontAwesomeIcon className={css.icon_size} icon={faHeart}/>
                            </div>
                            

                        </div>
                        
                        <NamedLink {...landingPageProps} className={css.btn_1}>Rent Now</NamedLink>
                
                    </div>

                </div>
                
            </div>
    </>
    
    
  );
}


export default CustomListingComponent;
