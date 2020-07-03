/* eslint-disable react/no-danger */
import Layout from "~/components/Layout";
import markdownToHtml from "~/helpers/markdown-to-html";
import { getPostBySlug, getAllPosts } from "~/helpers/api";
import { Container } from "~/components/Styles";
import { PostContainer } from "./style";

type Params = {
  params: {
    slug: string;
  };
};

type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: {
    name: string;
    picture: string;
  };
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default function Post({ post }: { post: Post }) {
  // TODO: handle error
  return (
    <Layout siteTitle={post.title}>
      <Container>
        <PostContainer>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </PostContainer>
      </Container>
    </Layout>
  );
}
