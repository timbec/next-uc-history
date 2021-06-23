<<<<<<< HEAD
// fetch('https://timbeckett-writing.com/graphql/', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     query: `
//         {
//           posts {
//             nodes {
//               date
//               excerpt(format: RAW)
//               title
//               slug
//             }
//           }
//         }
//     `,
//   }),
// })

// fetch('http://localhost:8888/uc-history/graphql/', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     query: `
//         {
//           writings {
//             edges {
//               node {
//                 date
//                 title
//                 slug
//               }
//             }
//           }
//         }
//     `,
//   }),
// })
//   .then(res => res.json())
//   .then(res => console.log(res.data))


//const API_URL = process.env.WP_API_URL;

const API_URL = "http://localhost:8888/uc-history/graphql/";
=======
// const API_URL = process.env.WP_API_URL;

const API_URL = "https://timbeckett-writing.com/wp-json/wp/v2";
>>>>>>> 69b9a21c3e8e87373c59df864560201d5eb4b200

console.log("API_URL: ", API_URL);

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  //set up preveiew authorization here at later point
  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables })
  });

  console.log(res);

  const json = await res.json();
  console.log(json);
  if (json.errors) {
    console.log(json.errors);
    console.log("error details: ", query, variables);
    throw new Error("Failed to fetch API");
  }
  console.log(json.data);
  return json.data;
}
<<<<<<< HEAD

export async function getAllNewsPosts() {
  const data = await fetchAPI(
    `
    query MyQuery {
      newsArticles {
        edges {
          node {
            content
            date
            id
            slug
            title(format: RENDERED)
          }
        }
      }
    }
    
    `
  );
  return data?.newsArticles;
}


export async function getAllWritingPosts() {
  const data = await fetchAPI(
    `
    query MyQuery {
      writings {
          edges {
            node {
              date
              title
              slug
            }
          }
        }
    }
    
    `
  );
  return data?.writings;
}
=======
>>>>>>> 69b9a21c3e8e87373c59df864560201d5eb4b200
