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
      <nav>
        <span onClick={() => setTab("")}>Tous</span>
        {filters.values.map((filter) => (
          <span key={filter} onClick={() => setTab(filter)}>
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
