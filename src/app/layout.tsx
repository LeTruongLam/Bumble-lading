import type { Metadata } from "next";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import { Providers } from "@/store/Providers";
import QueryClientProviderWrapper from "@/lib/react-query";

const bumbleSansRegular = localFont({
  src: "./fonts/BumbleSans-Regular.woff2",
  variable: "--font-bumble-sans-regular",
  weight: "400",
});

const bumbleSansMedium = localFont({
  src: "./fonts/BumbleSans-Medium.woff2",
  variable: "--font-bumble-sans-medium",
  weight: "500",
});

const bumbleSansBold = localFont({
  src: "./fonts/BumbleSans-BoldCondensed.woff2",
  variable: "--font-bumble-sans-bold",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Bumble | Date, Chat, Meet New People & Network Better",
  description:
    "Join Bumble, the app where you can date, chat, and build meaningful relationships. Network smarter and meet amazing people today on Bumble!",
  robots: "index, follow",
  keywords: "dating, social networking, networking, chat, meet new people",
  openGraph: {
    title: "Bumble | Date, Chat, Meet New People & Network Better",
    description:
      "Join Bumble, the app where you can date, chat, and build meaningful relationships. Network smarter and meet amazing people today on Bumble!",
    siteName: "Bumble",
    url: "https://bumble.com",
    images: [
      {
        url: "https://i.pinimg.com/236x/c4/90/a4/c490a469a0fddfcc3a5e95f340581a9f.jpg",
        width: 1200,
        height: 630,
        alt: "Bumble | Date, Chat, Meet New People & Network Better",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bumble | Date, Chat, Meet New People & Network Better",
    description:
      "Join Bumble, the app where you can date, chat, and build meaningful relationships. Network smarter and meet amazing people today on Bumble!",
    images: [
      "https://i.pinimg.com/236x/c4/90/a4/c490a469a0fddfcc3a5e95f340581a9f.jpg",
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bumbleSansRegular.variable} ${bumbleSansMedium.variable} ${bumbleSansBold.variable}  antialiased`}
      >
        <Providers>
          <ToastContainer />
          <QueryClientProviderWrapper>{children}</QueryClientProviderWrapper>
        </Providers>
      </body>
    </html>
  );
}
