import { createSlice } from '@reduxjs/toolkit';

const fullWebsiteInitialState = {
  // Website Details
  websiteUrl: 'example.com',
  language: { value: 'en-us', label: 'English US' },
  country: { value: 'us', label: 'United States' },
  categories: { 'Computer & Electronics': true, Entertainment: true },
  description: 'This is a sample description for a website.',
  isOwner: true,

  // Offer Details
  guestPostingPrice: '100',
  linkInsertionPrice: '50',
  samePriceForAll: 'no',
  greyNiche: {},
  homepageLinkPrice: '',
  homepageLinkGuidelines: '',
  
  // Article Specs
  writingIncluded: 'yes',
  numberOfWords: 'unlimited',
  minWords: '',
  maxWords: '',
  dofollowLinks: 'yes',
  linkTypes: 'all',
  taggingPolicy: 'not_paid',
  advertiserLinks: 'not_paid',
  otherLinks: 'allow',
  otherRules: '',
};

const initialState = {
  list: [
    { id: 1, ...fullWebsiteInitialState, flag: 'https://flagcdn.com/us.svg' },
    { id: 2, ...fullWebsiteInitialState, websiteUrl: 'example.de', country: { value: 'de', label: 'Germany' }, language: { value: 'de', label: 'German' }, flag: 'https://flagcdn.com/de.svg' },
  ],
};

const websitesSlice = createSlice({
  name: 'websites',
  initialState,
  reducers: {
    addWebsite: (state, action) => {
      const newId = state.list.length > 0 ? Math.max(...state.list.map(w => w.id)) + 1 : 1;
      state.list.push({ 
        id: newId, 
        ...action.payload,
        language: action.payload.language,
        flag: `https://flagcdn.com/${action.payload.country.value.toLowerCase()}.svg`
      });
    },
    updateWebsite: (state, action) => {
      const index = state.list.findIndex(w => w.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = {
          ...state.list[index],
          ...action.payload,
          language: action.payload.language,
          flag: `https://flagcdn.com/${action.payload.country.value.toLowerCase()}.svg`
        };
      }
    },
  },
});

export const { addWebsite, updateWebsite } = websitesSlice.actions;
export const selectWebsites = (state) => state.websites.list;
export default websitesSlice.reducer; 