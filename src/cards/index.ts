import { ResultCardProps } from "./../types";
import DefaultCard from "./DefaultCard";
import FAQCard from "./FAQCard";
import ProductCard from "./ProductCard";
import PromoCard from "./PromoCard";

const CardTypesMap: {
  [key: string]: {
    name: string;
    card: (props: ResultCardProps) => JSX.Element;
    description?: string;
  };
} = {
  DEFAULT: {
    name: "Link Card (Default)",
    card: DefaultCard,
  },
  PROMO: {
    name: "Promo Card",
    description: "",
    card: PromoCard,
  },
  FAQ: {
    name: "FAQ Card",
    card: FAQCard,
  },
  PRODUCT: {
    name: "Product Card",
    card: ProductCard,
  },
};

export const CardTypesArray = Object.keys(CardTypesMap).map((key) => {
  const type = CardTypesMap[key];
  return {
    key,
    ...type,
  };
});

export default CardTypesMap;
