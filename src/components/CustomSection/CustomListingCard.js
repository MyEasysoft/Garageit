import React from 'react';
import css from './CustomListingCard.module.css';

import l1 from '../../assets/l1.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames';
import NamedLink from '../NamedLink/NamedLink';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import ReviewRating from '../ReviewRating/ReviewRating';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import { lazyLoadWithDimensions } from '../../util/uiHelpers';
import AspectRatioWrapper from '../AspectRatioWrapper/AspectRatioWrapper';

const CustomListingCard = props =>{

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
        id
        } = props;

    const LazyImage = lazyLoadWithDimensions(ResponsiveImage, { loadAfterInitialRendering: 3000 });
  
    const activeClassName = '';
    
    const landingPageProps = {
        name: 'LandingPage',
        activeClassName,
        match: { url: '/' },
      };

  return (
    
    <>
            <div className={classNames(css.mobile)}>
            <NamedLink name="ListingPage" params={{ id, slug }}>
                <div className={css.card_rows}>

                    <div className={classNames(css.flex_col,css.card)}>
                        <div className={classNames(css.flex_col,css.card)}>
                                <div className={css.container_card}>
                                <AspectRatioWrapper
                                    className={css.aspectRatioWrapper}
                                    width={aspectWidth}
                                    height={aspectHeight}
                                    {...setActivePropsMaybe}
                                >
                                    <LazyImage
                                    rootClassName={css.rootForImage}
                                    alt={title}
                                    image={firstImage}
                                    variants={variants}
                                    sizes={renderSizes}
                                    />
                                </AspectRatioWrapper>
                                    <div className={css.circle_1}><span className={css.new_}>New</span></div>
                                    <div className={classNames(css.price_con,css.mobi)}>
                                        <span className={css.price}>${price}/Hr</span>
                                    </div>
                                </div>
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
                                                    <i>12 reviews</i>
                                                </div>
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
                                    <NamedLink {...landingPageProps} className={classNames(css.no_bg)}>Ask a question</NamedLink>
                               
                                
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
            </NamedLink>
            </div>
                
    </>
  );
}


export default CustomListingCard;
