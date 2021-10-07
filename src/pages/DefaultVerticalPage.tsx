import { useAnswersState } from "@yext/answers-headless-react";
import React from "react";
import config from "../answers.config";
import ContainerWithSearchAndNav from "../components/ContainerWithSearchAndNav";

const DefaultVerticalPage = () => {
  const results = useAnswersState((state) => state.vertical.results);
  const verticalKey = useAnswersState((state) => state.vertical.key);

  if (!verticalKey) return null;

  const verticalConfig = config.verticals[verticalKey];
  const title = verticalConfig?.title;
  const Card = verticalConfig?.card ?? config.defaults.card;

  return (
    <ContainerWithSearchAndNav>
      <div>
        {results?.verticalResults?.results?.map((r) => (
          <Card result={r} key={r.id} />
        ))}
      </div>
      {/* {results && results.verticalResults?.results.length === 0 && (
        <NoResults />
      )} */}
    </ContainerWithSearchAndNav>
  );
};

export default DefaultVerticalPage;
