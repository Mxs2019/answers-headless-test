import {
  AnswersActionsProvider,
  useAnswersActions,
} from "@yext/answers-headless-react";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import config from "./answers.config";
import UniversalSearch from "./pages/UniversalSearch";

const VerticalPageController = ({ verticalKey }: { verticalKey: string }) => {
  const verticalConfig = config.verticals[verticalKey];
  const VerticalPage = verticalConfig?.page ?? config.defaults?.page;
  const actions = useAnswersActions();

  useEffect(() => {
    actions.setVerticalKey(verticalKey);
  }, [verticalKey]);
  return <VerticalPage />;
};

const UniversalPageController = () => {
  const actions = useAnswersActions();
  useEffect(() => {
    actions.setVerticalKey("");
  }, []);

  return <UniversalSearch />;
};

function App() {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <AnswersActionsProvider {...config.providerConfig}>
          <div>
            <Switch>
              <Route path="/" exact>
                <UniversalPageController />
              </Route>
              <Route
                path="/:verticalKey"
                render={({ match }) => {
                  const { verticalKey } = match.params;
                  return <VerticalPageController verticalKey={verticalKey} />;
                }}
              />
            </Switch>
          </div>
        </AnswersActionsProvider>
      </QueryParamProvider>
    </Router>
  );
}

export default App;
