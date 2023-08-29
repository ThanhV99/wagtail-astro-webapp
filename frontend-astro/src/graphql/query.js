const url = "http://13.236.167.60/api/graphql";

const fetchData = async (query) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  return data.data;
};

const getDataHomePage = () => {
  const query = `
    query {
      allBlog {
        title
        description
        feedImage
        slug
        updateTime
      }
    }
  `;
  return fetchData(query);
};

const getCategoryHomePage = () => {
  const query = `
    query {
      allCategories {
        name
        slug
      }
    }
  `;
  return fetchData(query);
};

const getBlogsByCategory = (slug, numBlogs) => {
  const query = `
    query {
      blogsByCategory(slug: "${slug}", numBlogs: ${numBlogs}) {
        title
        description
        feedImage
        slug
      }
    }
  `;
  return fetchData(query);
};

const getSinglePost = (slug) => {
  const query = `
    query {
      blog(slug: "${slug}") {
        author
        body {
          ... on SectionBlockType {
            image
            caption
          }
          ... on RichTextBlockType {
            content
          }
        }
        category {
          name
        }
        description
        feedImage
        slug
        title
        updateTime
      }
    }
  `;
  return fetchData(query);
};


export { getDataHomePage, getCategoryHomePage, getBlogsByCategory, getSinglePost }