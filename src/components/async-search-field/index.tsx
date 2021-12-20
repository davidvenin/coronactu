import React, { ChangeEvent } from "react";
import { Field, FormikHandlers } from "formik";
import { Country } from "../../models/countries";

interface ComponentProps {
  label: string;
  name: string;
  results?: Country[];
  onChange: (
    e: ChangeEvent<HTMLInputElement>
  ) => void | FormikHandlers["handleChange"];
}

export const AsyncInputField = (props: ComponentProps) => {
  console.info(props.results && Object.entries(props.results));
  return (
    <div className="">
      <div className={""}>
        <label
          htmlFor={props.name}
          className="block text-sm font-medium text-gray-700"
        >
          <span className={"block text-sm font-medium text-gray-700"}>
            {props.label}
          </span>
          <Field
            onChange={props.onChange}
            type="text"
            name={props.name}
            className={
              "mb-10 block w-full px-3 py-2 border border-gray-30 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border"
            }
          />
        </label>
      </div>
      {props.results && (
        <>
          {props.results &&
            Object.entries(props.results).map((country) => (
              <div key={country[0]}>
                <span>{country[0]}</span>
                <span>{country[1].country}</span>
              </div>
            ))}
        </>
      )}
    </div>
  );
};
