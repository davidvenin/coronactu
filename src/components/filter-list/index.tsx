import React, { FunctionComponent } from "react";
import { Card } from "../card";
import { Included } from "../../models/restriction";

interface Props {
  collection: Included[];
  objectKeyToFilter: keyof Included;
  activeFilter: string;
}

export const FilterList: FunctionComponent<Props> = ({
  collection,
  activeFilter,
  objectKeyToFilter,
}: Props) => {
  if (collection.length === 0) {
    return <div>Aucun élément n&apos;a été trouvé</div>;
  }

  return (
    <div>
      <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20"}>
        {activeFilter === ""
          ? collection.map((item) => <Card key={item.id} restriction={item} />)
          : collection
              .filter((col) => col[objectKeyToFilter] === activeFilter)
              .map((item) => <Card key={item.id} restriction={item} />)}
      </div>
    </div>
  );
};
