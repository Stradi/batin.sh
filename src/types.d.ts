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

type PageType = {
  title?: string;
  dateUpdated?: Date;
  description?: string;

  body?: string;
  url?: string;
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
  fields?: {
    source?: string;
  }
  slug?: string;
  body?: string;
}

type PageQueryType = {
  frontmatter: {
    title?: string;
    dateUpdated?: Date;
    description?: string;

  }
  slug?: string;
  body?: string;
}

type GetAllArticlesQueryResult = {
  [N in "allMdx" | "featured"]: {
    nodes: ArticleQueryType[]
  }
}

type GetArticleQueryResult = {
  mdx: ArticleQueryType
}

type GetPageQueryResult = {
  mdx: PageQueryType
}

export {
  ArticleType,
  PageType,
  GetAllArticlesQueryResult,
  GetArticleQueryResult,
  GetPageQueryResult
};