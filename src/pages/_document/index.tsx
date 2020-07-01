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
import code from "../../helpers/noflash";

const minify = mem(Terser.minify);
// https://github.com/kachkaev/njt/commit/1ef3bb026b006a355173c8a55594de65de53c102
const InlineJs: React.FunctionComponent<{ children?: never }> = () => {
  const minifyOutput = minify(code);

  if (minifyOutput.error) {
    throw minifyOutput.error;
  }

  if (!minifyOutput.code) {
    throw new Error("Minified code is empty");
  }

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: minifyOutput.code }} />;
};
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line react/jsx-props-no-spreading
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
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
            JavaScript. Here are the &nbsp;
            <a
              href="http://www.enable-javascript.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp; instructions how to enable JavaScript in your web browser
            </a>
          </noscript>
          <InlineJs />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
