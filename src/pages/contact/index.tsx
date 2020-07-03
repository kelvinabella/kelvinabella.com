import Layout from "~/components/Layout";
import GithubSVG from "~/components/Icons/Github";
import GmailSVG from "~/components/Icons/Gmail";
import ContactSVG from "~/components/Icons/Contact";
import LinkedinSVG from "~/components/Icons/LinkedIn";
import { Container } from "~/components/PageStyles/common/style";
import {
  Hero,
  ContactWrapper,
  Contacts,
} from "~/components/PageStyles/contact/style";

// https://deab.ru/#contacts
export default function Contact() {
  return (
    <Layout siteTitle="Contact">
      <Container>
        <Hero>
          <h1>Let&apos;s make great products together!</h1>
          <div className="button">
            <a rel="nofollow" href="mailto:abellakelvin.ka@gmail.com">
              Tell about your project
            </a>
          </div>
        </Hero>
        <ContactWrapper>
          <Contacts>
            <a href="mailto:abellakelvin.ka@gmail.com">
              <span>
                <GmailSVG />
              </span>
              <span>abellakelvin.ka@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/kelvinabella">
              <span>
                <LinkedinSVG />
              </span>
              <span>Kelvin Abella</span>
            </a>
            <a href="https://github.com/kelvinabella">
              <span>
                <GithubSVG />
              </span>
              <span>kelvinabella</span>
            </a>
          </Contacts>
          <ContactSVG />
        </ContactWrapper>
      </Container>
    </Layout>
  );
}
