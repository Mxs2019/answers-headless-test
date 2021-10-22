import {
  useAnswersActions,
  useAnswersState,
} from "@yext/answers-headless-react";
import classnames from "classnames";
import React, { useEffect } from "react";
import { StringParam, useQueryParam } from "use-query-params";
import ClearSearchIcon from "./icons/ClearSearchIcon";
import SearchIcon from "./icons/SearchIcon";
import Spinner from "./icons/Spinner";

type Props = {
  //Insert Props Here
  className?: string;
};

const SearchBar = ({ className }: Props) => {
  const [queryParam, setQueryParam] = useQueryParam("query", StringParam);

  const actions = useAnswersActions();
  const query = useAnswersState((state) => state.query.query);
  const loading = useAnswersState(
    (state) => state.vertical.searchLoading ?? state.universal.searchLoading
  );
  const verticalKey = useAnswersState((state) => state.vertical?.key);

  useEffect(() => {
    if ((queryParam && queryParam.length > 0) || verticalKey) {
      if (queryParam) {
        actions.setQuery(queryParam);
      }
      runSearch();
    }
  }, []);

  const runSearch = () => {
    if (verticalKey) {
      actions.executeVerticalQuery();
    } else {
      actions.executeUniversalQuery();
    }
  };

  return (
    <div className={classnames(className)}>
      <form
        className="border rounded flex items-center focus-within:ring-2 focus-within:ring-brand py-2 pl-2 pr-4"
        onSubmit={(e) => {
          e.preventDefault();
          runSearch();
          setQueryParam(query);
        }}
      >
        <input
          className="w-full px-2 focus:outline-none bg-transparent"
          value={query ?? ""}
          onChange={(e) => actions.setQuery(e.target.value)}
          placeholder={`Search ${verticalKey ?? ""}`}
        />
        <div className="text-gray-500 flex items-center gap-4">
          {query && query.length > 0 && (
            <button
              className="focus:outline-none focus:ring-2 focus:ring-brand rounded-md focus:ring-offset-2"
              type="button"
              onClick={() => actions.setQuery("")}
            >
              <span className="sr-only">Clear Search</span>
              <ClearSearchIcon />
            </button>
          )}
          {loading && <Spinner />}
          {!loading && (
            <button className="focus:outline-none focus:ring-2 focus:ring-brand rounded-md focus:ring-offset-2">
              <span className="sr-only">Run Search</span>
              <SearchIcon />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
