import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar/Navbar";
import Link from "next/link";
import styles from "./RootLayout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SimpliMuv Full Stack Challenge",
  description: "Application created for SimpliMuv full stack challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <Navbar />
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <div>
            Website created by @juanzitelli for SimpliMuv Full Stack challenge
          </div>
          <div>
            <nav>
              <ul>
                <li>
                  <Link href={"https://simplimuv.com"}>SimpliMuv</Link>
                </li>
                <li>
                  <Link href={"https://github.com/juanzitelli"}>
                    @juanzitelli
                  </Link>
                </li>
                <li>
                  <Link href={"https://simplimuv.com"}>Repository</Link>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
