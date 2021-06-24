import { useRouter } from "next/router";
import Layout from "@/components/Layout";

import { API_URL } from "@/config/index";

//import styles from "@/styles/Place.module.css";

export default function PlacePage({ newsItem }) {
  const router = useRouter();
  console.log(newsItem.title);
  return (
    <Layout>
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: newsItem.title.rendered }}></h1>
        <article dangerouslySetInnerHTML={{ __html: newsItem.content.rendered }}></article>
      </div>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}places`);
//   const places = await res.json();

//   const paths = places.map(place => {
//     params: {
//       slug: place.slug;
//     }
//   });
//   return {
//     paths: [],
//     fallback: false
//   };
// }

export async function getServerSideProps({ query: { slug } }) {
  // https://uraniumcity-history.com/wp-json/wp/v2/places?slug=%22sun-dogs-yellowcake-extract-chapter-8%22
  const res = await fetch(`${API_URL}news?slug="${slug}"`);
  console.log(res);
  const news = await res.json();

  return {
    props: {
      newsItem: news[0]
    }
  };
}
