import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DataCollector",
  description: "Best data collection money can buy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="bg-gray-800">
            <Header />
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
