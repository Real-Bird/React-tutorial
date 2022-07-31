import React, { useCallback, useRef, useState } from "react";
import Categories from "./Categories";
import NewsList from "./NewsList";

const NewsViewer = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <div>
      <h1>News viewer</h1>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </div>
  );
};

export default NewsViewer;
