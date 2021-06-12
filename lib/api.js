const API_URL = process.env.WP_API_URL;

console.log("API_URL: ", API_URL);

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  //set up preveiew authorization here at later point
  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables })
  });

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

export async function getAllPlacesPosts() {
  const data = await fetchAPI(
    `
    query MyQuery {
      places {
        edges {
          node {
            content
            excerpt(format: RENDERED)
            slug
            title
            uri
            date
          }
        }
      }
    }
    
    `
  );
  return data?.posts;
}
