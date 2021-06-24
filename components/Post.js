import Link from "next/link";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <div>
      <h3>
        <Link href={post.slug}>
          <a dangerouslySetInnerHTML={{ __html: post.title.rendered }}></a>
        </Link>
      </h3>
      <div>{console.log("post component:" + post)}</div>
      {/* <Image src={post.featured_media ? post.featured_media : ""} width={170} height={100} /> */}
      <article dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></article>
    </div>
  );
}
