import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "SYNAPSE - Personal Intelligence Agency",
  description: "Making space that’s kind and beautiful for every mind, with consciousness growing on and on.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        {children}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
