import React from 'react';
import css from './CustomListingPage.module.css';

import banner from '../../assets/img1.PNG';
import l1 from '../../assets/l1.png';
import l2 from '../../assets/l2.png';
import l3 from '../../assets/l3.png';
import l4 from '../../assets/l4.png';
import l5 from '../../assets/l5.png';
import l6 from '../../assets/l6.png';

import l7 from '../../assets/l7.png';
import l8 from '../../assets/l8.png';
import l9 from '../../assets/l9.png';


import f1 from '../../assets/f1.png';
import f2 from '../../assets/f2.png';
import f3 from '../../assets/f3.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames';
import NamedLink from '../NamedLink/NamedLink';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import ReviewRating from '../ReviewRating/ReviewRating';


const CustomListingComponent = props =>{
  
    const activeClassName = '';
    
    const landingPageProps = {
        name: 'LandingPage',
        activeClassName,
        match: { url: '/' },
      };

  return (
    
    <>
            <div className={classNames(css.desktop)}>

                <div className={css.header}>
                    <h2>Ready for Rental</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur amet odio ante nunc enim quam
                    </p>
                </div>

                <div className={css.card_rows}>

                    <div className={classNames(css.flex_col,css.card)}>

                        <div className={classNames(css.flex_col,css.card)}>
                                <div className={css.container_card}>
                                    <img className={classNames(css.resize,css.abs_posi)} src={l2}/>
                                    <div className={css.circle_1}><span className={css.new_}>New</span></div>
                                    <div className={classNames(css.price_con,css.mobi)}>
                                        <span className={css.price}>$20.00/Hr</span>
                                    </div>
                                
                                </div>

                                <div className={classNames(css.flex_col,css.p_2)}>

                                    <div className={classNames(css.flex_row)}>
                                        <div>
                                            <h1 className={css.text_left}>Dough Mixer</h1>
                                            <p>Lorem ipsum dolor sit amet</p>
                                            
                                        </div>
                                        <div>
                                            <FontAwesomeIcon className={css.icon_size} icon={faHeart}/>
                                        </div>
                                    
                                        

                                    </div>
                                    <div className={classNames(css.price_con,css.desk)}>
                                        <span className={css.price}>$20.00 / Hr</span>
                                    </div>
                                </div>
                                <NamedLink {...landingPageProps} className={css.btn_1}>Rent Now</NamedLink>

                            </div>

                            <div  className={css.overlay_col}>
                                <NamedLink {...landingPageProps} className={css.btn_card}>Browse listings</NamedLink>
                                <div className={css.overlay}>
                                    <NamedLink {...landingPageProps}>
                                        <FontAwesomeIcon icon={faShare}/>Share
                                    </NamedLink>
                                    <NamedLink {...landingPageProps}>
                                        <FontAwesomeIcon icon={faHeart}/>Like
                                    </NamedLink>
                                </div>
                            </div>


                    </div>

                    <div className={classNames(css.flex_col,css.card)}>

                            <div className={classNames(css.flex_col,css.card)}>
                                    <div className={css.container_card}>
                                        <img className={classNames(css.resize,css.abs_posi)} src={l3}/>
                                        <div className={css.circle_1}><span className={css.new_}>New</span></div>
                                        <div className={classNames(css.price_con,css.mobi)}>
                                            <span className={css.price}>$20.00/Hr</span>
                                        </div>
                                    
                                    </div>

                                    <div className={classNames(css.flex_col,css.p_2)}>

                                        <div className={classNames(css.flex_row)}>
                                            <div>
                                                <h1 className={css.text_left}>Wedding Sandals</h1>
                                                <p>Lorem ipsum dolor sit amet</p>
                                                
                                            </div>
                                            <div>
                                                <FontAwesomeIcon className={css.icon_size} icon={faHeart}/>
                                            </div>
                                        
                                            

                                        </div>
                                        <div className={classNames(css.price_con,css.desk)}>
                                            <span className={css.price}>$20.00 / Hr</span>
                                        </div>
                                    </div>
                                    <NamedLink {...landingPageProps} className={css.btn_1}>Rent Now</NamedLink>

                                </div>

                                <div  className={css.overlay_col}>
                                    <NamedLink {...landingPageProps} className={css.btn_card}>Browse listings</NamedLink>
                                    <div className={css.overlay}>
                                        <NamedLink {...landingPageProps}>
                                            <FontAwesomeIcon icon={faShare}/>Share
                                        </NamedLink>
                                        <NamedLink {...landingPageProps}>
                                            <FontAwesomeIcon icon={faHeart}/>Like
                                        </NamedLink>
                                    </div>
                                </div>


                    </div>

                    <div className={classNames(css.flex_col,css.card)}>

                    <div className={classNames(css.flex_col,css.card)}>
                            <div className={css.container_card}>
                                <img className={classNames(css.resize,css.abs_posi)} src={l3}/>
                                <div className={css.circle_1}><span className={css.new_}>New</span></div>
                                <div className={classNames(css.price_con,css.mobi)}>
                                    <span className={css.price}>$20.00/Hr</span>
                                </div>
                            
                            </div>

                            <div className={classNames(css.flex_col,css.p_2)}>

                                <div className={classNames(css.flex_row)}>
                                    <div>
                                        <h1 className={css.text_left}>Wedding Sandals</h1>
                                        <p>Lorem ipsum dolor sit amet</p>
                                        
                                    </div>
                                    <div>
                                        <FontAwesomeIcon className={css.icon_size} icon={faHeart}/>
                                    </div>
                                
                                    

                                </div>
                                <div className={classNames(css.price_con,css.desk)}>
                                    <span className={css.price}>$20.00 / Hr</span>
                                </div>
                            </div>
                            <NamedLink {...landingPageProps} className={css.btn_1}>Rent Now</NamedLink>

                        </div>

                        <div  className={css.overlay_col}>
                            <NamedLink {...landingPageProps} className={css.btn_card}>Browse listings</NamedLink>
                            <div className={css.overlay}>
                                <NamedLink {...landingPageProps}>
                                    <FontAwesomeIcon icon={faShare}/>Share
                                </NamedLink>
                                <NamedLink {...landingPageProps}>
                                    <FontAwesomeIcon icon={faHeart}/>Like
                                </NamedLink>
                            </div>
                        </div>


                    </div>

                    <div className={classNames(css.flex_col,css.card)}>

                    <div className={classNames(css.flex_col,css.card)}>
                            <div className={css.container_card}>
                                <img className={classNames(css.resize,css.abs_posi)} src={l4}/>
                                <div className={css.circle_1}><span className={css.new_}>New</span></div>
                                <div className={classNames(css.price_con,css.mobi)}>
                                    <span className={css.price}>$20.00/Hr</span>
                                </div>
                            
                            </div>

                            <div className={classNames(css.flex_col,css.p_2)}>

                                <div className={classNames(css.flex_row)}>
                                    <div>
                                        <h1 className={css.text_left}>Wood Cutter</h1>
                                        <p>Lorem ipsum dolor sit amet</p>
                                        
                                    </div>
                                    <div>
                                        <FontAwesomeIcon className={css.icon_size} icon={faHeart}/>
                                    </div>
                                
                                    

                                </div>
                                <div className={classNames(css.price_con,css.desk)}>
                                    <span className={css.price}>$20.00 / Hr</span>
                                </div>
                            </div>
                            <NamedLink {...landingPageProps} className={css.btn_1}>Rent Now</NamedLink>

                        </div>

                        <div  className={css.overlay_col}>
                            <NamedLink {...landingPageProps} className={css.btn_card}>Browse listings</NamedLink>
                            <div className={css.overlay}>
                                <NamedLink {...landingPageProps}>
                                    <FontAwesomeIcon icon={faShare}/>Share
                                </NamedLink>
                                <NamedLink {...landingPageProps}>
                                    <FontAwesomeIcon icon={faHeart}/>Like
                                </NamedLink>
                            </div>
                        </div>


                    </div>

                   

                </div>

              
                
            </div>

            <div className={classNames(css.desktop)}>
            <div className={css.card_rows}>

                        <div className={classNames(css.flex_col,css.card)}>

                            <div className={classNames(css.flex_col,css.card)}>
                                    <div className={css.container_card}>
                                        <img className={classNames(css.resize,css.abs_posi)} src={l5}/>
                                        <div className={css.circle_1}><span className={css.new_}>New</span></div>
                                        <div className={classNames(css.price_con,css.mobi)}>
                                            <span className={css.price}>$20.00/Hr</span>
                                        </div>
                                    
                                    </div>

                                    <div className={classNames(css.flex_col,css.p_2)}>

                                        <div className={classNames(css.flex_row)}>
                                            <div>
                                                <h1 className={css.text_left}>Wedding Dress</h1>
                                                <p>Lorem ipsum dolor sit amet</p>
                                                
                                            </div>
                                            <div>
                                                <FontAwesomeIcon className={css.icon_size} icon={faHeart}/>
                                            </div>
                                        
                                            

                                        </div>
                                        <div className={classNames(css.price_con,css.desk)}>
                                            <span className={css.price}>$20.00 / Hr</span>
                                        </div>
                                    </div>
                                    <NamedLink {...landingPageProps} className={css.btn_1}>Rent Now</NamedLink>

                                </div>

                                <div  className={css.overlay_col}>
                                    <NamedLink {...landingPageProps} className={css.btn_card}>Browse listings</NamedLink>
                                    <div className={css.overlay}>
                                        <NamedLink {...landingPageProps}>
                                            <FontAwesomeIcon icon={faShare}/>Share
                                        </NamedLink>
                                        <NamedLink {...landingPageProps}>
                                            <FontAwesomeIcon icon={faHeart}/>Like
                                        </NamedLink>
                                    </div>
                                </div>


                        </div>


                        <div className={classNames(css.flex_col,css.card)}>

                            <div className={classNames(css.flex_col,css.card)}>
                                    <div className={css.container_card}>
                                        <img className={classNames(css.resize,css.abs_posi)} src={l6}/>
                                        <div className={css.circle_1}><span className={css.new_}>New</span></div>
                                        <div className={classNames(css.price_con,css.mobi)}>
                                            <span className={css.price}>$20.00/Hr</span>
                                        </div>
                                    
                                    </div>

                                    <div className={classNames(css.flex_col,css.p_2)}>

                                        <div className={classNames(css.flex_row)}>
                                            <div>
                                                <h1 className={css.text_left}>Buffing Machine</h1>
                                                <p>Lorem ipsum dolor sit amet</p>
                                                
                                            </div>
                                            <div>
                                                <FontAwesomeIcon className={css.icon_size} icon={faHeart}/>
                                            </div>
                                        
                                            

                                        </div>
                                        <div className={classNames(css.price_con,css.desk)}>
                                            <span className={css.price}>$20.00 / Hr</span>
                                        </div>
                                    </div>
                                    <NamedLink {...landingPageProps} className={css.btn_1}>Rent Now</NamedLink>

                                </div>

                                <div  className={css.overlay_col}>
                                    <NamedLink {...landingPageProps} className={css.btn_card}>Browse listings</NamedLink>
                                    <div className={css.overlay}>
                                        <NamedLink {...landingPageProps}>
                                            <FontAwesomeIcon icon={faShare}/>Share
                                        </NamedLink>
                                        <NamedLink {...landingPageProps}>
                                            <FontAwesomeIcon icon={faHeart}/>Like
                                        </NamedLink>
                                    </div>
                                </div>


                        </div>

                        <div className={classNames(css.flex_col,css.card)}>

                                <div className={classNames(css.flex_col,css.card)}>
                                        <div className={css.container_card}>
                                            <img className={classNames(css.resize,css.abs_posi)} src={l7}/>
                                            <div className={css.circle_1}><span className={css.new_}>New</span></div>
                                            <div className={classNames(css.price_con,css.mobi)}>
                                                <span className={css.price}>$20.00/Hr</span>
                                            </div>
                                        
                                        </div>

                                        <div className={classNames(css.flex_col,css.p_2)}>

                                            <div className={classNames(css.flex_row)}>
                                                <div>
                                                    <h1 className={css.text_left}>Car touching wires</h1>
                                                    <p>Lorem ipsum dolor sit amet</p>
                                                    
                                                </div>
                                                <div>
                                                    <FontAwesomeIcon className={css.icon_size} icon={faHeart}/>
                                                </div>
                                            
                                                

                                            </div>
                                            <div className={classNames(css.price_con,css.desk)}>
                                                <span className={css.price}>$20.00 / Hr</span>
                                            </div>
                                        </div>
                                        <NamedLink {...landingPageProps} className={css.btn_1}>Rent Now</NamedLink>

                                    </div>

                                    <div  className={css.overlay_col}>
                                        <NamedLink {...landingPageProps} className={css.btn_card}>Browse listings</NamedLink>
                                        <div className={css.overlay}>
                                            <NamedLink {...landingPageProps}>
                                                <FontAwesomeIcon icon={faShare}/>Share
                                            </NamedLink>
                                            <NamedLink {...landingPageProps}>
                                                <FontAwesomeIcon icon={faHeart}/>Like
                                            </NamedLink>
                                        </div>
                                    </div>
                        </div>

                        <div className={classNames(css.flex_col,css.card)}>

                        <div className={classNames(css.flex_col,css.card)}>
                                <div className={css.container_card}>
                                    <img className={classNames(css.resize,css.abs_posi)} src={l8}/>
                                    <div className={css.circle_1}><span className={css.new_}>New</span></div>
                                    <div className={classNames(css.price_con,css.mobi)}>
                                        <span className={css.price}>$20.00/Hr</span>
                                    </div>
                                
                                </div>

                                <div className={classNames(css.flex_col,css.p_2)}>

                                    <div className={classNames(css.flex_row)}>
                                        <div>
                                            <h1 className={css.text_left}>Foldable Chairs</h1>
                                            <p>Lorem ipsum dolor sit amet</p>
                                            
                                        </div>
                                        <div>
                                            <FontAwesomeIcon className={css.icon_size} icon={faHeart}/>
                                        </div>
                                    
                                        

                                    </div>
                                    <div className={classNames(css.price_con,css.desk)}>
                                        <span className={css.price}>$20.00 / Hr</span>
                                    </div>
                                </div>
                                <NamedLink {...landingPageProps} className={css.btn_1}>Rent Now</NamedLink>

                            </div>

                            <div  className={css.overlay_col}>
                                <NamedLink {...landingPageProps} className={css.btn_card}>Browse listings</NamedLink>
                                <div className={css.overlay}>
                                    <NamedLink {...landingPageProps}>
                                        <FontAwesomeIcon icon={faShare}/>Share
                                    </NamedLink>
                                    <NamedLink {...landingPageProps}>
                                        <FontAwesomeIcon icon={faHeart}/>Like
                                    </NamedLink>
                                </div>
                            </div>


                        </div>

                        <div className={classNames(css.flex_col,css.card)}>

                        <div className={classNames(css.flex_col,css.card)}>
                                <div className={css.container_card}>
                                    <img className={classNames(css.resize,css.abs_posi)} src={l9}/>
                                    <div className={css.circle_1}><span className={css.new_}>New</span></div>
                                    <div className={classNames(css.price_con,css.mobi)}>
                                        <span className={css.price}>$20.00/Hr</span>
                                    </div>
                                
                                </div>

                                <div className={classNames(css.flex_col,css.p_2)}>

                                    <div className={classNames(css.flex_row)}>
                                        <div>
                                            <h1 className={css.text_left}>Wood Cutter</h1>
                                            <p>Lorem ipsum dolor sit amet</p>
                                            
                                        </div>
                                        <div>
                                            <FontAwesomeIcon className={css.icon_size} icon={faHeart}/>
                                        </div>
                                    
                                        

                                    </div>
                                    <div className={classNames(css.price_con,css.desk)}>
                                        <span className={css.price}>$20.00 / Hr</span>
                                    </div>
                                </div>
                                <NamedLink {...landingPageProps} className={css.btn_1}>Rent Now</NamedLink>

                            </div>

                            <div  className={css.overlay_col}>
                                <NamedLink {...landingPageProps} className={css.btn_card}>Browse listings</NamedLink>
                                <div className={css.overlay}>
                                    <NamedLink {...landingPageProps}>
                                        <FontAwesomeIcon icon={faShare}/>Share
                                    </NamedLink>
                                    <NamedLink {...landingPageProps}>
                                        <FontAwesomeIcon icon={faHeart}/>Like
                                    </NamedLink>
                                </div>
                            </div>


                    </div>



            </div>

                    <div className={css.show_more}>
                        <NamedLink {...landingPageProps}>
                            Show more
                        </NamedLink>
                    </div>

            </div>

            <div className={classNames(css.desktop)}>

                    <div className={css.header}>
                        <h2>Flexibility and options to suit your lifestyle.</h2>
                        <p>
                            You need it? We got it. We make finding your next home easy, comfortable, and simple. 
                            From our happiness guarantee<br/> to our selective roommate finder option. 
                            We provide you the flexibility that you most desire.
                        </p>
                    </div>

                    <div className={css.card_rows}>
                        <div className={classNames(css.flex_col,css.card)}>
                            <div className={classNames(css.flex_col,css.card)}>
                                    <div className={css.container_card}>
                                        <img className={classNames(css.resize,css.abs_posi,css.no_rad)} src={f1}/>
                                        
                                    </div>
                                  

                                </div>

                                <div  className={css.overlay_col_2}>
                                    <div>
                                        <h3 className={classNames(css.text_left,css.color_white)}>Looking for Delivery?</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur amet odio ante nunc enim quam</p>
                                        <NamedLink {...landingPageProps}>
                                            Learn more
                                        </NamedLink>
                                    </div>
                                
                                   
                                </div>


                        </div>
                        <div className={classNames(css.flex_col,css.card)}>
                            <div className={classNames(css.flex_col,css.card)}>
                                    <div className={css.container_card}>
                                        <img className={classNames(css.resize,css.abs_posi,css.no_rad)} src={f2}/>
                                        
                                    </div>
                                  

                                </div>

                                <div  className={css.overlay_col_2}>
                                    <div>
                                        <h3 className={classNames(css.text_left,css.color_white)}>Want list your item?</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur amet odio ante nunc enim quam</p>
                                        <NamedLink {...landingPageProps}>
                                            Learn more
                                        </NamedLink>
                                    </div>
                                
                                   
                                </div>


                        </div>
                        <div className={classNames(css.flex_col,css.card)}>
                            <div className={classNames(css.flex_col,css.card)}>
                                    <div className={css.container_card}>
                                        <img className={classNames(css.resize,css.abs_posi,css.no_rad)} src={f3}/>
                                        
                                    </div>
                                  

                                </div>

                                <div  className={css.overlay_col_2}>
                                    <div>
                                        <h3 className={classNames(css.text_left,css.color_white)}>Looking for storage?</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur amet odio ante nunc enim quam</p>
                                        <NamedLink {...landingPageProps}>
                                            Learn more
                                        </NamedLink>
                                    </div>
                                
                                   
                                </div>


                        </div>



                    </div>



            </div>

            <div className={classNames(css.desktop)}>

                <div className={css.header}>
                    <h2>What our clients say</h2>
                    
                </div>

                <div className={css.card_rows}>
                    <div className={classNames(css.flex_col,css.card_2)}>
                            <div className={classNames(css.flex_col,css.card,css.no_shadow)}>
                                <div className={css.profile_icon_con}>
                                    <img className={classNames(css.resize,css.abs_posi,css.no_rad)} src={f1}/>
                                    <div>
                                        <h3>John Carter</h3>
                                        <p>Head of Marketing at Facebook</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <hr className={css.hr}/>
                            <div>
                                        <h4 className={css.mb_2}>“Totally recommended”</h4>
                                        <p className={css.mb_2}>
                                        Lorem ipsum dolor sit amet consectetur amet odio ante nunc enim quam 
                                        diam dui tempor nisi risus bibendum cursus ac non tortor posuere fringilla 
                                        donec enim congue morbi netus sit non quis.
                                        </p>
                                        <ReviewRating
                                           rating={4}
                                           className={css.ratng}
                                        />
                            </div>
                    </div>
                    <div className={classNames(css.flex_col,css.card_2)}>
                            <div className={classNames(css.flex_col,css.card,css.no_shadow)}>
                                <div className={css.profile_icon_con}>
                                    <img className={classNames(css.resize,css.abs_posi,css.no_rad)} src={f1}/>
                                    <div>
                                        <h3>Sophie Moore</h3>
                                        <p>Head of Design at Google</p>
                                    </div>
                                    
                                </div>
                            

                            </div>
                            <hr className={css.hr}/>
                            <div>
                                        <h4 className={css.mb_2}>“Totally recommended”</h4>
                                        <p className={css.mb_2}>
                                        Lorem ipsum dolor sit amet consectetur amet odio ante nunc enim quam 
                                        diam dui tempor nisi risus bibendum cursus ac non tortor posuere fringilla 
                                        donec enim congue morbi netus sit non quis.
                                        </p>
                                        <ReviewRating
                                           rating={4}
                                           className={css.ratng}
                                            /* Available Props */
                                        />
                                       
                            </div>
                    </div>
                    <div className={classNames(css.flex_col,css.card_2)}>
                            <div className={classNames(css.flex_col,css.card,css.no_shadow)}>
                                <div className={css.profile_icon_con}>
                                    <img className={classNames(css.resize,css.abs_posi,css.no_rad)} src={f1}/>
                                    <div>
                                        <h3>Andy Smith</h3>
                                        <p>Head of Development at YouTube</p>
                                    </div>
                                    
                                </div>
                            

                            </div>
                            <hr className={css.hr}/>
                            <div>
                                        <h4 className={css.mb_2}>“Totally recommended”</h4>
                                        <p className={css.mb_2}>
                                        Lorem ipsum dolor sit amet consectetur amet odio ante nunc enim quam 
                                        diam dui tempor nisi risus bibendum cursus ac non tortor posuere fringilla 
                                        donec enim congue morbi netus sit non quis.
                                        </p>
                                        <ReviewRating
                                           rating={5}
                                           className={css.ratng}
                                            /* Available Props */
                                        />
                            </div>
                    </div>



                </div>



            </div>

    </>
    
    
  );
}


export default CustomListingComponent;
