import Layout from "components/Layout";
import GmailSVG from "components/icons/Gmail";
import GithubSVG from "components/icons/Github";
import LinkedinSVG from "components/icons/LinkedIn";
import Link from "next/link";
import { Caveat } from "@next/font/google";
import clsx from "clsx";

const caveat = Caveat({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <section className="h-[100vh] flex flex-col items-center justify-start content-center flex-wrap max-w-4xl mx-auto">
        <div className="h-full flex flex-col justify-center items-center">
          <div className={clsx(["flex items-center flex-col justify-start", caveat.className])}>
            <h1 className="inline-block overflow-visible w-full flex-grow-0 text-7xl text-center font-medium">
              Hello, my name is <span className="font-bold">Kelvin.</span>
            </h1>
            <div className="w-1/4 relative inline-block h-1 my-3 p-0 border-b-4 border-b-orange-700 " />
          </div>
          <div>
            <h1 className="relative text-6xl text-center">I&apos;m a front-end engineer</h1>
          </div>
          <div className="my-16 text-sm">
            <Link href="/about">Learn more about me</Link>
          </div>
          <div className="flex w-1/5 justify-around">
            <a aria-label="Github" href="https://github.com/kelvinabella">
              <GithubSVG />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/kelvinabella">
              <LinkedinSVG />
            </a>
            <a aria-label="Email To" href="mailto:abellakelvin.ka@gmail.com">
              <GmailSVG />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
