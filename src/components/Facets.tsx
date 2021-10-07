import { DisplayableFacet } from "@yext/answers-core";
import {
  useAnswersActions,
  useAnswersState,
} from "@yext/answers-headless-react";
import classnames from "classnames";
import React, { useState } from "react";

type Props = {
  //Insert Props Here
  className?: string;
};

const Facet = ({ f }: { f: DisplayableFacet }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const options = f.options.filter((_, i) => i < 10);
  const actions = useAnswersActions();
  const facetOptions = actions.searchThroughFacet(f, searchTerm).options;

  return (
    <div>
      <div className="uppercase tracking-wider text-sm text-gray-500">
        {f.displayName}
      </div>

      <input
        value={searchTerm}
        className="border px-2 w-full rounded-sm mb-1 py-1"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          actions.searchThroughFacet(f, e.target.value);
        }}
      />
      <div>
        {facetOptions.map((o) => (
          <label className="flex items-center gap-2" key={o.displayName}>
            <input
              type="checkbox"
              onChange={(v) => actions.selectFacetOption(f.fieldId, o)}
              checked={o.selected}
            />
            <div>{o.displayName}</div>
            <div className="text-xs text-gray-500 bg-gray-200 font-semibold rounded-md px-1">
              {o.count}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

const Facets = ({ className }: Props) => {
  const facets = useAnswersState((state) => state.vertical.results?.facets);
  const actions = useAnswersActions();

  return (
    <div className={classnames(className)}>
      <div className="flex flex-col gap-4 mt-4">
        {facets
          ?.filter((f) => f.options?.length > 0)
          .map((f) => (
            <Facet key={f.fieldId} f={f} />
          ))}
      </div>
    </div>
  );
};

export default Facets;
