import React from "react";
import { Link } from "gatsby";

interface SingleBigArticleProps {
  title?: string;
  url?: string;
  thumbnailUrl?: string;
  author?: string;
  excerpt?: string;
}

SingleBigArticle.defaultProps = {
  title: "Article",
  url: "/article",
  thumbnailUrl: "https://via.placeholder.com/300",
  author: "Jane Doe",
  excerpt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus provident sit dolores itaque culpa soluta omnis veniam repellendus ad obcaecati voluptatem sunt tempore quidem quia nesciunt non, magni aliquid vel modi at blanditiis et officiis eveniet. Hic, minus cum. Beatae praesentium hic odio, doloremque aut iste dignissimos debitis. Quae, esse."
}

function SingleBigArticle(props: SingleBigArticleProps) {
  const truncatedExcerpt = props.excerpt.substring(0, 150) + "...";
  return (
    <Link to={ props.url }>
      <div className="m-2 p-2 rounded-xl bg-gray-200 transition ease-out hover:-translate-y-1">
        <img src={ props.thumbnailUrl } className="rounded-md w-full" />
        <h2 className="ml-1 pt-1 text-lg font-semibold truncate">{ props.title }</h2>
        <p>{ truncatedExcerpt }</p>
        <div className="flex justify-between font-semibold">
          <p className="">{ props.author }</p>
          <p className="">Read More</p>
        </div>
      </div>
    </Link>
  )
}

export { SingleBigArticle };