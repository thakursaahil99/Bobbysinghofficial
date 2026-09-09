import { Space_Grotesk, Inter } from "next/font/google";

/** Display / headings — geometric, confident, modern. */
export const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

/** Body / UI / labels. */
export const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
