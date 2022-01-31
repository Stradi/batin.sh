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
    body: string;
  }
}

export {
  ArticleType,
  GetAllArticlesQueryResult,
  GetArticleQueryResult
};