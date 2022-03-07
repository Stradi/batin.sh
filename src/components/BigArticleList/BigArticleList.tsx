import React, { useEffect, useState } from "react";

import { Container } from "../Container";
import { SingleArticle } from "./SingleArticle";

import { ArticleType } from "../../types";

interface BigArticleListProps {
  title?: string;
  articles?: ArticleType[];
  sort?: boolean;
  addFilters?: boolean;
}

BigArticleList.defaultProps = {
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
  sort: true,
  addFilters: false
}

function BigArticleList(props: BigArticleListProps) {
  const articlesDOM = Object.keys(props.articles).length > 0 ? (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {
        props.articles.map(post => <SingleArticle article={ post } />)
      }
    </div>
  ) : (
    <div className="text-3xl text-center font-display font-bold">No results found :(</div>
  )

  return (
    <Container>
      <h2 className="text-2xl font-bold mb-4 bg-background text-on-surface">{ props.title }</h2>
      { articlesDOM }
    </Container>
  )
}

export {
  BigArticleList,
  type BigArticleListProps
};