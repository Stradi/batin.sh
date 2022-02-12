import React from "react";
import { Link } from "gatsby";

import { DateUtils } from "../../utils";
import { ArticleType } from "../../types";

interface SingleArticleProps {
  article?: ArticleType;
}

SingleArticle.defaultProps = {
  title: "Article Name",
  url: "/article-name",
  author: "John Doe",
  tags: ["tag-a", "tag-b", "tag-d"],
  datePublished: new Date()
}

function SingleArticle(props: SingleArticleProps) {
  return (
    <Link to={ props.article.url } className="my-2">
      <div className="flex justify-between transition mb-2 p-4 bg-surface hover:bg-surface-hover">
        <p>{ props.article.title }</p>
        <span>{ DateUtils.toShortDate(props.article.datePublished) }</span>
      </div>
    </Link>
  )
}

export {
  SingleArticle,
  type SingleArticleProps
};