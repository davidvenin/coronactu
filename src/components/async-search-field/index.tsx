import React, { ChangeEvent, FunctionComponent } from "react";
import { Field, FormikHandlers } from "formik";
import { Country } from "../../models/country";

interface Options {
  code: string;
  country: string;
}

interface ComponentProps {
  label: string;
  name: string;
  results?: Country;
  value: string;
  setCountry: (arg: Options) => void;
  onChange: (
    e: ChangeEvent<HTMLInputElement>
  ) => void | FormikHandlers["handleChange"];
}

export const AsyncInputField: FunctionComponent<ComponentProps> = ({
  label,
  name,
  results,
  value = "",
  setCountry,
  onChange,
}: ComponentProps) => {
  return (
    <div className="relative">
      <div className={"border border-black-50 rounded"}>
        <label htmlFor={name} className="block text-gray-700 p-5">
          <span
            className={"block text-12 font-semibold uppercase text-gray-700"}
          >
            {label}
          </span>
          <Field
            id={name}
            autoComplete="off"
            onChange={onChange}
            value={value}
            type="text"
            name={name}
            className={"w-full text-14 focus:outline-0"}
          />
        </label>
      </div>
      <div className={"absolute w-full bg-white z-10 shadow-lg"}>
        {results &&
          Object.entries(results).map((country) => (
            <div
              className={
                "cursor-pointer pb-5 pt-5 pl-5 hover:bg-trustpilot ease-in duration-200"
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
    </div>
  );
};
