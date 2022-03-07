import React, { useEffect, useState } from "react";

import { Container } from "../Container";
import { SingleArticle } from "./SingleArticle";

import { ArticleType } from "../../types";

interface SmallArticleListProps {
  title?: string;
  articles?: ArticleType[];
  sort?: boolean;
  addFilters?: boolean;
}

SmallArticleList.defaultProps = {
  title: "Articles",
  articles: [{
    title: "Normal Article Name",
    url: "/normal-article-name",
    datePublished: new Date(2015, 11, 15, 11, 30)
  }, {
    title: "Very Long Long Long Article Name",
    url: "/very-long-long-long-article-name",
    datePublished: new Date(2020, 11, 22, 12, 15)
  }, {
    title: "Very Long Long Article Name",
    url: "/very-long-long-article-name",
    datePublished: new Date(2020, 11, 29, 12, 15)
  }],
  sort: true,
  addFilters: false
}

function SmallArticleList(props: SmallArticleListProps) {
  const articlesDOM = Object.keys(props.articles).length > 0 ? (
    <div>
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
  SmallArticleList,
  type SmallArticleListProps
};