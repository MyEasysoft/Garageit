import classNames from "classnames";
import React from "react";
import { ReviewRating } from "..";
import css from './DeliveryPage.module.css';
import f1 from '../../assets/f1.png';

const ClientsComponent = props =>{

    const {description,title,blocks} = props;
    
    const activeClassName = '';
    
    const landingPageProps = {
        name: 'LandingPage',
        activeClassName,
        match: { url: '/' },
      };
//
    return(
        <>
            <div className={classNames(css.desktop,css.mb_5)}>

                    <div className={css.header}>
                        <h2>{title.content}</h2>
                    </div>

                    <div className={css.card_rows}>
                        {true?Object.values(blocks).map((val,key)=>{

                                const title = val?.title.content;
                                const description = val?.text.content;
                                const result = description.split("-");
                                const position = result[0];
                                const subHeading = result[1];
                                const subContent = result[2];
                                const rating = result[3];
                                const image = val?.media?.image?.attributes?.variants?.original400?.url;

                                return(
                                    <>
                                        <div className={classNames(css.flex_col,css.card_2)}>
                                                <div className={classNames(css.flex_col,css.card_no_shadow,css.no_shadow)}>
                                                    <div className={classNames(css.profile_icon_con,css.no_margin)}>
                                                        <img className={classNames(css.resize,css.abs_posi,css.no_rad)} src={image}/>
                                                        <div>
                                                            <h3>{title}</h3>
                                                            <p>{position}</p>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <hr className={css.hr}/>
                                                <div>
                                                            <h4 className={css.mb_2}>“{subHeading}”</h4>
                                                            <p className={css.mb_2}>
                                                                {subContent}
                                                            </p>
                                                            <ReviewRating
                                                            rating={parseInt(rating)}
                                                            className={css.ratng}
                                                            />
                                                </div>
                                        </div>
                                    </>
                                );
                        }):""
                        }
                    </div>
            </div>
        </>
    );

}


export default ClientsComponent;