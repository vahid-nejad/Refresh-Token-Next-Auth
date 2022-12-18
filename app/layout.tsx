"use client";
import "styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import AppBar from "./AppBar";
interface IProps {
  children: ReactNode;
}
export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
        <AppBar />
        <div className={"  h-screen "}>{children}</div>
      </body>
    </html>
  );
}
