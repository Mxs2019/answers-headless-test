import { useAnswersState } from "@yext/answers-headless-react";
import classnames from "classnames";
import React, { useContext, useEffect } from "react";
import Cards from "../cards";
import DefaultCard from "../cards/DefaultCard";
import Sections from "../universalSections";
import DefaultSection from "../universalSections/DefaultSection";
import { ConfigContext } from "../utilities/configContext";
import NoResults from "./NoResults";

type Props = {
  //Insert Props Here
  className?: string;
  setVerticalKeys?: (keys: string[]) => void;
};

const UniversalResults = ({ className, setVerticalKeys }: Props) => {
  const config = useContext(ConfigContext);
  const results = useAnswersState((state) => state.universal.results);
  const verticalKeys =
    results?.verticalResults?.map((v) => v.verticalKey) ?? [];

  useEffect(() => {
    if (setVerticalKeys) {
      setVerticalKeys(verticalKeys);
    }
  }, [verticalKeys.join(", "), setVerticalKeys]);
  return (
    <div className={classnames(className, "flex flex-col gap-8")}>
      {results?.verticalResults.map((v) => {
        // return <div>{v.verticalKey}</div>;
        const verticalConfig = config.verticals[v.verticalKey];
        const title = verticalConfig?.title;
        let Card = DefaultCard;
        let Section = DefaultSection;

        // Override Vertical
        if (verticalConfig) {
          if (verticalConfig.card && Cards[verticalConfig.card]) {
            Card = Cards[verticalConfig.card].card;
          }
        }

        if (verticalConfig) {
          if (verticalConfig.section && Sections[verticalConfig.section]) {
            Section = Sections[verticalConfig.section].section;
          }
        }

        return (
          <div key={v.verticalKey + results.uuid}>
            <Section title={title && title?.length > 0 ? title : v.verticalKey}>
              {v.results.map((r) => (
                <Card result={r} key={r.id} verticalKey={v.verticalKey} />
              ))}
            </Section>
          </div>
        );
      })}
      {results?.verticalResults.length === 0 && <NoResults />}
    </div>
  );
};

export default UniversalResults;
