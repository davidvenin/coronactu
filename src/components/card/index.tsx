import React, { FunctionComponent, useState } from "react";
import { format } from "date-fns";
import { Included } from "../../models/restriction";

interface Props {
  restriction: Included;
}

export const Card: FunctionComponent<Props> = ({ restriction }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="shadow-high bg-gray-light rounded-5 py-10 rounded-tl-none pb-30 pt-30 pl-20 pr-20 text-14 max-h-300">
      <div className={"flex items-center mb-10"}>
        <strong className="text-12">{restriction.attributes.country}</strong>
        <h3 className="ml-16 font-semibold ml-5">
          {restriction.attributes.title}
        </h3>
      </div>
      <div className={"mb-10"}>
        <span className={"block text-12 text-gray-70"}>
          Mise en vigueur :{" "}
          {format(new Date(restriction.attributes.createdAt), "dd-mm-yyyy")}
        </span>
        <span className={"block text-12 text-gray-70"}>
          Dernière mise à jour :{" "}
          {format(new Date(restriction.attributes.lastUpdatedAt), "dd-mm-yyyy")}
        </span>
      </div>
      {restriction.attributes.description && (
        <p className="text-14 line-clamp-4">
          {restriction.attributes.description}
        </p>
      )}
      {restriction.attributes.more[0] && isOpen && (
        <p>{restriction.attributes.more}</p>
      )}
      {restriction.attributes.more[0] && isOpen && (
        <p
          className={"font-semibold cursor-pointer"}
          onClick={() => setIsOpen(false)}
        >
          En voir moins
        </p>
      )}
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
