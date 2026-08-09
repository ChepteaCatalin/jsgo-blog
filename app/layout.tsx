import type { Metadata } from "next";
import Header from "@/components/Header";
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
          <Header />
          <div className="mx-auto max-w-3xl px-7.5 pb-12 lg:max-w-5xl">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
