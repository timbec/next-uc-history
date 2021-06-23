import Layout from "@/components/Layout";
import Link from "next/link";
import Post from "../components/Post";

import { API_URL } from "../config/index";

console.log(API_URL);
// places data
<<<<<<< HEAD
import { getAllWritingPosts } from "../lib/api";
import { getAllNewsPosts } from "../lib/api";
// import axios from "axios";
=======
import axios from "axios";
>>>>>>> 69b9a21c3e8e87373c59df864560201d5eb4b200


<<<<<<< HEAD

export default function Index({ newsPosts: { edges } }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(0)
  console.log(morePosts);

  return (
    <>
      <Layout>
          {console.log(heroPost)}
          {console.log(morePosts)}
          {
            morePosts.forEach(post => {
              console.log(post.node.title);
              console.log(post.node)
              
            })
          }
      </Layout>
    </>
  )
}

export async function getStaticProps() {

  const newsPosts = await getAllNewsPosts()
  return {
    props: { newsPosts },
  }
}
=======
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
>>>>>>> 69b9a21c3e8e87373c59df864560201d5eb4b200
