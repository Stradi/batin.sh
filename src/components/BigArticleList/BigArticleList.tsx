import { Link } from "gatsby";
import React from "react";
import { Container } from "../Container";
import { SingleBigArticle } from "./SingleBigArticle";

type ArticleType = {
  title?: string;
  url?: string;
  thumbnailUrl?: string;
  author?: string;
  excerpt?: string;
}

type TitleButtonType = {
  text?: string;
  url?: string;
}

interface BigArticleListProps {
  title?: string;
  articles?: ArticleType[];
  titleButton?: TitleButtonType;
}

BigArticleList.defaultProps = {
  title: "Articles",
  articles: [{
    title: "Normal Article Name",
    url: "/article-a",
    thumbnailUrl: "https://via.placeholder.com/300",
    author: "Jane Doe",
    excerpt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo facilis at amet et corrupti? Suscipit perspiciatis, ullam nobis excepturi a veniam odit repudiandae quo quos quisquam dolore alias impedit laudantium cum id debitis provident, quia deserunt. Qui, harum. Deleniti beatae laborum numquam architecto error accusamus vero, libero similique. Dolor, itaque."
  }, {
    title: "Very Very Very Long Article Name",
    url: "/article-b",
    thumbnailUrl: "https://via.placeholder.com/300",
    author: "Jane Doe",
    excerpt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo facilis at amet et corrupti? Suscipit perspiciatis, ullam nobis excepturi a veniam odit repudiandae quo quos quisquam dolore alias impedit laudantium cum id debitis provident, quia deserunt. Qui, harum. Deleniti beatae laborum numquam architecto error accusamus vero, libero similique. Dolor, itaque."
  }, {
    title: "Article Name",
    url: "/article-c",
    thumbnailUrl: "https://via.placeholder.com/300",
    author: "Jane Doe",
    excerpt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo facilis at amet et corrupti? Suscipit perspiciatis, ullam nobis excepturi a veniam odit repudiandae quo quos quisquam dolore alias impedit laudantium cum id debitis provident, quia deserunt. Qui, harum. Deleniti beatae laborum numquam architecto error accusamus vero, libero similique. Dolor, itaque."
  }],
  titleButton: undefined
}

function BigArticleList(props: BigArticleListProps) {
  return (
    <Container>
      <div className="flex justify-between items-center">
        <h2 className="text-5xl ml-4 font-bold">{ props.title }</h2>
        {
          props.titleButton && 
          <Link to={ props.titleButton.url}>
            <div className="group text-lg mr-4 bg-gray-200 rounded-xl px-4 py-2 transition hover:bg-gray-300 hover:translate-x-2">
              { props.titleButton.text }
            </div>
          </Link>
        }
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {
          props.articles.map(article => (
            <SingleBigArticle
              title={ article.title }
              url={ article.url }
              thumbnailUrl={ article.thumbnailUrl }
              author={ article.author }
              excerpt={ article.excerpt }
              key={ article.url } />
          ))
        }
      </div>
    </Container>
  )
}

export {
  BigArticleList,
  type BigArticleListProps
}