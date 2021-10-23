import DefaultSection from "./DefaultSection";
import EventsSection from "./EventsSection";
import FAQSection from "./FAQSection";
import LocationsMapSection from "./LocationsMapSection";
import ProductsGrid from "./ProductsGrid";
import PromosSection from "./PromosSection";

const SectionTypesMap: {
  [key: string]: {
    name: string;
    section: any;
    description?: string;
  };
} = {
  DEFAULT: {
    name: "Basic (Default)",
    section: DefaultSection,
  },
  PROMO: {
    name: "Promos",
    section: PromosSection,
  },
  PRODUCTS: {
    name: "Products",
    section: ProductsGrid,
  },
  MAP: {
    name: "Locations with Map",
    section: LocationsMapSection,
  },
  FAQ: {
    name: "FAQ",
    section: FAQSection,
  },
  EVENTS: {
    name: "Events",
    section: EventsSection,
  },
};

export const SectionTypesArray = Object.keys(SectionTypesMap).map((key) => {
  const type = SectionTypesMap[key];
  return {
    key,
    ...type,
  };
});

export default SectionTypesMap;
