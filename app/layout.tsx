import type { Metadata, Viewport } from "next";
import { DM_Sans, Nunito_Sans, Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

/**
 * The Figma file uses "Buenos Aires Trial" (a commercial trial font) for the
 * "Our Success" block. DM Sans is the closest free substitute. To use the real
 * font later, only this one variable has to be replaced.
 */
const display = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TOTC | Studying online is now much easier",
  description:
    "TOTC is an interesting platform that will teach you in a more interactive way: virtual classrooms, quizzes, gradebooks and one-on-one discussions in one place.",
  openGraph: {
    title: "TOTC | Studying online is now much easier",
    description:
      "Virtual classrooms, quizzes, gradebooks and one-on-one discussions in one place.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#49bbbd",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${nunito.variable} ${roboto.variable} ${display.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
