import React, { FunctionComponent } from "react";
import { Included } from "../../models/restriction";
import { useModal } from "../../hooks/use-modal";
import { Heading } from "./heading";

interface Props {
  restriction: Included;
}

export const Card: FunctionComponent<Props> = ({ restriction }: Props) => {
  const { show, RenderModal } = useModal();
  return (
    <>
      <div className="shadow-high bg-white-70 backdrop-blur-sm rounded-5 py-10 pb-30 pt-30 pl-20 pr-20 text-14 max-h-340 flex-col justify-between">
        <div>
          <div className="mb-20">
            <Heading
              country={restriction.attributes.country}
              date={restriction.attributes.lastUpdatedAt}
            />
          </div>
          <div className="">
            <h3 className="font-semibold text-16">
              {restriction.attributes.title}
            </h3>
          </div>
          <div>
            <p className="text-14 line-clamp-3">
              {restriction.attributes.description}
            </p>
          </div>
          <div className="self-end">
            <a
              href={restriction.attributes.source.url}
              target="_blank"
              rel="noreferrer"
              className="text-12 text-red hover:text-dark"
            >
              {restriction.attributes.source.title}
            </a>
            <button
              className="block border-2 border-gray rounded-full py-6 px-10 uppercase font-semibold mt-20 hover:bg-gray hover:text-white transition ease-in ml-auto"
              onClick={show}
            >
              En savoir plus
            </button>
          </div>
        </div>
      </div>
      <RenderModal>
        <>
          <div className="mb-20">
            <Heading
              country={restriction.attributes.country}
              date={restriction.attributes.lastUpdatedAt}
            />
          </div>
          <p className="text-14">{restriction.attributes.description}</p>
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
