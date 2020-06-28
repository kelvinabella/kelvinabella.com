import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import Terser from "terser";
import mem from "mem";
import code from "../lib/noflash";

const minify = mem(Terser.minify);
// https://github.com/kachkaev/njt/commit/1ef3bb026b006a355173c8a55594de65de53c102
const InlineJs: React.FunctionComponent<{ code: string; children?: never }> = ({
  code,
}) => {
  const minifyOutput = minify(code);

  if (minifyOutput.error) {
    throw minifyOutput.error;
  }

  if (!minifyOutput.code) {
    throw new Error("Minified code is empty");
  }

  return <script dangerouslySetInnerHTML={{ __html: minifyOutput.code }} />;
};
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <noscript>
            For full functionality of this page it is necessary to enable
            JavaScript. Here are the{" "}
            <a href="http://www.enable-javascript.com" target="_blank">
              {" "}
              instructions how to enable JavaScript in your web browser
            </a>
          </noscript>
          <InlineJs code={code} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
