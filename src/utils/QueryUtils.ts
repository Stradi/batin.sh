import { ArticleType, GetAllArticlesQueryResult, GetArticleQueryResult } from "../types";

//TODO: Maybe find a way to create hook for queries.
// For example useGetAllArticles() hook would return ArticleType[] etc.

function getAllArticles(query: GetAllArticlesQueryResult, absoluteURL?: boolean): ArticleType[] {
  return query.allMdx.nodes.map(node => {
    return getArticle({
      mdx: {
        frontmatter: {
          title: node.frontmatter.title,
          date: node.frontmatter.date,
          author: node.frontmatter.author,
          tags: node.frontmatter.tags
        },
        id: node.id,
        slug: node.slug,
        body: node.body
      }
    }, absoluteURL || false);
  })
}

function getArticle(query: GetArticleQueryResult, absoluteURL?: boolean): ArticleType {
  return {
    title: query.mdx.frontmatter.title,
    url: (absoluteURL || false) ? `/blog/${ query.mdx.slug }` : query.mdx.slug,
    author: query.mdx.frontmatter.author,
    tags: query.mdx.frontmatter.tags,
    datePublished: new Date(query.mdx.frontmatter.date),
    body: query.mdx.body
  }
}

export {
  getAllArticles,
  getArticle
};