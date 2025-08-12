import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Classic Renovations",
  description:
    "High-rise, mid-rise, and commercial painting solutions for builders, project managers, and estimators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-bgc-100 text-textc-100`}
      >
        {children}
      </body>
    </html>
  );
}
