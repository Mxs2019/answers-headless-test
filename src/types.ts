import { Result } from "@yext/answers-core";

export type AnswersConfig = {
  style: {
    colors: {
      brand: string;
    };
  };
  providerConfig: {
    apiKey: string;
    experienceKey: string;
    locale: string;
  };
  verticals: {
    [verticalKey: string]: {
      section?: string;
      title?: string;
      cardFields?: {
        title?: string;
        body?: string;
        url?: string;
      };
    };
  };
};

export type SectionProps = {
  //Insert Props Here
  title: string;
  results: Result[];
  verticalKey: string;
};
