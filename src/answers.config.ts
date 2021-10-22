import Cards from "./cards";
import Pages from "./pages";
import { AnswersConfig } from "./types";
import Sections from "./universalSections";

const config: AnswersConfig = {
  style: {
    colors: {
      brand: "blue",
    },
  },
  providerConfig: {
    apiKey: "387c91c8dc92b07b5cf8db280a0b225d",
    experienceKey: "fins_demo_v2",
    locale: "en",
  },
  defaults: {
    card: Cards.DefaultCard,
    section: Sections.DefaultSection,
    page: Pages.DefaultVerticalPage,
  },
  universal: {
    path: "/",
  },
  verticals: {
    promos: {
      card: Cards.PromoCard,
      title: "Promotions",
    },
    links: {
      page: Pages.LinksPage,
      cardFields: {
        body: "s_snippet",
      },
    },
    products: {
      section: Sections.GridSection,
      card: Cards.ProductCard,
      page: Pages.GridPage,
      title: "Products",
    },
    articles: {
      title: "THe Best Articles",
    },
  },
};

export default config;
