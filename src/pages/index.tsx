import Layout from "components/Layout";
import GmailSVG from "components/icons/Gmail";
import GithubSVG from "components/icons/Github";
import LinkedinSVG from "components/icons/LinkedIn";
import Link from "next/link";
import clsx from "clsx";
import { Caveat } from "@next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";
import { Space_Grotesk } from "@next/font/google";


const caveat = Caveat({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const texts = ["JavaScript", "TypeScript", "React", "Next.js"];
const variants = {
  enter: {
    translateY: 20,
    opacity: 0,
    height: 0,
  },
  center: {
    zIndex: 1,
    translateY: 0,
    opacity: 1,
    height: "auto",
  },
  exit: {
    zIndex: 0,
    translateY: -20,
    opacity: 0,
    height: 0,
  },
};

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      if (next === texts.length) {
        next = 0;
      }
      setIndex(next);
    }, 3 * 1000);
  }, [index, setIndex]);

  return (
    <Layout>
      <section className="mx-auto flex h-[100vh] flex-col items-center justify-center text-zinc-700 dark:text-white">
        <div className={clsx(["w-full", caveat.className])}>
          <h1 className="w-full flex-grow-0 overflow-visible text-center text-7xl font-medium leading-normal">
            Hello, my name is&nbsp;
            <span className="bg-gradient-to-r from-rose-300 via-fuchsia-500 to-indigo-300 bg-[length:100%_3px] bg-bottom bg-no-repeat font-bold">
              Kelvin.
            </span>
          </h1>
        </div>
        <div className="mx-auto w-8/12">
          <h2
            className={clsx([
              "mx-auto text-center text-4xl",
              spaceGrotesk.className,
            ])}
          >
            <span>I&apos;m a front-end engineer.</span>
          </h2>
        </div>
        <div className="mx-auto w-[50%]">
          <h2
            className={clsx([
              "relative mx-auto text-4xl",
              spaceGrotesk.className,
            ])}
          >
            <span>I build web application using&nbsp;</span>
            <div className="relative inline w-full overflow-hidden font-bold">
              <AnimatePresence initial={false}>
                <motion.span
                  style={{ position: "absolute" }}
                  layout
                  variants={variants}
                  key={index}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    y: { type: "spring", stiffness: 1000, damping: 200 },
                    opacity: { duration: 0.5 },
                  }}
                >
                  {texts[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h2>
        </div>
        <div className="relative my-16 text-sm">
          <Link
            href="/about"
            className="dark:after:bg-white dark:before:bg-white h-6 px-5 text-base before:pointer-events-none before:absolute before:top-0 before:left-0 before:h-px before:w-6 before:origin-[0_0] 
             before:rotate-90 before:bg-slate-700 before:opacity-20 
            before:transition-all before:duration-300 after:pointer-events-none 
            after:absolute after:right-0 after:bottom-0 after:h-px after:w-6 after:origin-[100%_0] after:rotate-90 after:bg-slate-700 after:opacity-20 after:transition-all after:duration-300 
             hover:opacity-90 before:hover:left-1/2 
            before:hover:-translate-x-2/4 before:hover:rotate-0 before:hover:opacity-100 
            after:hover:right-1/2 after:hover:translate-x-2/4 after:hover:rotate-0 after:hover:opacity-100"
          >
            Learn more about me
          </Link>
        </div>
        <div className="flex w-[12%] justify-around">
          <a aria-label="Github" href="https://github.com/kelvinabella">
            <GithubSVG />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/kelvinabella"
          >
            <LinkedinSVG />
          </a>
          <a aria-label="Email To" href="mailto:abellakelvin.ka@gmail.com">
            <GmailSVG />
          </a>
        </div>
      </section>
    </Layout>
  );
}
