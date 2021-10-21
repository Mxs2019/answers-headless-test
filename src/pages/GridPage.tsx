import { ChevronLeftIcon } from "@heroicons/react/solid";
import { useAnswersState } from "@yext/answers-headless-react";
import classnames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import config from "../answers.config";
import Facets from "../components/Facets";
import SearchBar from "../components/SearchBar";

const GridPage = () => {
  const results = useAnswersState((state) => state.vertical.results);
  const verticalKey = useAnswersState((state) => state.vertical.key);
  if (!verticalKey) return null;

  const verticalConfig = config.verticals[verticalKey];
  const title = verticalConfig?.title;
  const Card = verticalConfig?.card ?? config.defaults.card;
  return (
    <div className={classnames("flex absolute inset-0 items-start")}>
      <div>
        <div className="w-72 p-4 flex-none min-h-screen border-r">
          <Link
            to={config.universal.path ?? "/"}
            className="flex text-xs text-gray-400 branded-focus mb-1"
          >
            <ChevronLeftIcon className="h-4 w-4" /> Back to all results
          </Link>
          <SearchBar />
          <Facets />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full p-4">
        {results?.verticalResults?.results?.map((r) => (
          <Card result={r} key={r.id} verticalKey={verticalKey} />
        ))}
      </div>
    </div>
  );
};

export default GridPage;
