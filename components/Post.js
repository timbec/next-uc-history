import Link from "next/link";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <div>
      <h3>
        <Link href={post.slug}>{post.title.rendered}</Link>
      </h3>
      <div>{console.log("post component:" + post)}</div>
      <div>{console.log(post.title.rendered)}</div>
    </div>
  );
}
