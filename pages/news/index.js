import fetch from "isomorphic-unfetch";

import Layout from "@/components/Layout";
import Link from "next/link";
import Post from "@/components/Post";

import { API_URL } from "@/config/index";
// places data

import Showcase from "@/components/Showcase";

export default function NewsPage({ news }) {
  return (
    <Layout>
      <h1>News Page</h1>
      <Showcase />
      {console.log(news)}
      {news.map(post => (
        <Post key={post.id} post={post} />
      ))}

      {news.length > 0 && (
        <Link href="/news">
          <a className="btn-secondary">View All News</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}news`);
  const news = await res.json();

  return {
    props: { news },
    revalidate: 1
  };
}
