import React from 'react';
import css from './Home.module.css';

import banner from '../../assets/img1.PNG';
import banner_big from '../../assets/bg1.png'
import classNames from 'classnames';
import NamedLink from '../NamedLink/NamedLink';


const HomeComponent1 = props =>{
    const activeClassName = 'my-active-class';
    
    const landingPageProps = {
        name: 'LandingPage',
        activeClassName,
        match: { url: '/' },
      };

    const {blocks} = props;

    const view = blocks.length !== 0?
    
                        "Footer"
                    
                    : 
                    <>
                        <div className={classNames(css.container,css.desktop)}>
                            <img className={css.resize_bg} src={banner_big}/>
                            <div className={classNames(css.hero)}>
                                <h2><span className={css.letter_spacing_2}>New Arrival</span></h2>
                                <h1>Discover Our<br/> Latest Storage Collection</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                                </p>
                                <NamedLink {...landingPageProps} className={css.btn_2}>Browse listings</NamedLink>
                            </div>
                        </div>

                        <div className={classNames(css.mobile)}>
                            <h2><span className={css.letter_spacing_1}>#GARAGEITEXPERIENCE</span></h2>
                            <h1>Discover Our Latest Storage Collection</h1>
                            <NamedLink {...landingPageProps} className={css.btn_1}>Create Account</NamedLink>
            
                        </div>

                        <div className={classNames(css.mobile_banner)}>
                            <img className={css.resize} src={banner}/>
                        </div>
                    </>
                    
                    ;

  return (
    
    <>
    {view}
    </>
    
    
  );
};


export default HomeComponent1;
