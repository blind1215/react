import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: "제목~~~",
  description: "내용",
  url: "https://google.com",
  urlToImage: "https://via.placeholder.com/160",
};

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const params = {
        country: "kr",
        apikey: "94e30cbfcfed4f5bb0924ac8e17fb7cf",
      };
      if (category !== "all") {
        params.category = category;
      }

      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          { params }
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.error(e);
      }

      setLoading(false);
    };
    fetchData();
  }, [category]);
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  if (!articles) {
    return null;
  }
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
