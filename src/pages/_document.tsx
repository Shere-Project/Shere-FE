import Document, { DocumentContext, Html, Main, Head, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    try {
      // sheet을 사용해 정의된 모든 스타일을 수집
      ctx.renderPage = () =>
        originalRenderPage({
          // enhanceApp: (App) => (props) => materialSheets.collect(<App {...props} />)
        });
      // Documents의 initial props
      const initialProps = await Document.getInitialProps(ctx);
      // props와 styles를 반환
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {/* {materialSheets.getStyleElement()} */}
          </>
        )
      };
    } catch (error) {
      throw error;
    }
  }
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="use-credentials" />
          <link rel="preconnect" href="https://cdn.jsdelivr.net" />
          <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="use-credentials" />
          <link rel="preconnect" href="https://spoqa.github.io/" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          />
          {/* Naver Map Api */}
          <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=5htvhvuiht"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
