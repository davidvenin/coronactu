import React, { FunctionComponent } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface Props {
  country: string;
  date: Date;
}

export const Heading: FunctionComponent<Props> = ({ country, date }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="p-8 border-2 rounded-1 rounded-full">
        <strong className="block text-12">{country}</strong>
      </div>
      <span className={"block text-12 text-gray-70"}>
        Mise à jour le{" "}
        {format(new Date(date), "P", {
          locale: fr,
        })}
      </span>
    </div>
  );
};
