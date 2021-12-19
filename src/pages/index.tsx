import type { NextPage } from "next";
import { SearchForm } from "../components/search-form";

const Home: NextPage = () => {
  return (
    <div className={"container"}>
      <SearchForm />
    </div>
  );
};

export default Home;
