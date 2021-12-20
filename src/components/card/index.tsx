import React, { FunctionComponent } from "react";
import { Included } from "../../models/restriction";

interface Props {
  restriction: Included;
}

export const Card: FunctionComponent<Props> = ({ restriction }: Props) => {
  return (
    <div>
      <strong>{restriction.attributes.country}</strong>
      <h3>{restriction.attributes.title}</h3>
      {restriction.attributes.description && (
        <p>{restriction.attributes.description}</p>
      )}
      {restriction.attributes.more && <p>{restriction.attributes.more}</p>}
      <div>
        <h4>Source</h4>
        <a
          href={restriction.attributes.source.url}
          target="_blank"
          rel="noreferrer"
        >
          {restriction.attributes.source.title}
        </a>
      </div>
    </div>
  );
};
