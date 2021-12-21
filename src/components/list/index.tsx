import React, { FunctionComponent } from "react";
import { Card } from "../card";
import { Included } from "../../models/restriction";

interface Props {
  collection: Included[];
}

export const List: FunctionComponent<Props> = ({ collection }: Props) => {
  if (collection.length === 0) {
    return <div>Aucun élément n&apos;a été trouvé</div>;
  }

  return (
    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20"}>
      {collection.map((item) => (
        <Card key={item.id} restriction={item} />
      ))}
    </div>
  );
};
