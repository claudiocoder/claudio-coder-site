import { Khula, Roboto } from "next/font/google";

export const _roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const _khula = Khula({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-inter",
});
