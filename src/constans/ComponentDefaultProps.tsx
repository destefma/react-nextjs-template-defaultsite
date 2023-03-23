import { TextColors, BackgroundColors, TextStyles } from "./ComponentTypes";

/* HeroSwipper default Props */

export const HeroSwipperDefaultProps = {
  images: [{ imageSrc: "./assets/eisbecher_bg.webp", alt: "" }],
};

/* WelcomeSection default Props */

export const WelcomeSectionDefaultProps = {
  headerText: "Essen, Trinken, Genießen!",
  descritpion:
    "Seit 40 Jahren, Qualität aus Tradition in der Walldorfer Innenstadt. \n" +
    "Sich Zeit nehmen. Innehalten. Mit allen Sinnen wahrnehmen und die feinen Nuancen des Genusses erleben. \n" +
    "Der Gast ist bei uns König, wir erfüllen gerne Ihre Eiswünsche. Wir sind darauf bedacht, dass zufriedene Gäste unser Eiscafé mit einem Lächeln verlassen. \n-\n" +
    "Wir freuen uns auf Ihren Besuch.  \n",
  bgColor: "primary",
};

/* GastroNews default Props */

export const GastroInnovationDefaultProps = {
  innovations: [
    {
      name: "Bubble Waffel",
      description:
        "Bubble Waffles sind der Foodtrend schlechthin. Es gibt sie als süßes Streetfood mit verschiedensten Toppings. Über Social Media hat es der Trend erst nach Europa & jetzt auch zu uns geschafft.",
      imageSrc: "./assets/bubble_waffel.webp",
      imageAlt: "",
    },
    {
      name: "Bubble Tea",
      description:
        "Bubble Tea, international auch bekannt unter dem Namen Pearl Milk Tea oder Boba Boba, ist ein taiwanisches Getränk auf der Basis von gesüßtem grünem oder schwarzem Tee, das häufig mit Milch und Fruchtsirup versetzt wird. Jetzt auch bei uns erhältlich.",
      imageSrc: "./assets/bubble_tee.webp",
      imageAlt: "",
    },
  ],
};

/* GastroMenu default Props */

export const GastroMenuDefaultProps = {
  description:
    "Tauchen Sie ein, in die Welt der italienischen Eisspezialitäten. In unserem hauseigenen Eislabor  \n" +
    "produzieren wir täglich frische Eiskreationen aus besten Zutaten. \n" +
    "Altbewährte Klassiker wie Erdbeere, Vanille & Schokolade finden bei uns genauso  \n" +
    "ihren Platz wie auch Neuerscheinungen. Also freuen sie sich auch in  \n" +
    "Zukunft, sich von uns mit den neuesten Eiskreationen verwöhnen zu  \n" +
    "lassen.",
  defaultImageSrc: "./assets/cake_dessert.webp",
  defaultImageAlt: "",
  deals: [
    {
      name: "Kaffee & Tiramisu",
      price: 5.0,
      imageSrc: "./assets/cake_dessert.webp",
      alt: "",
    },
    {
      name: "Bubble Tea",
      price: 3.9,
      imageSrc: "./assets/bubble_tee.webp",
      alt: "",
    },
    {
      name: "Bubble Waffel",
      price: 5.0,
      imageSrc: "./assets/bubble_waffel.webp",
      alt: "",
    },
  ],
};

/* GastroEvents default Props */

export const GastroEventsDefaultProps = {
  events: [
    {
      name: "Italienische Woche",
      date: new Date("2022-07-23"),
      description:
        "Alles rund um Italien. Musik, Pizza, Pasta & sowie Eis, dürfen in der Italienischer Woche nicht fehlen",
      imageSrc: "/assets/cake_dessert.webp",
    },
    {
      name: "Italienische Woche",
      date: new Date("2022-07-23"),
      description:
        "Alles rund um Italien. Musik, Pizza, Pasta & sowie Eis, dürfen in der Italienischer Woche nicht fehlen",
      imageSrc: "/assets/cake_dessert.webp",
    },
    {
      name: "Spezialitäten Donnerstag",
      date: new Date("2022-04-03"),
      description: "Alle Spezialitäten 10% reduziert.",
      imageSrc: "/assets/cake_dessert.webp",
    },
    {
      name: "Spezialitäten Donnerstag",
      date: new Date("2022-04-03"),
      description: "Alle Spezialitäten 10% reduziert.",
      imageSrc: "/assets/cake_dessert.webp",
    },
    {
      name: "Spezialitäten Donnerstag",
      date: new Date("2022-04-03"),
      description: "Alle Spezialitäten 10% reduziert.",
      imageSrc: "/assets/cake_dessert.webp",
    },
  ],
};

/* Features default Props */

export const FeaturesDefaultProps = {
  cards: [
    {
      headerText: "Fruchteis",
      imageSrc: "./assets/fruit.webp",
      imageAlt: "",
      description:
        "Unser Furchteis wird aus ausgewählten, hochwertigen & frischen Früchten hergestellt. Obwohl es keine Milchprodukte enthält ist es super cremig.",
    },
    {
      headerText: "Milcheis",
      imageSrc: "./assets/milk.webp",
      imageAlt: "",
      description:
        " Eine Mischung aus Milch, Zucker und Naturprodukten wie Kakao, Nüsse, Pistazien, Wallnüsse, Vanille, Kaffee usw. Unser Milcheis ist super cremig & das ganz ohne Sahne.",
    },
    {
      headerText: "Veganes",
      imageSrc: "./assets/vegan.webp",
      imageAlt: "",
      description:
        "Alle Fruchteissorten sind ohne tierische Inhaltsstoffe. Wir bieten auch andere vegane Eissorten. Bitte fragen Sie nach.",
    },
    {
      headerText: "Glutenfrei",
      imageSrc: "./assets/gluten-free.webp",
      imageAlt: "",
      description:
        "Grundsätzlich sind viele Sorten Glutenfrei. Wir beraten Sie gerne.",
    },
  ],
};

