import type { NextPage } from "next";
import { SearchForm } from "../components/search-form";
import { Layout } from "../layouts";
import { useState } from "react";
import { FormikValues } from "formik";
import { useRequest } from "../helpers/use-request";
import { api } from "../constants/api-routes";
import { RestrictionsPayload } from "../models/restriction";
import { Card } from "../components/card";

const Home: NextPage = () => {
  const [countries, setCountries] = useState<FormikValues | null>(null);
  const { data } = useRequest<RestrictionsPayload>(
    countries
      ? {
          url: api.restrictions(countries.from.code, countries.to.code),
        }
      : null
  );
  console.info(data);
  return (
    <Layout title={"Restrictions"}>
      <SearchForm setCountries={setCountries} />
      {data?.included && (
        <>
          {data.included.map((restriction) => (
            <Card key={restriction.id} restriction={restriction} />
          ))}
        </>
      )}
    </Layout>
  );
};

export default Home;
