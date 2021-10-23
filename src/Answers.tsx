import { AnswersActionsProvider } from "@yext/answers-headless-react";
import classnames from "classnames";
import React, { useContext } from "react";
import { QueryParamProvider } from "use-query-params";
import Container from "./components/Container";
import SearchBar from "./components/SearchBar";
import ThemeWrapper from "./components/ThemeWrapper";
import UniversalResults from "./components/UniversalResults";
import { ConfigContext } from "./utilities/configContext";

type Props = {
  //Insert Props Here
  className?: string;
  setVerticalKeys?: (keys: string[]) => void;
};

const Answers = ({ className, setVerticalKeys }: Props) => {
  const config = useContext(ConfigContext);

  if (!config) return null;

  console.log(config);

  console.log("RENDERING");
  return (
    <div className={classnames(className, "w-full mx-auto")}>
      <QueryParamProvider>
        <AnswersActionsProvider {...config.providerConfig}>
          <ThemeWrapper>
            <Container>
              <SearchBar />
              <UniversalResults setVerticalKeys={setVerticalKeys} />
            </Container>
          </ThemeWrapper>
        </AnswersActionsProvider>
      </QueryParamProvider>
    </div>
  );
};

export default Answers;
