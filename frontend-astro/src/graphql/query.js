const url = "http://13.236.167.60/api/graphql";

const fetchData = async (query) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    return data.data;
  } catch (error) {
    // Handle the error here, e.g., log it or throw a custom error.
    console.error('Error fetching data:', error);
    throw error; // You can rethrow the error if needed.
  }
};

const getDataHomePage = () => {
  try {
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
  } catch (error) {
    // Handle the error here, e.g., log it or throw a custom error.
    console.error('Error fetching data:', error);
    throw error; // You can rethrow the error if needed.
  }

};

const getCategoryHomePage = () => {
  try {
    const query = `
    query {
      allCategories {
        name
        slug
      }
    }
  `;
    return fetchData(query);
  } catch (error) {
    // Handle the error here, e.g., log it or throw a custom error.
    console.error('Error fetching data:', error);
    throw error; // You can rethrow the error if needed.
  }

};

const getBlogsByCategory = (slug, numBlogs) => {
  try {
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
  } catch (error) {
    // Handle the error here, e.g., log it or throw a custom error.
    console.error('Error fetching data:', error);
    throw error; // You can rethrow the error if needed.
  }

};

const getSinglePost = (slug) => {
  try {
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
  } catch (error) {
    // Handle the error here, e.g., log it or throw a custom error.
    console.error('Error fetching data:', error);
    throw error; // You can rethrow the error if needed.
  }

};


export { getDataHomePage, getCategoryHomePage, getBlogsByCategory, getSinglePost }