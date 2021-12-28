import React, { FunctionComponent, useState } from "react";
import { Form, Formik, FormikValues } from "formik";

import { AsyncInputField } from "../async-search-field";
import { api } from "../../constants/api-routes";
import { useRequest } from "../../hooks/use-request";
import { CountryPayload } from "../../models/country";

interface Props {
  setCountries: (values: FormikValues) => void;
  isLoading: boolean;
}

export const SearchForm: FunctionComponent<Props> = ({
  setCountries,
  isLoading,
}: Props) => {
  const [query, setQuery] = useState<{ from?: string; to?: string } | null>(
    null
  );

  const { data: fromData } = useRequest<CountryPayload>(
    query?.from
      ? {
          method: "GET",
          url: api.countries_api(query?.from),
        }
      : null
  );

  const { data: toData } = useRequest<CountryPayload>(
    query?.to
      ? {
          method: "GET",
          url: api.countries_api(query?.to),
        }
      : null
  );
  return (
    <Formik
      initialValues={{
        from: {
          code: "",
          country: "",
        },
        to: {
          code: "",
          country: "",
        },
      }}
      onSubmit={(values) => setCountries(values)}
    >
      {({ setFieldValue, values }) => (
        <Form className="p-10 shadow-high bg-gray-light rounded-5 py-10 rounded-tl-none grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
          <AsyncInputField
            label="Départ"
            placeholder="Ex: France"
            setCountry={(e) => {
              setFieldValue("from", e);
              setQuery({ ...query, from: "" });
            }}
            value={values.from.country}
            name="from"
            results={fromData?.data}
            onChange={(event) => {
              setFieldValue("from.country", event.currentTarget.value, false);
              setQuery({ ...query, from: event.currentTarget.value });
            }}
          />
          <AsyncInputField
            label="Arrivée"
            placeholder="Ex: Japan"
            value={values.to.country}
            setCountry={(e) => {
              setFieldValue("to", e);
              setQuery({ ...query, to: "" });
            }}
            name="to"
            results={toData?.data}
            onChange={(event) => {
              setFieldValue("to.country", event.currentTarget.value, false);
              setQuery({ ...query, to: event.currentTarget.value });
            }}
          />

          <div className="md:col-start-1 md:col-end-3 lg:col-start-3 lg:col-end-3">
            <button
              type="submit"
              disabled={!values.to.code || !values.from.code}
              className="block bg-black hover:bg-gray w-full p-5 rounded-full shadow-thin text-white p-15 transition ease-in duration-100 disabled:opacity-75 disabled:cursor-not-allowed font-semibold"
            >
              {isLoading ? <>Chargement en cours...</> : null}
              {!isLoading ? <>Rechercher</> : null}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
