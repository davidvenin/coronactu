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
      <div className={""}>
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          <span className={"block text-sm font-medium text-gray-700"}>
            {label}
          </span>
          <Field
            autoComplete="off"
            onChange={onChange}
            value={value}
            type="text"
            name={name}
            className={
              "mb-10 block w-full px-3 py-2 border border-gray-30 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border"
            }
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
