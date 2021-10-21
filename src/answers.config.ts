import Cards from "./cards";
import Pages from "./pages";
import { AnswersConfig } from "./types";
import Sections from "./universalSections";

const config: AnswersConfig = {
  providerConfig: {
    apiKey: "4c3f0e306d81a4c238153f5f7d792b6b",
    experienceKey: "notion-experiences",
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
