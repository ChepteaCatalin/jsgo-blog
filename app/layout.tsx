import type { Metadata } from "next";
import GitHubHeader from "@/components/GitHubHeader";
import "./globals.css";
import "./github.css";
import { Lora, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html
      lang="en"
      className={`${lora.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="typeset typeset-docs">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GitHubHeader />
          <div className="mx-auto px-7.5 pb-12 sm:max-w-160 md:max-w-3xl lg:max-w-5xl">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
