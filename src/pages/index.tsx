import type { NextPage } from "next";
import { SearchForm } from "../components/search-form";
import { Layout } from "../layouts";
import { useEffect, useState } from "react";
import { FormikValues } from "formik";
import { useRequest } from "../hooks/use-request";
import { api } from "../constants/api-routes";
import { RestrictionsPayload } from "../models/restriction";
import { List } from "../components/list";

const Home: NextPage = () => {
  const [countries, setCountries] = useState<FormikValues | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const { data, error } = useRequest<RestrictionsPayload>(
    countries
      ? {
          url: api.restrictions(countries.from.code, countries.to.code),
        }
      : null
  );

  useEffect(() => {
    if (data || error) setLoading(false);
  }, [data, error]);

  return (
    <Layout title={"Coronactu"}>
      <p className="m-20 text-center font-semibold text-18">
        Toutes les informations dont vous avez besoin pour voyager sereinement.
      </p>
      <SearchForm
        setCountries={(c) => {
          setLoading(true);
          setCountries(c);
        }}
        isLoading={isLoading}
      />
      <div className={"mt-40"}>
        {data?.included ? <List collection={data.included} /> : null}
      </div>
    </Layout>
  );
};

export default Home;
