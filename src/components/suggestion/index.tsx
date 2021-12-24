import React, { FunctionComponent } from "react";
import { Country, Options } from "../../models/country";

interface Props {
  results?: Country | [];
  id: string;
  setCountry: (arg: Options) => void;
}

export const Suggestion: FunctionComponent<Props> = ({
  results,
  setCountry,
  id,
}: Props) => {
  return (
    <div
      id={`${id}-results`}
      className={`absolute w-full bg-white z-10 shadow-lg ${
        results && "h-200"
      } overflow-y-auto`}
    >
      {results?.length === 0 && (
        <div className={"pb-5 pt-5 pl-5 ease-in duration-200"}>
          <span>Aucun résultat</span>
        </div>
      )}
      {results &&
        Object.entries(results).map((country) => (
          <div
            className={
              "cursor-pointer pb-5 pt-5 pl-5 hover:bg-twitter hover:text-white ease-in duration-200"
            }
            key={country[0]}
            onClick={() =>
              setCountry({
                code: country[0],
                country: country[1].country,
              })
            }
          >
            <span>{country[0]} - </span>
            <span>{country[1].country}</span>
          </div>
        ))}
    </div>
  );
};
