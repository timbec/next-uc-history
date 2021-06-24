import fetch from "isomorphic-unfetch";

import Layout from "@/components/Layout";
import Link from "next/link";
import Post from "@/components/Post";

import { API_URL } from "@/config/index";
// places data

import Showcase from "@/components/Showcase";

export default function PlacesPage({ places }) {
  return (
    <Layout>
      <h1>Places Page</h1>
      <Showcase />
      {places.map(post => (
        <Post key={post.id} post={post} />
      ))}

      {places.length > 0 && (
        <Link href="/news">
          <a className="btn-secondary">View All Places</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}places`);
  const places = await res.json();

  return {
    props: { places },
    revalidate: 1
  };
}
