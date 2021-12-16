import React, { useState } from "react";
import Categories from "./Categories";
import NewsList from "./NewsList";

const News = () => {
  const [category, setCategory] = useState("all");
  return (
    <>
      <Categories category={category} onSelect={setCategory}></Categories>
      <NewsList category={category}></NewsList>
    </>
  );
};

export default News;
