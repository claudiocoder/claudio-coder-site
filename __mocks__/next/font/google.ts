import { vi } from "vitest";

export const Roboto = vi.fn(()=> {
  return {
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-roboto',
  }
});

export const Khula = vi.fn(()=> {
  return {
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-inter',
  }
});