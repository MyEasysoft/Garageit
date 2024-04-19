import { fetchPageAssets } from '../../ducks/hostedAssets.duck';
import { addMarketplaceEntities, addMarketplaceEntities2 } from '../../ducks/marketplaceData.duck';
import { createImageVariantConfig } from '../../util/sdkLoader';
export const ASSET_NAME = 'landing-page';

export const loadData =  (params, search,config) => (dispatch, getState, sdk) => {
  const pageAsset = { landingPage: `content/pages/${ASSET_NAME}.json` };

  const s = getState();

  const {
    aspectWidth = 1,
    aspectHeight = 1,
    variantPrefix = 'listing-card',
  } = config.layout.listingImage;
  const aspectRatio = aspectHeight / aspectWidth;

  sdk.listings
  .query({ perPage: 20 ,
    include: ['images'],
    'fields.listing': [
      'title',
      'description',
      'geolocation',
      'price',
      'publicData.listingType',
      'publicData.transactionProcessAlias',
      'publicData.unitType',
      // These help rendering of 'purchase' listings,
      // when transitioning from search page to listing page
      'publicData.pickupEnabled',
      'publicData.shippingEnabled',
    ],
    'fields.user': ['profile.displayName', 'profile.abbreviatedName'],
    'fields.image': [
      'variants.scaled-small',
      'variants.scaled-medium',
      `variants.${variantPrefix}`,
      `variants.${variantPrefix}-2x`,
    ],
    ...createImageVariantConfig(`${variantPrefix}`, 400, aspectRatio),
    ...createImageVariantConfig(`${variantPrefix}-2x`, 800, aspectRatio),
    'limit.images': 1,
  })
  .then(response => {

    const listingFields = config?.listing?.listingFields;
    const sanitizeConfig = { listingFields };
    console.log("Request Success with status:------------------------------------------" + response.data.data);
    dispatch(addMarketplaceEntities(response));
    console.log("Request Savedd with status:---oooooooooooooooooooooooooooooooooooooooooooo    " + JSON.stringify(response.data.data));
  })
  .catch(res => {
    // An error occurred
    console.log(`Request failed with status: ${res.status} ${res.statusText}`);
  });


  return  dispatch(fetchPageAssets(pageAsset, true));
  

};
