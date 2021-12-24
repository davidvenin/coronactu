import React, { ChangeEvent, FunctionComponent } from "react";
import { Field, FormikHandlers } from "formik";
import { Country, Options } from "../../models/country";
import { Suggestion } from "../suggestion";

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
      <Suggestion setCountry={setCountry} results={results} />
    </div>
  );
};
