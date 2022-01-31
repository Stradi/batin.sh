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
    <div>
      <Link to={ props.article.url }>
        <div className="flex justify-between mx-2 p-4 transition hover:bg-gray-200 hover:underline">
          <p>{ props.article.title }</p>
          <span>{ DateUtils.toShortDate(props.article.datePublished) }</span>
        </div>
      </Link>
    </div>
  )
}

export {
  SingleArticle,
  type SingleArticleProps
};