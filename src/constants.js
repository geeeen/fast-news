export const API_KEY = "e81d8323c36b4293ad0e7598ce9a728f";

export const NAVIGATOR_LANG = navigator.language;
export const GET_USER_COUNTRY = nav_lang =>
  nav_lang ? nav_lang.replace(/(\w+-)/g, "").toLowerCase() : "us";

export const GET_COLUMN_COUNT = () => Math.round(window.innerWidth / 400);

export const LS_PARAMS_NAME = "params";
export const CUSTOM_ERROR_CODE = "parametersMissing";
export const CUSTOM_ERROR_MESSAGE = "Set Country, Category or Search String";

export const PAGE_SIZES = [10, 20, 30, 40, 50];
export const CATEGORIES = [
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
  cn: "China",
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