/* TeamSection default Props */

export const TeamSectionDefaultProps = {
  members: [
    {
      name: "Musterman",
      jobtitle: "Eis Laborant",
      imageSrc: "./assets/user.webp",
      imageAlt: "Mitarbeiter",
    },
    {
      name: "Mustermann",
      jobtitle: "Bedienung",
      imageSrc: "./assets/user.webp",
      imageAlt: "Mitarbeiter",
    },
  ],
};

/* Gallery default Props */

export const GalleryDefaultProps = {
  images: [
    {
      imageSrc: "./assets/eisbehaelter.webp",
      alt: "Behälters mit Sahne Kirsch Eis",
    },
    {
      imageSrc: "./assets/fruchtbecher.webp",
      alt: "Fruchtbecher",
    },
    {
      imageSrc: "./assets/rochebecher2.webp",
      alt: "Rochebecher Eis mit Rochekugeln",
    },
    {
      imageSrc: "./assets/kuchen_caffee.webp",
      alt: "Cappuchino mit Kuchen",
    },
    {
      imageSrc: "./assets/vitrine.webp",
      alt: "Bild der Vitrine mit Eisbehältern",
    },
  ],
};

/* Footer default Props */

export const FooterDefaultProps = {
  gastroInformation: {
    name: "Gastro",
    street: "Musterstraße 1",
    address: "66666 Musterstadt",
    tel: "(+49) 111 111 111 11",
    email: "info@musteremail.de",
    businessHours: {
      monday: "13:00 - 20:00",
      tuesday: "13:00 - 20:00",
      wednesday: "",
      thursday: "13:00 - 20:00",
      friday: "13:00 - 20:00",
      saturday: "13:00 - 20:00",
      sunday: "13:00 - 20:00",
    },
    socialmedia: {
      googleURL: "https://www.google.com/search?q=Gastro",
      googleMapsURL: "https://www.google.com/maps/",
      instagramURL: "https://instagram.com/",
    },
  },
  bgColor: "bg-gray-700",
};

/* ClickableNavBarItem default Props */

export const ClickableNavBarItemDefaultProps = {
  className: "",
  backgroundColors: {},
  textColors: {},
  textStyles: {},
  isHoverUnderline: false,
  isRounded: false,
};

/* heroContainer default Props */

export const HeroContainerDefaultProps = {
  welcomeText: "Willkommen auf Ihrer Gastro Seite!",
  headerText: "GÄSTE MIT EINER",
  headerTypedText: ["SCHÖNEN", "MODERNEN"],
  headerTextAfter: "WEBSITE EMPFANGEN",
  description:
    "Erstellen Sie mit wenigen Klicks eine mobilfreundliche Website mit Gallerie, Reservierung &amp; vielem mehr",
  buttonText: "Eigene Website erstellen",
  buttonHref: "/login",
  buttonHrefAs: "/login",
  imageSrc: "/hero-image.jpg",
};

/* AlertMessage default Props */

export const AlertMessageDefaultProps = {
  welcomeText: "Wilkommen,",
  textMessage: " Hier alles aktuelle auf einen Blick.",
};

/* Tabs default Props */

export const TabsDefaultProps = {
  tabs: [
    "Allgemein",
    "Über uns",
    "Features",
    "Speißekarte",
    "Events",
    "Team",
    "Öffnungszeiten",
    "Links",
  ],
};

/* EventNotification default Props */

export const EventNotificationDefaultProps = {
  name: "",
  description: "+140%",
  alertColor: "bg-emerald-500",
};

/* Animated Image default Props */

export const AnimatedImageDefaultProps = {
  image: {
    imageSrc: "./assets/EisWaffel-Illustration.webp",
    alt: "Eis Waffel",
  },
};

/* NavBarItem default Props */

const defaultTextColors: TextColors = {
  basic: "text-white",
  hover: "text-cyan-700",
  active: "text-white",
};

const defaultBackgroundColors: BackgroundColors = {
  basic: "bg-transparent",
  hover: "bg-gray-400",
  active: "bg-skyblue",
};

const defaultTextStyles: TextStyles = {
  size: "text-lg",
  tracking: "tracking-wirde",
  fontBold: "font-bold",
};

export const DefaultNavBarItemProps = {
  className: "",
  href: "",
  backgroundColors: defaultBackgroundColors,
  textColors: defaultTextColors,
  textStyles: defaultTextStyles,
  isHoverUnderline: true,
  isRounded: true,
};

/* NavBarItem Gastro Props */

const gastroTextColors: TextColors = {
  basic: "text-font-normal",
  hover: "text-hover",
  active: "text-activ",
};

const gastroBackgroundColors: BackgroundColors = {
  basic: "bg-transparent",
  hover: "bg-transparent",
  active: "bg-activ",
};

const gastroTextStyles: TextStyles = {
  size: "text-sm",
  tracking: "tracking-wirde",
  fontBold: "font-bold",
};

export const GastroNavBarItemProps = {
  className: "",
  href: "",
  backgroundColors: gastroBackgroundColors,
  textColors: gastroTextColors,
  textStyles: gastroTextStyles,
  isHoverUnderline: true,
  isRounded: false,
};
