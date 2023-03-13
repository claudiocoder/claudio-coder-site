import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { roboto } from '@/utils/fonts'

export default function App({ Component, pageProps }: AppProps) {
    return <Component className={roboto.className} {...pageProps} />
}
