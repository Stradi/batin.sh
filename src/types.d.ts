type ArticleType = {
  title?: string;
  url?: string;
  author?: string;
  tags?: string[];
  datePublished?: Date;
  body?: string;
}

type GetAllArticlesQueryResult = {
  allMdx: {
    nodes: [{
      frontmatter: {
        title?: string;
        date?: Date;
        author?: string;
        tags: string[];
      },
      id: string;
      slug: string;
      body: string;
    }]
  }
}

type GetArticleQueryResult = {
  mdx: {
    frontmatter: {
      title?: string;
      date?: Date;
      author?: string;
      tags?: string[];
    },
    id: string;
    slug: string;
    body: string;
  }
}

export {
  ArticleType,
  GetAllArticlesQueryResult,
  GetArticleQueryResult
};