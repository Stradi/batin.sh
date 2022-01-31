import React from "react";

import { Container } from "../Container";
import { SingleArticle } from "./SingleArticle";

import { seperateArrayByYears } from "../../utils/DateUtils";
import { ArticleType } from "../../types";

//TODO: Add filtering and searching for blog page to show all articles.

interface ArticleListProps {
  title?: string;
  articles?: ArticleType[];
  sort?: boolean;
}

ArticleList.defaultProps = {
  title: "Articles",
  articles: [{
    title: "Normal Article Name",
    url: "/normal-article-name",
    author: "Jane Doe",
    tags: ["tag-a", "tag-b", "tag-d"],
    datePublished: new Date(2015, 11, 15, 11, 30)
  }, {
    title: "Very Long Long Long Article Name",
    url: "/very-long-long-long-article-name",
    author: "Jane Doe",
    tags: ["tag-c", "tag-d", "tag-a"],
    datePublished: new Date(2020, 11, 22, 12, 15)
  }, {
    title: "Very Long Long Article Name",
    url: "/very-long-long-article-name",
    author: "Jane Doe",
    tags: ["tag-c", "tag-b", "tag-a"],
    datePublished: new Date(2020, 11, 29, 12, 15)
  }],
  sort: true
}

function ArticleList(props: ArticleListProps) {
  if(props.sort) {
    props.articles.sort((a, b) => a.datePublished.getTime() - b.datePublished.getTime());
  }
  
  const articlesByYears = seperateArrayByYears(props.articles, "datePublished");

  return (
    <Container>
      <h2 className="mb-4 text-5xl font-bold">{ props.title }</h2>
      <div>
        {
          Object.keys(articlesByYears).reverse().map(year => (
            <div key={ year }>
              <h3 className="text-3xl font-bold">{ year }</h3>
              {
                articlesByYears[year].map(v => (
                  <SingleArticle article={ v } key={ v.title } />
                ))
              }
              </div>
          ))
        }
      </div>
    </Container>
  )
}

export {
  ArticleList,
  type ArticleListProps
};