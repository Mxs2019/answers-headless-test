import { useAnswersState } from "@yext/answers-headless-react";
import classnames from "classnames";
import React from "react";
import config from "../answers.config";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";

const DefaultVerticalPage = () => {
  const results = useAnswersState((state) => state.vertical.results);
  const verticalKey = useAnswersState((state) => state.vertical.key);

  if (!verticalKey) return null;

  const verticalConfig = config.verticals[verticalKey];
  const title = verticalConfig?.title;
  const Card = verticalConfig?.card ?? config.defaults.card;

  return (
    <div className={classnames("container mx-auto max-w-md my-4")}>
      <SearchBar />
      <Nav />
      <div>
        {results?.verticalResults?.results?.map((r) => (
          <Card result={r} key={r.id} />
        ))}
      </div>
      {/* {results && results.verticalResults?.results.length === 0 && (
        <NoResults />
      )} */}
    </div>
  );
};

export default DefaultVerticalPage;
