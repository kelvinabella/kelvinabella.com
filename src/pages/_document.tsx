import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          try {
            if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
              document.documentElement.classList.add("dark");
              document.querySelector('meta[name="theme-color"]').setAttribute("content", "#0B1120");
            } else {
              document.documentElement.classList.remove("dark");
            }
          } catch (_) {}
          `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
