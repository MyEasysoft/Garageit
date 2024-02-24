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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames';
import NamedLink from '../NamedLink/NamedLink';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';


const CustomListingComponent = props =>{
    const activeClassName = 'my-active-class';
    
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
                                    <img className={classNames(css.resize,css.abs_posi)} src={l1}/>
                                    <div className={css.circle_1}><span className={css.new_}>New</span></div>
                                
                                </div>

                                <div className={classNames(css.flex_col,css.p_2)}>

                                    <div className={classNames(css.flex_row)}>
                                        <div>
                                            <h1 className={css.text_left}>Heat Presser</h1>
                                            <p>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    
                                        <div>
                                            <FontAwesomeIcon className={css.icon_size} icon={faHeart}/>
                                        </div>

                                    </div>
                                    <div className={css.price_con}>
                                        <span className={css.price}>$20.00 / Hr</span>
                                    </div>
                                </div>

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
                                    <img className={classNames(css.resize,css.abs_posi)} src={l2}/>
                                    <div className={css.circle_1}><span className={css.new_}>New</span></div>
                                
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
                                    <div className={css.price_con}>
                                        <span className={css.price}>$20.00 / Hr</span>
                                    </div>
                                </div>

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
                                    <div className={css.price_con}>
                                        <span className={css.price}>$20.00 / Hr</span>
                                    </div>
                                </div>

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
                                    <div className={css.price_con}>
                                        <span className={css.price}>$20.00 / Hr</span>
                                    </div>
                                </div>

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
                                
                                </div>

                                <div className={classNames(css.flex_col,css.p_2)}>

                                    <div className={classNames(css.flex_row)}>
                                        <div>
                                            <h1 className={css.text_left}>Heat Presser</h1>
                                            <p>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    
                                        <div>
                                            <FontAwesomeIcon className={css.icon_size} icon={faHeart}/>
                                        </div>

                                    </div>
                                    <div className={css.price_con}>
                                        <span className={css.price}>$20.00 / Hr</span>
                                    </div>
                                </div>

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
                                    
                                    </div>

                                    <div className={classNames(css.flex_col,css.p_2)}>

                                        <div className={classNames(css.flex_row)}>
                                            <div>
                                                <h1 className={css.text_left}>Heat Presser</h1>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        
                                            <div>
                                                <FontAwesomeIcon className={css.icon_size} icon={faHeart}/>
                                            </div>

                                        </div>
                                        <div className={css.price_con}>
                                            <span className={css.price}>$20.00 / Hr</span>
                                        </div>
                                    </div>

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
                                    
                                    </div>

                                    <div className={classNames(css.flex_col,css.p_2)}>

                                        <div className={classNames(css.flex_row)}>
                                            <div>
                                                <h1 className={css.text_left}>Heat Presser</h1>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        
                                            <div>
                                                <FontAwesomeIcon className={css.icon_size} icon={faHeart}/>
                                            </div>

                                        </div>
                                        <div className={css.price_con}>
                                            <span className={css.price}>$20.00 / Hr</span>
                                        </div>
                                    </div>

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
                                    
                                    </div>

                                    <div className={classNames(css.flex_col,css.p_2)}>

                                        <div className={classNames(css.flex_row)}>
                                            <div>
                                                <h1 className={css.text_left}>Heat Presser</h1>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        
                                            <div>
                                                <FontAwesomeIcon className={css.icon_size} icon={faHeart}/>
                                            </div>

                                        </div>
                                        <div className={css.price_con}>
                                            <span className={css.price}>$20.00 / Hr</span>
                                        </div>
                                    </div>

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
                                    
                                    </div>

                                    <div className={classNames(css.flex_col,css.p_2)}>

                                        <div className={classNames(css.flex_row)}>
                                            <div>
                                                <h1 className={css.text_left}>Heat Presser</h1>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        
                                            <div>
                                                <FontAwesomeIcon className={css.icon_size} icon={faHeart}/>
                                            </div>

                                        </div>
                                        <div className={css.price_con}>
                                            <span className={css.price}>$20.00 / Hr</span>
                                        </div>
                                    </div>

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
                                    
                                    </div>

                                    <div className={classNames(css.flex_col,css.p_2)}>

                                        <div className={classNames(css.flex_row)}>
                                            <div>
                                                <h1 className={css.text_left}>Heat Presser</h1>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        
                                            <div>
                                                <FontAwesomeIcon className={css.icon_size} icon={faHeart}/>
                                            </div>

                                        </div>
                                        <div className={css.price_con}>
                                            <span className={css.price}>$20.00 / Hr</span>
                                        </div>
                                    </div>

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

            <div className={classNames(css.mobile)}>

                    <div className={css.header}>
                        <h2>Ready for Rental</h2>
                    </div>

                    <div className={classNames(css.flex_col,css.card)}>


                        <div className={css.container_card}>
                            <img className={classNames(css.resize,css.abs_posi)} src={banner}/>
                            <div className={css.circle_1}><span className={css.new_}>New</span></div>
                            <div className={css.price_con}>
                                <span className={css.price}>$20.00/Hr</span>
                            </div>
                        </div>

                        <div className={classNames(css.flex_col,css.p_2)}>

                            <div className={classNames(css.flex_row)}>
                                <div>
                                    <h1 className={css.text_left}>Heat Presser</h1>
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
