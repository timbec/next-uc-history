import Layout from "@/components/Layout";
import Link from "next/link";
import Showcase from '../components/Showcase';
import Post from "../components/Post";

import { API_URL } from "../config/index";

console.log(API_URL);
// places data

export default function HomePage({ posts }) {
  return (
    <Layout>
      <h1>Main Page</h1>
      <Showcase />
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}

      {posts.length > 0 && (
        <Link href="/posts">
          <a className="btn-secondary">View All Posts</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}`);
  console.log(res);
  const posts = await res.json();
  console.log(posts);
  return {
    props: { posts },
    revalidate: 1
  };
}
