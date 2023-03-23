/* NavBarItem Types */
export type BackgroundColors = {
  basic?: string;
  hover?: string;
  active?: string;
};

export type TextColors = {
  basic?: string;
  hover?: string;
  active?: string;
};

export type TextStyles = {
  size?: string;
  tracking?: string;
  fontBold?: string;
};

export type CustomImage = {
  imageSrc: "";
  alt: "";
};

export type Innovation = {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type GastroMenuDeal = {
  name: string;
  price: number;
  imageSrc: string;
  alt: string;
};

export let EURO = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

export type FeatureCard = {
  headerText: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
};

export type TeamMember = {
  name: string;
  jobtitle: string;
  imageSrc: string;
  imageAlt: string;
};

export type SocialmediaLinks = {
  googleURL: string;
  googleMapsURL: string;
  facebookURL: string;
  instagramURL: string;
};

export type BusinessHours = {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
};

export type GastroInformation = {
  name: string;
  street: string;
  address: string;
  tel: string;
  email: string;
  businessHours: BusinessHours;
  socialmedia: SocialmediaLinks;
};

export type GastroEvent = {
  name: string;
  date: any;
  description: string;
  imageSrc: string;
};

export type DIRECTION = "VERTICAL" | "HORIZONTAL";
export type LAYOUT_SPAN = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
