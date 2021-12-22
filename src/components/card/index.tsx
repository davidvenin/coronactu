import React, { FunctionComponent } from "react";
import { format } from "date-fns";
import { Included } from "../../models/restriction";
import { useModal } from "../../hooks/use-modal";

interface Props {
  restriction: Included;
}

export const Card: FunctionComponent<Props> = ({ restriction }: Props) => {
  const { show, RenderModal } = useModal();
  return (
    <>
      <div
        onClick={show}
        className="shadow-high bg-gray-light rounded-5 py-10 rounded-tl-none pb-30 pt-30 pl-20 pr-20 text-14 max-h-300 cursor-pointer flex-col justify-between"
      >
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
            {format(
              new Date(restriction.attributes.lastUpdatedAt),
              "dd-mm-yyyy"
            )}
          </span>
        </div>
        {restriction.attributes.description && (
          <p className="text-14 line-clamp-4">
            {restriction.attributes.description}
          </p>
        )}
        <div className="flex justify-between self-end">
          <a
            href={restriction.attributes.source.url}
            target="_blank"
            rel="noreferrer"
            className="text-12 text-red hover:text-dark"
          >
            {restriction.attributes.source.title}
          </a>
          <div className="w-20 h-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <RenderModal>
        <>
          <div className={"flex items-center mb-10"}>
            <strong className="text-12">
              {restriction.attributes.country}
            </strong>
            <h3 className="ml-16 font-semibold ml-5">
              {restriction.attributes.title}
            </h3>
          </div>
          {restriction.attributes.description && (
            <p className="text-14 line-clamp-4">
              {restriction.attributes.description}
            </p>
          )}
          {restriction.attributes.more[0] && (
            <p className={"text-14 mt-20 mb-20"}>
              {restriction.attributes.more}
            </p>
          )}
          <div>
            <a
              href={restriction.attributes.source.url}
              target="_blank"
              rel="noreferrer"
              className="text-12 text-red hover:text-dark"
            >
              {restriction.attributes.source.title}
            </a>
          </div>
        </>
      </RenderModal>
    </>
  );
};
