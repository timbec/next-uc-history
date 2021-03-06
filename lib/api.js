const API_URL = "http://localhost:8888/uc-history";

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