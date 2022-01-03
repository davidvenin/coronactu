import React, { FunctionComponent, useState } from "react";
import { Included } from "../../models/restriction";
import { FilterList } from "../filter-list";

interface Props {
  collection: Included[];
  filters: { objectKey: keyof Included; values: string[] };
}

export const FilterTab: FunctionComponent<Props> = ({
  filters,
  collection,
}: Props) => {
  const [tab, setTab] = useState<string>("");
  return (
    <div>
      <nav className="flex mb-20 shadow-thin bg-gray-light rounded-5 rounded-b-none font-semibold text-14">
        <span
          className={`block px-15 py-10 cursor-pointer ${
            tab === "" && "bg-gray text-white"
          }`}
          onClick={() => setTab("")}
        >
          TOUS
        </span>
        {filters.values.map((filter) => (
          <span
            className={`block px-15 py-10 cursor-pointer ${
              tab === filter && "bg-gray text-white"
            }`}
            key={filter}
            onClick={() => setTab(filter)}
          >
            {filter}
          </span>
        ))}
      </nav>
      <FilterList
        collection={collection}
        objectKeyToFilter={filters.objectKey}
        activeFilter={tab}
      />
    </div>
  );
};
