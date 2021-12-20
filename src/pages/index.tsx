import type { NextPage } from "next";
import { SearchForm } from "../components/search-form";
import { Layout } from "../layouts";

const Home: NextPage = () => {
  return (
    <Layout title={"Restrictions"}>
      <SearchForm />
    </Layout>
  );
};

export default Home;
