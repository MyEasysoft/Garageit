import React from 'react';
import css from './CustomFooter.module.css';
import NamedLink from '../NamedLink/NamedLink';
import logo from '../../../src/assets/logo.png'
import logo2 from '../../../src/assets/logo_white.png'
import s1 from '../../../src/assets/s1.png'
import s2 from '../../../src/assets/s2.png'
import s3 from '../../../src/assets/s3.png'


function CustomFooterComponent(){
    const activeClassName = 'my-active-class';
    
    const landingPageProps = {
        name: 'LandingPage',
        activeClassName,
        match: { url: '/' },
      };

  return (
        <>
        <footer className={css.footer_main}>
            <div className={css.footer}>
                <div>
                    <NamedLink {...landingPageProps}>
                        <img src={logo2}/>
                    </NamedLink>

                    <p className={css.text_center}>
                        Lorem ipsum dolor sit amet, Lorem ipsum dolor sit ametconsectetur adipiscing elit.
                    </p>
                    <div className={css.social_list}>
                        <NamedLink  {...landingPageProps}><img src={s1}/></NamedLink>
                        <NamedLink  {...landingPageProps}><img src={s2}/></NamedLink>
                        <NamedLink  {...landingPageProps}><img src={s3}/></NamedLink>
                    </div>
                </div>
                <div className={css.footer_form_con}>
                    <div className={css.footer_form}>
                        <h3>Stay in the loop</h3>
                        <p className={css.text_center}>Don't miss out! Opt-in for reminders to stay up to date and in the know of new items, and deals in your area</p>
                        <div className={css.form_input_con}>
                            <input className={css.text_input} type='email' placeholder='Enter your email address..'/>
                            <input className={css.submit_btn} type='submit' value='Submit'/>
                        </div>
                    </div>
                </div>
            </div>
           
            <hr/>
            <div className={css.row_1}>
                <p className={css.text_center}>© 2024 Garageit. All right reserved.</p>
                <div className={css.row_2}>
                    <NamedLink  {...landingPageProps}>Home</NamedLink>
                    <NamedLink  {...landingPageProps}>Listings</NamedLink>
                    <NamedLink  {...landingPageProps}>About</NamedLink>
                    <NamedLink  {...landingPageProps}>Messages</NamedLink>
                    <NamedLink  {...landingPageProps}>FAQs</NamedLink>
                </div>
                <p className={css.ref}>Design Made By McKie Consultants</p>
            </div>
        </footer>

        </>
  );
};


export default CustomFooterComponent;
