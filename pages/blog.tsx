import styled from "styled-components";
import Layout from "../components/layout";
import media from "../styles/media";
import { getAllPosts } from "../lib/api";
import { InferGetStaticPropsType } from "next";
import { format } from "timeago.js";
import Link from "next/link";

const StyledContainer = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const StyledWrapper = styled.div`
  max-width: 968px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 3em 5em;
  min-height: calc(100vh - 7rem);

  svg {
    height: 20em;
    width: auto;
  }

  ${media.tablet`width: 100%;`}
`;

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 640px;
  margin: 1em;
`;

const StyledPostExcerpt = styled.div`
  margin-top: 0.75em;
  a {
    font-weight: 700;
    font-size: 1.25em;
  }

  p {
    margin: 5px 0;
    font-size: 1.15em;
    ${media.tablet`font-size: 1em;`}
  }

  span {
    font-size: 0.8rem;
    color: #686b78;
  }
`;

const HorizontalBar = styled.div`
  display: block;
  width: 90px;
  max-width: 90%;
  min-height: 5px;
  margin-left: 0px;
  margin-bottom: 3em;
  border-bottom: 3px solid #fe6056;
`;

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
  console.log(allPosts);
  return (
    <Layout>
      <StyledContainer>
        <StyledWrapper>
          <HorizontalBar />
          <StyledHero>
            {allPosts.map((post, key) => (
              <StyledPostExcerpt key={key}>
                <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                  <a>{post.title}</a>
                </Link>
                <div>
                  <span>
                    Posted {format(post.date)} | {post.tags}
                  </span>
                </div>
                <p>{post.excerpt}</p>
              </StyledPostExcerpt>
            ))}
          </StyledHero>
        </StyledWrapper>
      </StyledContainer>
    </Layout>
  );
}
