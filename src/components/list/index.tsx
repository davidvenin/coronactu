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
    <div>
      {collection.map((item) => (
        <Card key={item.id} restriction={item} />
      ))}
    </div>
  );
};
