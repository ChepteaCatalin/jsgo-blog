import type { Metadata } from "next";
import GitHubHeader from "@/components/GitHubHeader";
import "./globals.css";
import "./github.css";
import { Lora, Geist_Mono } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "JavaScript: Global Offensive",
  description: `Opinionated takes on JavaScript and web development, challenging common misconceptions and emphasizing core concepts and a personal understanding of how things work.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lora.variable} ${geistMono.variable}`}>
      <body className="typeset typeset-docs max-w-[42em]">
        <GitHubHeader />
        <div>{children}</div>
      </body>
    </html>
  );
}
