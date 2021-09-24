import { ChevronLeftIcon } from "@heroicons/react/solid";
import { useAnswersState } from "@yext/answers-headless-react";
import classnames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import config from "../answers.config";
import SearchBar from "../components/SearchBar";

const GridPage = () => {
  const results = useAnswersState((state) => state.vertical.results);
  const verticalKey = useAnswersState((state) => state.vertical.key);

  if (!verticalKey) return null;

  const verticalConfig = config.verticals[verticalKey];
  const title = verticalConfig?.title;
  const Card = verticalConfig?.card ?? config.defaults.card;
  console.log(results);
  return (
    <div className={classnames("mx-4 my-4")}>
      <div className="max-w-sm mb-4">
        <Link to="/" className="flex text-xs text-gray-400">
          <ChevronLeftIcon className="h-4 w-4" /> Back to all results
        </Link>
        <SearchBar />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
        {results?.verticalResults?.results?.map((r) => (
          <Card result={r} key={r.id} />
        ))}
      </div>
    </div>
  );
};

export default GridPage;
