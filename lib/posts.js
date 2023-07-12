import graphqlRequest from "./graphqlRequest";

export async function getAllPosts() {
  const query = {
    query: `query getAllPosts {
            posts {
              edges {
                node {
                  slug
                  date
                  excerpt
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                  title
                }
              }
            }
          }`,
  };

  const resJson = await graphqlRequest(query);
  const allPosts = resJson.posts;

  return allPosts;
}
