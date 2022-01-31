import { ArticleType, GetAllArticlesQueryResult, GetArticleQueryResult } from "../types";

//TODO: Maybe find a way to create hook for queries.
// For example useGetAllArticles() hook would return ArticleType[] etc.

function getAllArticles(query: GetAllArticlesQueryResult): ArticleType[] {
  return query.allMdx.nodes.map(node => (
    {
      title: node.frontmatter.title,
      url: `/blog/${ node.slug }`,
      author: node.frontmatter.author,
      tags: node.frontmatter.tags,
      datePublished: new Date(node.frontmatter.date)
    }
  ));
}

function getArticle(query: GetArticleQueryResult): ArticleType {
  return {
    title: query.mdx.frontmatter.title,
    author: query.mdx.frontmatter.author,
    tags: query.mdx.frontmatter.tags,
    datePublished: query.mdx.frontmatter.date,
    body: query.mdx.body
  }
}

export {
  getAllArticles,
  getArticle
};