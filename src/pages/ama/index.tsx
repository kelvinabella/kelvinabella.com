import Layout from "~/components/Layout";
import CatInSpaceSVG from "~/components/Icons/CatInSpace";
import { Container } from "~/components/PageStyles/common/style";
import Hero from "~/components/PageStyles/ama/style";

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
