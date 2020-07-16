import React from "react";
import { render } from "~/test/utils/index";
import "jest-styled-components";
import {
  Hero,
  ImageContainer,
  AboutMe,
  Skills,
} from "~/components/PageStyles/about/style";
import HeroAMA from "~/components/PageStyles/ama/style";
import {
  Hero as HeroBlog,
  Posts,
  PostExcerpt,
  PostContainer,
} from "~/components/PageStyles/blog/style";
import { Container, HorizontalBar } from "~/components/PageStyles/common/style";
import {
  Hero as HeroContact,
  StyledWrapper,
  ContactWrapper,
  Contacts,
} from "~/components/PageStyles/contact/style";
import {
  HeroWrapper,
  HeroOne,
  HeroTwo,
  CallToAction,
  FeaturedProjects,
  AppBox,
  H1,
  Contact,
} from "~/components/PageStyles/index/style";
import {
  Apps,
  AppCard,
  AppDetails,
  AppLinks,
} from "~/components/PageStyles/projects/style";

describe("About page styles", () => {
  it("renders Hero correctly", () => {
    const { container } = render(<Hero />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders ImageContainer correctly", () => {
    const { container } = render(<ImageContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders AboutMe correctly", () => {
    const { container } = render(<AboutMe />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders Skills correctly", () => {
    const { container } = render(<Skills />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("AMA page styles", () => {
  it("renders HeroAMA correctly", () => {
    const { container } = render(<HeroAMA />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Blog page styles", () => {
  it("renders HeroBlog correctly", () => {
    const { container } = render(<HeroBlog />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders Posts correctly", () => {
    const { container } = render(<Posts />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders PostExcerpt correctly", () => {
    const { container } = render(<PostExcerpt />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders PostContainer correctly", () => {
    const { container } = render(<PostContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Coomon page styles", () => {
  it("renders Container correctly", () => {
    const { container } = render(<Container />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders HorizontalBar correctly", () => {
    const { container } = render(<HorizontalBar />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Contact page styles", () => {
  it("renders StyledWrapper correctly", () => {
    const { container } = render(<StyledWrapper />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders HeroContact correctly", () => {
    const { container } = render(<HeroContact />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders ContactWrapper correctly", () => {
    const { container } = render(<ContactWrapper />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders Contacts correctly", () => {
    const { container } = render(<Contacts />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Index page styles", () => {
  it("renders HeroWrapper correctly", () => {
    const { container } = render(<HeroWrapper />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders HeroOne correctly", () => {
    const { container } = render(<HeroOne />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders HeroTwo correctly", () => {
    const { container } = render(<HeroTwo />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders CallToAction correctly", () => {
    const { container } = render(<CallToAction />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders Contact correctly", () => {
    const { container } = render(<Contact />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders FeaturedProjects correctly", () => {
    const { container } = render(<FeaturedProjects />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders AppBox correctly", () => {
    const { container } = render(<AppBox />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders H1 correctly", () => {
    const { container } = render(<H1 />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Projects page styles", () => {
  it("renders Apps correctly", () => {
    const { container } = render(<Apps />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders AppCard correctly", () => {
    const { container } = render(<AppCard />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders AppDetails correctly", () => {
    const { container } = render(<AppDetails />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders AppLinks correctly", () => {
    const { container } = render(<AppLinks />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
