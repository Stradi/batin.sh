import React from "react";
import { Link } from "gatsby";

import { ArticleType } from "../../types";
import { GatsbyImage } from "gatsby-plugin-image";

interface SingleArticleProps {
  article?: ArticleType;
}

SingleArticle.defaultProps = {
  article: {
    title: "Article Name",
    url: "/article-name",
    author: "John Doe",
    tags: ["tag-a", "tag-b", "tag-d"],
    datePublished: new Date()
  }
}

function SingleArticle(props: SingleArticleProps) {
  return (
    <Link to={ props.article.url } className="relative group transition duration-100 hover:-translate-y-1">
      <span className="absolute top-3 left-3 right-3 z-10 text-xl font-bold text-white line-clamp-2 transition duration-100">{ props.article.title }</span>
      {
        (props.article.image && props.article.image.data) ?
        <GatsbyImage image={ props.article.image.data } className="rounded-md brightness-75 transition duration-100 group-hover:brightness-50" alt={ props.article.title } /> : 
        <img src="https://via.placeholder.com/400" className="w-full inline rounded-md brightness-75 transition duration-100 group-hover:brightness-50"/>
      }
      <div className="absolute bottom-0 left-3 right-3 opacity-0 transition duration-100 group-hover:opacity-100 group-hover:-translate-y-4">
        <span className="line-clamp-3 md:line-clamp-4 text-white">{ props.article.description }</span>
      </div>
    </Link>
  )
}

export {
  SingleArticle,
  type SingleArticleProps
};