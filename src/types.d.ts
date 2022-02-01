type ArticleType = {
  title?: string;
  datePublished?: Date;
  author?: string;
  tags?: string[];
  description?: string;

  body?: string;
  url?: string;
  image?: string;
}

type ArticleQueryType = {
  frontmatter: {
    title?: string;
    date?: Date;
    author?: string;
    tags?: string[];
    description?: string;
    image?: {
      publicURL?: string;
    };
  },
  slug?: string;
  body?: string;
}

type GetAllArticlesQueryResult = {
  allMdx: {
    nodes: ArticleQueryType[]
  }
}

type GetArticleQueryResult = {
  mdx: ArticleQueryType
}

export {
  ArticleType,
  GetAllArticlesQueryResult,
  GetArticleQueryResult
};