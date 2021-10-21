import { Result } from "@yext/answers-core";
import config from "../answers.config";

export const getFieldValues = (
  result: Result,
  verticalKey: string
): {
  id: string;
  title?: React.ReactNode;
  body?: React.ReactNode;
  url?: string;
} => {
  const verticalConfig = config.verticals[verticalKey];
  const { cardFields } = verticalConfig;

  //   Set Default Fields
  let id = result.id as string;
  let title: React.ReactNode = result.name;
  let body = (result.rawData?.s_snippet ??
    result.rawData?.body) as React.ReactNode;
  let url = (result.rawData?.website as string) ?? "#";

  if (cardFields?.title) {
    title = result.rawData[cardFields?.title] as string;
  }

  if (cardFields?.body) {
    body = result.rawData[cardFields?.body] as string;
  }

  if (cardFields?.url) {
    url = result.rawData[cardFields?.url] as string;
  }

  return {
    id,
    title,
    body,
    url,
  };
};
