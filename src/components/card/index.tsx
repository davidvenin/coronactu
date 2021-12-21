import React, { FunctionComponent } from "react";
import { Included } from "../../models/restriction";

interface Props {
  restriction: Included;
}

export const Card: FunctionComponent<Props> = ({ restriction }: Props) => {
  return (
    <div className="shadow-high bg-gray-light rounded-5 py-10 rounded-tl-none pb-30 pt-30 pl-20 pr-20">
      <div className={"flex items-center mb-20"}>
        <strong className="text-12">{restriction.attributes.country}</strong>
        <h3 className="ml-16 font-semibold ml-5">
          {restriction.attributes.title}
        </h3>
      </div>
      {restriction.attributes.description && (
        <p className="text-14">{restriction.attributes.description}</p>
      )}
      {restriction.attributes.more && <p>{restriction.attributes.more}</p>}
      <div>
        <h4>Source</h4>
        <a
          href={restriction.attributes.source.url}
          target="_blank"
          rel="noreferrer"
          className="text-12 text-red hover:text-dark"
        >
          {restriction.attributes.source.title}
        </a>
      </div>
    </div>
  );
};
