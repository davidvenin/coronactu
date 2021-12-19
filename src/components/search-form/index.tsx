import React from "react";
import { Form, Formik } from "formik";
import { AsyncInputField } from "../async-search-field";

export const SearchForm = () => {
  return (
    <Formik
      initialValues={{
        from: "",
        to: "",
      }}
      onSubmit={(v) => console.info(v)}
    >
      {(config) => (
        <Form
          className={
            "pt-30 px-30 pb-30 md:pb-15 rounded-5 shadow border border-dark-10"
          }
        >
          <AsyncInputField
            config={config.getFieldProps("from")}
            label={"Departure"}
            name={"from"}
          />
          <AsyncInputField
            config={config.getFieldProps("to")}
            label={"Destination"}
            name={"to"}
          />
          <button
            type={"submit"}
            className={"whitespace-no-wrap w-full btn btn-red"}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
