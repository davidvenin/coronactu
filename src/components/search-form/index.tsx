import React, { useState } from "react";
import { Form, Formik, FormikValues } from "formik";

import { AsyncInputField } from "../async-search-field";
import { api } from "../../constants/api-routes";
import { useRequest } from "../../helpers/use-request";
import { Country } from "../../models/countries";

interface CountryPayload {
  data: Country[];
}

export const SearchForm = () => {
  const [query, setQuery] = useState<{ from?: string; to?: string } | null>(
    null
  );
  // conditional fetch countries
  const { data: fromData } = useRequest<CountryPayload>({
    method: "GET",
    url: api.countries_api(query?.from),
  });

  const { data: toData } = useRequest<CountryPayload>({
    method: "GET",
    url: api.countries_api(query?.to),
  });

  const handleSubmit = (values: FormikValues) => {
    // make async call to ulysse api with both country code
    console.info(values);
  };

  return (
    <Formik
      initialValues={{
        from: "",
        to: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form
          className={
            "pt-30 px-30 pb-30 md:pb-15 rounded-5 shadow border border-dark-10"
          }
        >
          <AsyncInputField
            label={"Départ"}
            name={"from"}
            results={fromData?.data}
            onChange={(event) => {
              setFieldValue("from", event.currentTarget.value, false);
              setQuery({ ...query, from: event.currentTarget.value });
            }}
          />
          <AsyncInputField
            label={"Arrivée"}
            name={"to"}
            results={toData?.data}
            onChange={(event) => {
              setFieldValue("to", event.currentTarget.value, false);
              setQuery({ ...query, to: event.currentTarget.value });
            }}
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
