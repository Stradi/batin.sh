import { IGatsbyImageData } from "gatsby-plugin-image";

type ArticleType = {
  title?: string;
  datePublished?: Date;
  author?: string;
  tags?: string[];
  description?: string;

  body?: string;
  url?: string;
  image?: {
    publicURL?: string;
    data?: IGatsbyImageData;
  }
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
      childImageSharp?: {
        gatsbyImageData?: IGatsbyImageData;
      }
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