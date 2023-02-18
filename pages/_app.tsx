import '../styles/globals.css';
import '../styles/editor-layout.css';
import '../styles/editor-style.css';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
