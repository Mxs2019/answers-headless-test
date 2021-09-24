export type AnswersConfig = {
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
  verticals: {
    [verticalKey: string]: {
      card?: any;
      section?: any;
      title?: string;
      page?: any;
    };
  };
};

export type ResultCardProps = {
  result: {
    id: string;
    name: string;
  };
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
