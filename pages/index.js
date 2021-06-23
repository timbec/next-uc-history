import Layout from "@/components/Layout";
import Link from "next/link";

// places data
import { getAllWritingPosts } from "../lib/api";
import { getAllNewsPosts } from "../lib/api";
// import axios from "axios";



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