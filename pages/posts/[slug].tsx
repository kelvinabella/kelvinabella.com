import styled from "styled-components";
import Layout from "../../components/layout";
import media from "../../styles/media";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdown-to-html";

const StyledContainer = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const StyledWrapper = styled.div`
  max-width: 640px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  min-height: calc(100vh - 7rem);
  margin: 3em 5em;
  ${media.desktop`margin: 3em;`}
  ${media.tablet`margin: 3em 1em;`}
`;

const StyledPostContainer = styled.div`
  h1 {
    font-weight: 800;
  }
`;

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
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default function Post({ post }: { post: Post }) {
  //TODO: handle error
  console.log(post);
  return (
    <Layout siteTitle={post.title}>
      <StyledContainer>
        <StyledWrapper>
          <StyledPostContainer>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </StyledPostContainer>
        </StyledWrapper>
      </StyledContainer>
    </Layout>
  );
}
