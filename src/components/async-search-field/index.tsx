import React, { ChangeEvent, FunctionComponent } from "react";
import { Field, FormikHandlers } from "formik";
import { Country } from "../../models/country";
import { instanceOf } from "prop-types";

interface Options {
  code: string;
  country: string;
}

interface ComponentProps {
  label: string;
  name: string;
  results?: Country | [];
  value: string;
  setCountry: (arg: Options) => void;
  placeholder: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement>
  ) => void | FormikHandlers["handleChange"];
}

export const AsyncInputField: FunctionComponent<ComponentProps> = ({
  label,
  name,
  results,
  value = "",
  placeholder,
  setCountry,
  onChange,
}: ComponentProps) => {
  return (
    <div className="relative">
      <div className="bg-white shadow rounded-r-none shadow-text rounded-5 justify-center hover:cursor-text h-54">
        <label htmlFor={name} className="block text-gray-700 p-5">
          <span
            className={"block text-12 font-semibold uppercase text-gray-700"}
          >
            {label}
          </span>
          <Field
            id={name}
            placeholder={placeholder}
            autoComplete="off"
            onChange={onChange}
            value={value}
            type="text"
            name={name}
            className={"w-full text-16 md:text-14 focus:outline-0"}
          />
        </label>
      </div>
      <div className={"absolute w-full bg-white z-10 shadow-lg"}>
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
    </div>
  );
};
