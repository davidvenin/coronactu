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
            label={"Départ"}
            name={"from"}
          />
          <AsyncInputField
            config={config.getFieldProps("to")}
            label={"Arrivée"}
            name={"to"}
          />
          <button
            type={"submit"}
            className={"w-full bg-primary p-5 rounded-sm text-white"}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
