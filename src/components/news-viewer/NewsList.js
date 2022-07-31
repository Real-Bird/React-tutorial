import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import usePromise from "../../libs/usePromise";
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

const imgShine = keyframes`
  0% {
    background-position: 0px 0px, 0px 0px
  }
  100% {
      background-position: 150px 0px, 0px 0px
    }

`;

const titleShine = keyframes`
  0% {
    background-position: 0px 0px, 0px 0px, 0px 35px, 0px 70px;
  }
  100% {
      background-position: 592px 0px, 0px 0px, 0px 35px, 0px 70px;
    }

`;

const contentShine = keyframes`
  0% {
    background-position: 0px 0px, 0px 0px, 0px 20px, 0px 40px, 0px 60px,
        0px 80px;
  }
  100% {
      background-position: 592px 0px, 0px 0px, 0px 20px, 0px 40px, 0px 60px,
        0px 80px;
    }

`;

const DummyBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    .dummy_thumbnail {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
      white-space: pre-wrap;
      background-image: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.5) 10%,
          rgba(255, 255, 255, 0) 20%
        ),
        linear-gradient(lightgrey 100px, transparent 0);
      background-position: 0px 0px, 0px 0px;
      background-size: 100% 110px;
      animation: ${imgShine} 1s infinite;
    }
  }
  .contents {
    .title {
      margin: 0;
      width: 300px;
      height: 110px;
      background-image: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.5) 10%,
          rgba(255, 255, 255, 0) 20%
        ),
        linear-gradient(lightgrey 30px, transparent 0),
        linear-gradient(lightgrey 30px, transparent 0),
        linear-gradient(lightgrey 30px, transparent 0);
      background-position: 0px 0px, 0px 0px, 0px 35px, 0 70px;
      background-size: 100% 110px;
      background-repeat: repeat-y;
      animation: ${titleShine} 1s infinite;
      transition: width 1s;
      @media screen and (min-width: 768px) {
        width: 592px;
      }
    }
    .content {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
      width: 300px;
      height: 140px;
      background-image: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.5) 10%,
          rgba(255, 255, 255, 0) 20%
        ),
        linear-gradient(lightgrey 15px, transparent 0),
        linear-gradient(lightgrey 15px, transparent 0),
        linear-gradient(lightgrey 15px, transparent 0),
        linear-gradient(lightgrey 15px, transparent 0),
        linear-gradient(lightgrey 15px, transparent 0);
      background-position: 0px 0px, 0px 0px, 0px 20px, 0px 40px, 0px 60px,
        0px 80px;
      background-size: 100% 100px;
      /* background-repeat: repeat-y; */
      animation: ${contentShine} 1s infinite;
      transition: width 1s;
      @media screen and (min-width: 768px) {
        width: 592px;
      }
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;
const NewsList = ({ category }) => {
  // const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const query = category === "all" ? "" : `&category=${category}`;
  //     await fetch(
  //       `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=dc5bb95e757942e9bf2e857208ff59c2`
  //     )
  //       .then((res) => res.json())
  //       .then((json) => setArticles(json.articles))
  //       .catch((e) => console.error(e));
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [category]);
  const query = category === "all" ? "" : `&category=${category}`;
  const fetchUrl = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=dc5bb95e757942e9bf2e857208ff59c2`;
  const [loading, response, error] = usePromise(fetchUrl, [category]);

  if (loading) {
    return (
      <NewsListBlock>
        {[1, 2, 3, 4, 5].map((i) => (
          <DummyBlock key={i}>
            <div className="thumbnail">
              <div className="dummy_thumbnail" />
            </div>
            <div className="contents">
              <h2 className="title"></h2>
              <div className="content"></div>
            </div>
          </DummyBlock>
        ))}
      </NewsListBlock>
    );
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }
  const { articles } = response;
  return (
    <NewsListBlock>
      {articles.map((article, i) => (
        <NewsItem key={i} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
