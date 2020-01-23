export const API_KEY = "e81d8323c36b4293ad0e7598ce9a728f";

const NAVIGATOR_LANG = navigator.language;
export const USER_COUNTRY = NAVIGATOR_LANG
  ? NAVIGATOR_LANG.replace(/(\w+-)/g, "").toLowerCase()
  : "us";

export const PAGE_SIZES = [10, 20, 30, 40, 50];

export const CATEGORIES = [
  "All",
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology"
];

export const COUNTRIES = {
  all: "World",
  ae: "United Arab Emirates",
  ar: "Argentina",
  at: "Austria",
  au: "Australia",
  be: "Belgium",
  bg: "Bulgaria",
  br: "Brazil",
  ca: "Canada",
  ch: "Switzerland",
  cn: "People’s Republic of China",
  co: "Colombia",
  cu: "Cuba",
  cz: "Czech Republic",
  de: "Germany",
  eg: "Egypt",
  fr: "France",
  gb: "United Kingdom",
  gr: "Greece",
  hk: "Hong Kong",
  hu: "Hungary",
  id: "Indonesia",
  ie: "Ireland",
  il: "Israel",
  in: "India",
  it: "Italy",
  jp: "Japan",
  kr: "Republic Of Korea",
  lt: "Lithuania",
  lv: "Latvia",
  ma: "Morocco",
  mx: "Mexico",
  my: "Malaysia",
  ng: "Nigeria",
  nl: "Netherlands",
  no: "Norway",
  nz: "New Zealand",
  ph: "Republic Of Philippines",
  pl: "Poland",
  pt: "Portugal",
  ro: "Romania",
  rs: "Serbia",
  ru: "Russian Federation",
  sa: "Saudi Arabia",
  se: "Sweden",
  sg: "Singapore",
  si: "Slovenia",
  sk: "Slovakia",
  th: "Thailand",
  tr: "Turkey",
  tw: "Taiwan",
  ua: "Ukraine",
  us: "United States",
  ve: "Venezuela",
  za: "South Africa"
};
