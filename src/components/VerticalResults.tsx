import { useAnswersState } from "@yext/answers-headless-react";
import React from "react";
import config from "../answers.config";

const VerticalResults = () => {
  const results = useAnswersState((state) => state.vertical.results);
  const verticalKey = useAnswersState((state) => state.vertical.key);

  if (!verticalKey) return null;

  const verticalConfig = config.verticals[verticalKey];
  const Card = verticalConfig?.card ?? config.defaults.card;

  return (
    <div>
      {results?.verticalResults?.results?.map((r) => (
        <Card result={r} key={r.id} />
      ))}
    </div>
  );
};

export default VerticalResults;
