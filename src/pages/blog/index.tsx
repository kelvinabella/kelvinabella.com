import Link from "next/link";
import { format } from "timeago.js";
import { InferGetStaticPropsType } from "next";
import { getAllPosts } from "~/helpers/api";
import { Container, HorizontalBar } from "~/components/Styles";
import { Hero, Posts, PostExcerpt } from "./style";
import Layout from "~/components/Layout";

// TODO: Add types to posts.
export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "tags",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};

export default function Blog({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout siteTitle="Blogs">
      <Container>
        <Hero>
          <HorizontalBar />
          <Posts>
            {allPosts.map(post => (
              <PostExcerpt key={post.slug}>
                <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
                  <a>{post.title}</a>
                </Link>
                <div>
                  <span>
                    Posted&nbsp;
                    {format(post.date)}
                    &nbsp;|&nbsp;
                    {post.tags}
                  </span>
                </div>
                <p>{post.excerpt}</p>
              </PostExcerpt>
            ))}
          </Posts>
        </Hero>
      </Container>
    </Layout>
  );
}
