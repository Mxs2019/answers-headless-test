import { AnswersActionsProvider } from "@yext/answers-headless-react";
import classnames from "classnames";
import React, { useContext, useEffect } from "react";
import { QueryParamProvider } from "use-query-params";
import Container from "./components/Container";
import SearchBar from "./components/SearchBar";
import UniversalResults from "./components/UniversalResults";
import { ConfigContext } from "./utilities/configContext";

type Props = {
  //Insert Props Here
  className?: string;
  setVerticalKeys?: (keys: string[]) => void;
};

const Answers = ({ className, setVerticalKeys }: Props) => {
  const config = useContext(ConfigContext);
  useEffect(() => {
    if (config.style?.colors?.brand) {
      document.documentElement.style.setProperty(
        "--brand",
        config.style?.colors?.brand
      );
    }
  }, [config.style?.colors?.brand]);
  return (
    <div className={classnames(className, "w-full mx-auto")}>
      <QueryParamProvider>
        <AnswersActionsProvider {...config.providerConfig}>
          <Container>
            <SearchBar />
            <UniversalResults setVerticalKeys={setVerticalKeys} />
          </Container>
        </AnswersActionsProvider>
      </QueryParamProvider>
    </div>
  );
};

export default Answers;
