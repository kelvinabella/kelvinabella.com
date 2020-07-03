import Layout from "~/components/Layout";
import CatInSpaceSVG from "~/components/Icons/CatInSpace";
import { Container } from "~/components/Styles";
import Hero from "./style";

export default function AMA() {
  return (
    <Layout siteTitle="AMA">
      <Container>
        <Hero>
          <CatInSpaceSVG />
          <h1>coming soon</h1>
        </Hero>
      </Container>
    </Layout>
  );
}
