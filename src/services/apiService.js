import axios from 'axios';

export const getCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,cca2');
    return response.data.map(country => ({
      value: country.cca2,
      label: country.name.common,
      flag: country.flags.svg
    })).sort((a, b) => a.label.localeCompare(b.label));
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
};

export const getLanguages = () => {
  return [
    { value: 'en-us', label: 'English US', flag: 'https://flagcdn.com/us.svg' },
    { value: 'en-uk', label: 'English UK', flag: 'https://flagcdn.com/gb.svg' },
    { value: 'fr', label: 'French', flag: 'https://flagcdn.com/fr.svg' },
    { value: 'de', label: 'German', flag: 'https://flagcdn.com/de.svg' },
    { value: 'hi', label: 'Hindi', flag: 'https://flagcdn.com/in.svg' },
    { value: 'us', label: 'United States', flag: 'https://flagcdn.com/us.svg'}
  ];
};

export const getMainCategories = () => {
  return [
    'Animals / Pets', 'Art', 'Auto', 'Beauty', 'Blogging', 'Business / Entrepreneur', 'Auto', 'Directory',
    'Education', 'Entertainment & Music', 'Environment', 'Events', 'Family / Parenting', 'Fashion', 'Finance',
    'Food', 'Gambling', 'Gaming', 'General', 'Health & Fitness', 'Home & Garden', 'Italian Sites', 'Legal',
    'Lifestyle', 'Marijuana / Vaporizers', 'Marketing', 'Medical', 'News', 'Other', 'Outdoors', 'Photography',
    'Politics', 'Real Estate', 'Entertainment & Music', 'EnvironmentSafety', 'SEO', 'Sex & Adult', 'Shopping', 'Finance'
  ];
};

export const getArticleSpecificationOptions = () => {
  return {
    writingIncluded: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No, the advertiser (client) needs to provide the content' }
    ],
    numberOfWords: [
      { value: 'unlimited', label: 'Length of the article is not limited.' },
      { value: 'limited', label: 'No, the advertiser (client) needs to provide the content' }
    ],
    dofollowLinks: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ],
    linkTypes: [
      { value: 'brand_url_nav_graphic', label: 'Only brand links, URL, navigational, graphic links.' },
      { value: 'brand_generic', label: 'Only branded and generic links.' },
      { value: 'mixed', label: 'Also mixed links (partly exact match anchors).' },
      { value: 'all', label: 'All links, including exact match anchors.' }
    ],
    taggingPolicy: [
      { value: 'not_paid', label: 'We do not tag paid articles.' },
      { value: 'on_request', label: 'Articles are tagged only at the advertiser\'s request.' },
      { value: 'always_sponsored', label: 'We always tag articles: "Sponsored article".' },
      { value: 'all_links', label: 'All links, including exact match anchors.' }
    ],
    advertiserLinks: [
      { value: 'not_paid', label: 'We do not tag paid articles.' },
      { value: 'max_number', label: 'A maximum number of links to the advertiser:' }
    ],
    otherLinks: [
      { value: 'allow', label: 'We allow links to other websites in the content of the article.' },
      { value: 'disallow', label: 'We DO NOT allow links to other websites in the content of the article.' }
    ]
  };
};

export const getGreyNicheCategories = () => {
  return [
    'Gambling', 'Crypto', 'Adult',
    'Gambling', 'Crypto', 'Adult'
  ];
}; 