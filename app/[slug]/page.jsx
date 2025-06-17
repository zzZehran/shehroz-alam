import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity/client";
import Navbar from "../(components)/Navbar";
import Footer from "../(components)/Footer";
import Hero from "../(components)/Hero";
import Image from "next/image";
import styles from "./page.module.css";

import Link from "next/link";

// const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id, title, slug, publishedAt, mainImage, body
}`;

const RELATED_POSTS_QUERY = `*[
  _type == "post" && slug.current != $slug
]{ _id, title, slug, publishedAt, "imageUrl": mainImage.asset->url }`;

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      const imageUrl = urlFor(value).url();

      return (
        <div className={`${styles.sanity_imgs} my-4`}>
          <Image
            src={imageUrl}
            alt={value.alt || " "}
            fill={true}
            className=""
          />
        </div>
      );
    },
  },
};

export default async function PostPage({ params }) {
  const awaitedParams = await params;
  const post = await client.fetch(POST_QUERY, awaitedParams, options);
  let relatedPosts = await client.fetch(RELATED_POSTS_QUERY, awaitedParams);
  // Shuffle and take 5
  const shuffled = relatedPosts.sort(() => 0.5 - Math.random());
  relatedPosts = shuffled.slice(0, 5);
  console.log("Related posts", relatedPosts);

  const postImageUrl = post.mainImage ? urlFor(post.mainImage).url() : null;

  return (
    <>
      <Navbar />
      <Hero title={"Blogs & Videos"} navigation={post.title} />
      <main className={`${styles.blog_container} container mx-auto my-5`}>
        {/* <Link href="/blogs" className="hover:underline">
          ← Back to posts
        </Link> */}
        <div className="row justify-content-evenly">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-12 mb-5">
                <div className={`${styles.img_container}`}>
                  <Image
                    src={postImageUrl}
                    alt={post.title}
                    fill={true}
                  ></Image>
                </div>
              </div>
            </div>

            <h1 className="mb-5">{post.title}</h1>
            <div className={`${styles.prose}`}>
              {Array.isArray(post.body) && (
                <PortableText value={post.body} components={components} />
              )}
              {/* <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p> */}
            </div>
          </div>
          <div className="col-lg-4">
            <h5 className="mb-3">RELATED BLOGS</h5>
            {relatedPosts.map((post) => (
              // <p key={post._id}>{post.title}</p>
              <div
                key={post._id}
                className={`${styles.related_post}`}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${post.imageUrl})`,
                }}
              >
                <h6>{post.title}</h6>
                <Link href={`/${post.slug.current}`}>
                  <div className={`${styles.blog_overlay}`}>
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
