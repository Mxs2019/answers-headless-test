import { useAnswersState } from "@yext/answers-headless-react";
import classnames from "classnames";
import React from "react";
import config from "../answers.config";

type Props = {
  //Insert Props Here
  className?: string;
};

const UniversalResults = ({ className }: Props) => {
  const results = useAnswersState((state) => state.universal.results);
  return (
    <div className={classnames(className)}>
      {results?.verticalResults.map((v) => {
        // return <div>{v.verticalKey}</div>;
        const verticalConfig = config.verticals[v.verticalKey];
        const title = verticalConfig?.title;
        const Card = verticalConfig?.card ?? config.defaults.card;
        const Section = verticalConfig?.section ?? config.defaults.section;
        if (!Card) {
          console.warn(
            `No card for vertical with key: ${v.verticalKey}. Add card to config to answers.config.ts`
          );
          return null;
        }

        if (!Section) {
          console.warn(
            `No section for vertical with key: ${v.verticalKey}. Add a section or a default section to answers.config.ts`
          );
          return null;
        }

        return (
          <div key={v.verticalKey + results.uuid}>
            <Section title={title ?? v.verticalKey}>
              {v.results.map((r) => (
                <Card result={r} key={r.id} />
              ))}
            </Section>
          </div>
        );
      })}
    </div>
  );
};

export default UniversalResults;
