import React, { useEffect, useState } from "react";

import { Container } from "../Container";
import { SingleArticle } from "./SingleArticle";

import { seperateArrayByYears } from "../../utils/DateUtils";
import { ArticleType } from "../../types";

//TODO: Add filtering and searching for blog page to show all articles.

interface ArticleListProps {
  title?: string;
  articles?: ArticleType[];
  sort?: boolean;
  addFilters?: boolean;
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
  sort: true,
  addFilters: false
}

function ArticleList(props: ArticleListProps) {
  function sortAndSeperateArticles(array: ArticleType[], sort?: boolean): Record<number, object[]> {
    if(sort) {
      array.sort((a, b) => a.datePublished.getTime() - b.datePublished.getTime());
    }

    return seperateArrayByYears(array, "datePublished")
  }

  const [currentFilter, setCurrentFilter] = useState("");
  const [filteredResults, setFilteredResults] = useState(sortAndSeperateArticles(props.articles, props.sort));

  useEffect(() => {
    const filtered = props.articles.filter((article) => article.title.toLowerCase().includes(currentFilter.toLowerCase()));
    setFilteredResults(sortAndSeperateArticles(filtered));
  }, [currentFilter]);

  const articlesDOM = Object.keys(filteredResults).length > 0 ? (
    <div>
      {
        Object.keys(filteredResults).reverse().map(year => (
          <div key={ year }>
            <h3 className="text-3xl font-bold mb-4">{ year }</h3>
            {
              filteredResults[year].map(v => (
                <SingleArticle article={ v } key={ v.title } />
              ))
            }
            </div>
        ))
      }
    </div>
  ) : (
    <div className="text-3xl text-center font-bold">No results found :(</div>
  )

  return (
    <Container>
      <h2 className="text-5xl font-bold mb-4">{ props.title }</h2>
      {
        props.addFilters && <input
          type="text"
          onChange={ (e) => setCurrentFilter(e.target.value) }
          placeholder="Search for something"
          className="p-2 mb-4 w-full border-2 text-xl"  
        />
      }
      { articlesDOM }
    </Container>
  )
}

export {
  ArticleList,
  type ArticleListProps
};