import { useAnswersState } from "@yext/answers-headless-react";
import React from "react";
import config from "../answers.config";
import Container from "../components/Container";
import DirectAnswer from "../components/DirectAnswer";
import SearchBar from "../components/SearchBar";
import VerticalResults from "../components/VerticalResults";

const DefaultVerticalPage = () => {
  const results = useAnswersState((state) => state.vertical.results);
  const verticalKey = useAnswersState((state) => state.vertical.key);

  if (!verticalKey) return null;

  const verticalConfig = config.verticals[verticalKey];
  const title = verticalConfig?.title;
  const Card = verticalConfig?.card ?? config.defaults.card;

  return (
    <Container narrow>
      <SearchBar />
      <DirectAnswer />
      <VerticalResults />

      {/* {results && results.verticalResults?.results.length === 0 && (
        <NoResults />
      )} */}
    </Container>
  );
};

export default DefaultVerticalPage;
