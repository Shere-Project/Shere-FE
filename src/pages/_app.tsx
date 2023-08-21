import Layout from "@/components/Layout"
import { CommonStyles } from "@/components/Theme"
import { AppProps } from "next/app"

declare module "@mui/material/styles" {
  interface Theme {
    style: typeof CommonStyles;
  }
  interface ThemeOptions {
    style?: typeof CommonStyles;
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}