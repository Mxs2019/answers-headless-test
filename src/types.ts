import { Result } from "@yext/answers-core";
import React from "react";

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
      card?: string;
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
