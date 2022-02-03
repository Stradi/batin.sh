const BLOG_TEMPLATE_PATH = "./src/templates/blog_template.tsx";
const PAGE_TEMPLATE_PATH = "./src/templates/page_template.tsx";

function onCreateNode({ node, getNode, actions }) {
  const { createNodeField } = actions;

  if(node.internal.type !== "Mdx") {
    return;
  }

  const { sourceInstanceName } = getNode(node.parent);
  createNodeField({
    node,
    name: "source",
    value: sourceInstanceName
  });
}

async function createPages({ actions, graphql }) {
  const { data } = await graphql(`
  query {
    allMdx {
      nodes {
        id
        fields {
          source
        }
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          author
          tags
          description
          image {
            publicURL
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        body
        slug
      }
    }
  }
  `);

  data.allMdx.nodes.forEach(node => {
    const sourceName = node.fields.source;
    const slug = node.slug;
    const id = node.id;

    let path;
    let component;
    
    if(sourceName == "blog") {
      path = `/blog/${ slug }`;
      component = require.resolve(BLOG_TEMPLATE_PATH);
    } else if(sourceName == "page") {
      path = `/${ slug }`;
      component = require.resolve(PAGE_TEMPLATE_PATH);
    }

    actions.createPage({
      path,
      component,
      context: {
        id
      }
    });
  });
}

exports.onCreateNode = onCreateNode;
exports.createPages = createPages;