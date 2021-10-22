import { Result } from "@yext/answers-core";
import React from "react";

export type AnswersConfig = {
  style?: {
    colors?: {
      brand?: string;
    };
  };
  providerConfig: {
    apiKey: string;
    experienceKey: string;
    locale: string;
  };
  defaults: {
    card: any;
    section: any;
    page: any;
  };
  universal: {
    path?: string;
    title?: string;
  };
  verticals: {
    [verticalKey: string]: {
      card?: any;
      section?: any;
      title?: string;
      page?: any;
      cardFields?: {
        title?: string;
        body?: string;
        url?: string;
      };
    };
  };
};

export type ResultCardProps = {
  result: Result;
  verticalKey: string;
};

export type VerticalPageProps = {
  //Insert Props Here
  children: React.ReactNode;
};

export type SectionProps = {
  //Insert Props Here
  children: React.ReactNode;
  title: string;
};
