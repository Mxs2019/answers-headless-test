import { AnswersActionsProvider } from "@yext/answers-headless-react";
import classnames from "classnames";
import React from "react";
import config from "../answers.config";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import UniversalResults from "../components/UniversalResults";

type Props = {
  //Insert Props Here
  className?: string;
};

const UniversalSearch = ({ className }: Props) => {
  return (
    <div className={classnames(className)}>
      <AnswersActionsProvider {...config.providerConfig}>
        <div className="container mx-auto max-w-xl my-4">
          <SearchBar />
          <Nav />
          <UniversalResults />
        </div>
      </AnswersActionsProvider>
    </div>
  );
};

export default UniversalSearch;
