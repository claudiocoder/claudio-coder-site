import { Inter, Roboto, Titan_One } from "next/font/google"

export const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const inter = Inter ({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-inter',
})