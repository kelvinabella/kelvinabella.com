import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className="dark:text-white fixed bottom-0 left-0 right-0 flex h-12 flex-wrap items-center justify-center text-center text-xs ">
      <span>
        powered by&nbsp;
        <a href="https://nextjs.org">Next.js</a>
        &nbsp;and&nbsp;
        <a href="https://reactjs.org">React</a>
      </span>
      <span>
        &nbsp;|&nbsp;built by&nbsp;
        <a href="https://kelvinabella.com">Kelvin Abella</a>
        &nbsp;with &hearts;
      </span>
    </footer>
  );
}