import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-center items-center flex-wrap h-12 text-xs text-center ">
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