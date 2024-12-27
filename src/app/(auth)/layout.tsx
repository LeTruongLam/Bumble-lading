import type { Metadata } from "next";
import Header from "./header.part";

export const metadata: Metadata = {
  title: "Bumble | Sign In",
  description: "Bumble | Date, Chat, Meet New People & Network Better",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      {children}
    </div>
  );
}
