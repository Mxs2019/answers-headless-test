import React from "react";
import { Helmet } from "react-helmet";
import config from "../answers.config";
import ContainerWithSearchAndNav from "../components/ContainerWithSearchAndNav";
import UniversalResults from "../components/UniversalResults";

type Props = {
  //Insert Props Here
  className?: string;
};

const UniversalSearch = ({ className }: Props) => {
  return (
    <>
      <Helmet>
        <title>Search Results | {config.universal.title ?? "All"}</title>
      </Helmet>
      <ContainerWithSearchAndNav>
        <UniversalResults />
      </ContainerWithSearchAndNav>
    </>
  );
};

export default UniversalSearch;
