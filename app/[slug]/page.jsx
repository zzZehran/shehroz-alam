import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity/client";
import Link from "next/link";
import Navbar from "../(components)/Navbar";
import Footer from "../(components)/Footer";
import Hero from "../(components)/Hero";
import Image from "next/image";
import styles from "./page.module.css";
// const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id, title, slug, publishedAt, mainImage, body
}`;

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
  console.log("posts", post.mainImage);
  const postImageUrl = post.mainImage ? urlFor(post.mainImage).url() : null;

  return (
    <>
      <Navbar />
      <Hero title={"Blogs & Videos"} navigation={post.title} />
      <main className={`${styles.blog_container} container mx-auto my-5`}>
        {/* <Link href="/blogs" className="hover:underline">
          ← Back to posts
        </Link> */}
        <div className="row">
          <div className="col-lg-7">
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
        </div>
      </main>
      <Footer />
    </>
  );
}
