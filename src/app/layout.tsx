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
  description: "Bumble | Date, Chat, Meet New People & Network Better",
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
          {/* {children} */}
        </Providers>
      </body>
    </html>
  );
}
