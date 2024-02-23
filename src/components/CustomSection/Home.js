import React from 'react';
import css from './Home.module.css';

import banner from '../../assets/img1.PNG';
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
                            <h2><span className={css.letter_spacing_1}>#GARAGEITEXPERIENCE</span></h2>
                            <h1>Discover Our Latest Storage Collection</h1>
                            <NamedLink {...landingPageProps} className={css.btn_1}>Create Account</NamedLink>
            
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
