import Link from "next/link";
import { client } from "../sanity/client";

import Navbar from "../(components)/Navbar";
import styles from "./page.module.css";
import Hero from "../(components)/Hero";
import Footer from "../(components)/Footer";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, "imageUrl": mainImage.asset->url}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);
  return (
    <>
      <Navbar />
      <Hero title={"Blogs & Videos"} navigation={"Blogs & Videos"} />
      <main className={`${styles.blog} px-5 my-5`}>
        <div className="container">
          <div className={`${styles.blog_container} row`}>
            {posts.map((post) => (
              <div key={post._id} className="col-6 col-lg-4 mt-4">
                <div
                  className={`${styles.bgImg} px-3 px-lg-5 pb-3`}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${post.imageUrl})`,
                  }}
                >
                  <div className={`${styles.blog_title}`}>
                    <h2 className="fs-3">{post.title}</h2>
                    <Link href={`/${post.slug.current}`}>
                      <div className={`${styles.blog_overlay}`}>
                        <i className="bi bi-arrow-right"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
