import Cards from "./cards";
import Pages from "./pages";
import { AnswersConfig } from "./types";
import Sections from "./universalSections";

const config: AnswersConfig = {
  providerConfig: {
    apiKey: "ea21c38eeab10bca5be1fd56c5fb96e5",
    experienceKey: "answers",
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
