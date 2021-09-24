import { SearchIcon } from "@heroicons/react/solid";
import {
  useAnswersActions,
  useAnswersState,
} from "@yext/answers-headless-react";
import classnames from "classnames";
import React, { useEffect } from "react";
import { StringParam, useQueryParam } from "use-query-params";

type Props = {
  //Insert Props Here
  className?: string;
};

const SearchBar = ({ className }: Props) => {
  const [queryParam, setQueryParam] = useQueryParam("query", StringParam);

  const actions = useAnswersActions();
  const query = useAnswersState((state) => state.query.query);
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
        className="border rounded flex focus-within:ring-2"
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
        <button>
          <SearchIcon className="h-5 w-5 text-gray-800 m-2" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
