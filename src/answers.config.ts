import DefaultCard from "./cards/DefaultCard";
import ProductCard from "./cards/ProductCard";
import PromoCard from "./cards/PromoCard";
import { AnswersConfig } from "./types";
import DefaultSection from "./universalSections/DefaultSection";
import GridSection from "./universalSections/GridSection";
import DefaultVerticalPage from "./verticalPages/DefaultVerticalPage";
import GridPage from "./verticalPages/GridPage";

const config: AnswersConfig = {
  providerConfig: {
    apiKey: "ea21c38eeab10bca5be1fd56c5fb96e5",
    experienceKey: "answers",
    locale: "en",
  },
  defaults: {
    card: DefaultCard,
    section: DefaultSection,
    page: DefaultVerticalPage,
  },
  verticals: {
    promos: {
      card: PromoCard,
      title: "Promotions",
    },
    products: {
      section: GridSection,
      card: ProductCard,
      page: GridPage,
      title: "Products",
    },
    articles: {
      title: "THe Best Articles",
    },
  },
};

export default config;
