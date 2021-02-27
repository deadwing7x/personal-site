import { useContext } from "react";
import PostContext from "../context/PostContext";
import { IPost } from "../models/IPost";
import styles from "../styles/Blogs.module.css";

const Blogs = () => {
  const posts: IPost[] = useContext(PostContext);
  const blogLink: string = "https://anubhav7x.hashnode.dev";

  return (
    <section
      className={`lg:mt-20 lg:ml-24 lg:mr-24 sm:ml-20 sm:mr-16 sm:mt-14 ${styles.blogsDiv}`}
      id="blogs"
    >
      <p
        className={`lg:pt-10 text-gray-50 lg:text-5xl pb-4 sm:text-3xl ${styles.blogsText}`}
      >
        <span
          className={`lg:text-3xl sm:text-xl ${styles.number}`}
          style={{ color: "#1ee0e0" }}
        >
          03.
        </span>{" "}
        Blogs
      </p>
      <div className="grid pt-10 lg:grid-cols-3 gap-4 md:grid-cols-2 gap-3 sm:grid-cols-1 gap-2">
        {posts.map((post, id) => {
          return (
            <div
              key={post._id}
              className={`rounded-2xl text-gray-50 ${styles.postInner}`}
            >
              <img
                src={post.coverImage}
                alt={`Cover Image ${id}`}
                className="rounded-2xl"
              />
              <a
                href={`${blogLink}/${post.slug}`}
                rel="noopener noreferrer"
                className={`pt-5 pb-1 lg:text-xl md:text-lg sm:text-md cursor-pointer ${styles.postLinks}`}
              >
                {post.title}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;
