import classNames from "classnames";
import React  from "react";
import css from './DeliveryPage.module.css';

import f1 from '../../assets/f1.png';
import f2 from '../../assets/f2.png';
import f3 from '../../assets/f3.png';
import NamedLink from "../NamedLink/NamedLink";

const DeliveryComponent = props =>{

    const {description,title,blocks} = props;
    
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
                <h2>{title.content}</h2>
                <p>
                    {description.content}
                </p>
            </div>
            <div className={css.card_rows}>

            {true?
                    Object.values(blocks).map((val,key)=>{

                        const title = val?.title.content;
                        const description = val?.text.content;
                        const image = val?.media?.image?.attributes?.variants?.original400?.url;

                        return(
                             

                           

                                <div  key={key} className={classNames(css.flex_col,css.card)}>
                                    <div className={classNames(css.flex_col,css.card)}>
                                            <div className={css.container_card}>
                                                <img className={classNames(css.resize,css.abs_posi,css.no_rad)} src={image}/>
                                            </div>
                                        </div>
                
                                        <div  className={css.overlay_col_2}>
                                            <div>
                                                <h3 className={classNames(css.text_left,css.color_white)}>{title}</h3>
                                                <p>{description}</p>
                                                <NamedLink {...landingPageProps}>
                                                    Learn more
                                                </NamedLink>
                                            </div>
                                        </div>
                                </div>
                        )
                       
                    }):""
            }
            </div>
            

           
        </div>
    </>

);


}

export default DeliveryComponent;