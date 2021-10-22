import DefaultSection from "./DefaultSection";
import GridSection from "./GridSection";
import MapSection from "./MapSection";

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
    name: "Grid",
    section: GridSection,
  },
  MAP: {
    name: "Map",
    section: MapSection,
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
