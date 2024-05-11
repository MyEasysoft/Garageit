import React from 'react';
import { arrayOf, bool, func, node, object, oneOf, shape, string } from 'prop-types';
import classNames from 'classnames';

// Section components
import SectionArticle from './SectionArticle';
import SectionCarousel from './SectionCarousel';
import SectionColumns from './SectionColumns';
import SectionFeatures from './SectionFeatures';

// Styles
// Note: these contain
// - shared classes that are passed as defaultClasses
// - dark theme overrides
// TODO: alternatively, we could consider more in-place way of theming components
import css from './SectionBuilder.module.css';
import SectionFooter from './SectionFooter';
import { H2, ListingCard } from '../../../components';
import HomeComponent1 from '../../../components/CustomSection/Home';
import CustomListingComponent from '../../../components/CustomSection/CustomListingPage';
import DeliveryComponent from '../../../components/CustomSection/DeliveryPage';
import ClientsComponent from '../../../components/CustomSection/ClientsPage';

// These are shared classes.
// Use these to have consistent styles between different section components
// E.g. share the same title styles
const DEFAULT_CLASSES = {
  sectionDetails: css.sectionDetails,
  title: css.title,
  description: css.description,
  ctaButton: css.ctaButton,
  blockContainer: css.blockContainer,
};

/////////////////////////////////////////////
// Mapping of section types and components //
/////////////////////////////////////////////

const defaultSectionComponents = {
  article: { component: SectionArticle },
  carousel: { component: SectionCarousel },
  columns: { component: SectionColumns },
  features: { component: SectionFeatures },
  footer: { component: SectionFooter },
};

//////////////////////
// Section builder //
//////////////////////

const SectionBuilder = props => {
  const { sections, options ,listings,entities} = props;
  const { sectionComponents = {}, isInsideContainer, ...otherOption } = options || {};

  // If there's no sections, we can't render the correct section component
  if (!sections || sections.length === 0) {
    return null;
  }

  // Selection of Section components
  const components = { ...defaultSectionComponents, ...sectionComponents };
  const getComponent = sectionType => {
    const config = components[sectionType];
    return config?.component;
  };

  //console.log(listings+"                 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

  let first = true;
  return (
    <>
      
    
      {sections.map((section, index) => {
        const Section = getComponent(section.sectionType);
        // If the default "dark" theme should be applied (when text color is white).
        // By default, this information is stored to customAppearance field
        const isDarkTheme = section?.appearance?.textColor === 'white';
        const classes = classNames({ [css.darkTheme]: isDarkTheme });

        const listing = first?<H2 className={css.listing}>Listings will be loaded soon</H2>:"";
        //console.log(index+"                 dddddddddddddddddddddddddddddddddddddddddddddddddd");

          return (
            <>
            {index === 0? (
               <HomeComponent1
                  key={`${section.sectionId}_${index}`}
                  className={classes}
                  defaultClasses={DEFAULT_CLASSES}
                  isInsideContainer={isInsideContainer}
                  options={otherOption}
                  {...section}
                />
                
              ) : ""}
              {index === 1? (
                 <CustomListingComponent
                  key={`${section.sectionId}_${index}`}
                  className={classes}
                  defaultClasses={DEFAULT_CLASSES}
                  isInsideContainer={isInsideContainer}
                  options={otherOption}
                  entities={entities}
                  {...section}
                />
              ) : ""}

              {index === 2? (
               ""
              ) : ""}

              {index === 3? (
                ""
              ) :""}

              {index === 4? (
                  <DeliveryComponent
                    key={`${section.sectionId}_${index}`}
                    className={classes}
                    defaultClasses={DEFAULT_CLASSES}
                    isInsideContainer={isInsideContainer}
                    options={otherOption}
                    entities={entities}
                    {...section}
                  />
              ) :""}

              {index === 5? (
               <ClientsComponent
                key={`${section.sectionId}_${index}`}
                className={classes}
                defaultClasses={DEFAULT_CLASSES}
                isInsideContainer={isInsideContainer}
                options={otherOption}
                entities={entities}
                {...section}
              />
              ) :""}

              {index === 6? (
                ""
              ) :""}
            </>
           
          );
      
        
      })}
    </>
  );
};

const propTypeSection = shape({
  sectionId: string.isRequired,
  sectionType: oneOf(['article', 'carousel', 'columns', 'features']).isRequired,
  // Plus all kind of unknown fields.
  // BlockBuilder doesn't really need to care about those
});

const propTypeOption = shape({
  fieldComponents: shape({ component: node, pickValidProps: func }),
  blockComponents: shape({ component: node }),
  sectionComponents: shape({ component: node }),
  // isInsideContainer boolean means that the section is not taking
  // the full viewport width but is run inside some wrapper.
  isInsideContainer: bool,
});

const defaultSections = shape({
  sections: arrayOf(propTypeSection),
  options: propTypeOption,
});

const customSection = shape({
  sectionId: string.isRequired,
  sectionType: string.isRequired,
  // Plus all kind of unknown fields.
  // BlockBuilder doesn't really need to care about those
});
const propTypeOptionForCustomSections = shape({
  fieldComponents: shape({ component: node, pickValidProps: func }),
  blockComponents: shape({ component: node }),
  sectionComponents: shape({ component: node }).isRequired,
  // isInsideContainer boolean means that the section is not taking
  // the full viewport width but is run inside some wrapper.
  isInsideContainer: bool,
});

const customSections = shape({
  sections: arrayOf(customSection),
  options: propTypeOptionForCustomSections.isRequired,
  listings:object,
});

SectionBuilder.defaultProps = {
  sections: [],
  options: null,
  listings:[]
};

SectionBuilder.propTypes = oneOf([defaultSections, customSections]).isRequired;

export default SectionBuilder;
