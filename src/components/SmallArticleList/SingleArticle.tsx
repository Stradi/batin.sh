import { Link } from "gatsby";
import React from "react";

import { ArticleType } from "../../types";
import { DateUtils } from "../../utils";

interface SingleArticleProps {
  article?: ArticleType;
}

SingleArticle.defaultProps = {
  article: {
    title: "Article Name",
    url: "/article-name",
    author: "John Doe",
    tags: ["tag-a", "tag-b", "tag-d"],
    datePublished: new Date(),
  },
};

function SingleArticle(props: SingleArticleProps) {
  return (
    <Link
      to={props.article.url}
      className="relative my-2 px-6 py-3 w-full bg-gray rounded-md flex md:flex-row flex-col justify-between transition duration-100 group hover:translate-x-1 hover:bg-primary hover:text-on-primary"
    >
      <span className="absolute -left-4 opacity-0 font-bold transition duration-100 text-primary group-hover:opacity-100">
        &gt;{" "}
      </span>
      <span className="text-xl font-semibold truncate">
        {props.article.title}
      </span>
      <span className="text-xl">
        {DateUtils.toReadableFullDate(props.article.datePublished)}
      </span>
    </Link>
  );
}

export { SingleArticle, type SingleArticleProps };
