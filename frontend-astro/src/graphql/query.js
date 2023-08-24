const url = "http://127.0.0.1:8000/api/graphql";

const dataHomePage = await fetch(url,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
          query{
              allBlog {
                title
                description
                feedImage
                slug
                updateTime
              }
          }
      `
    }),
  }).then((response) => response.json());

const categoryHomePage = await fetch(url,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
          query{
            allCategories {
                name
                slug
              }
          }
      `
    }),
  }).then((response) => response.json());

const allBlog = await fetch(url,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
            query{
                allBlog {
                  author
                  title
                  description
                  body {
                    ... on SectionBlockType {
                      image
                      caption
                    }
                    ... on RichTextBlockType {
                      content
                    }
                  }
                  updateTime
                  category {
                    name
                    slug
                  }
                  feedImage
                }
            }
        `
    }),
  }).then((response) => response.json());

const blog = await fetch(url,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query {
            allBlog {
                title
                description
                author
            }
        }
    `
    }),
  }).then((response) => response.json());

export { dataHomePage,categoryHomePage, allBlog, blog }
// export {categoryHomePage}