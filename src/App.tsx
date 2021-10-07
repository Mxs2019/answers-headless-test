import { AnswersActionsProvider } from "@yext/answers-headless-react";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import config from "./answers.config";
import UniversalSearch from "./pages/UniversalSearch";

const VerticalPage = () => {
  const { verticalKey } = useParams() as any;
  const verticalConfig = config.verticals[verticalKey];
  const VerticalPage = verticalConfig?.page ?? config.defaults?.page;

  if (!verticalKey) return <div></div>;
  return (
    <div key={verticalKey}>
      <AnswersActionsProvider
        {...config.providerConfig}
        verticalKey={verticalKey}
      >
        <VerticalPage />
      </AnswersActionsProvider>
    </div>
  );
};

const UniversalPage = () => {
  return (
    <AnswersActionsProvider {...config.providerConfig}>
      <UniversalSearch />
    </AnswersActionsProvider>
  );
};
function App() {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <div>
          <Switch>
            <Route path="/" exact>
              <UniversalPage />
            </Route>
            <Route path="/:verticalKey">
              <VerticalPage />
            </Route>
          </Switch>
        </div>
      </QueryParamProvider>
    </Router>
  );
}

export default App;
