"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Example } from "./components/Example";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start space-y-4 p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <ConnectButton />
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://buidlguidl.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Buidlguidl
          </a>
        </div>
      </div>
      <Example />
    </main>
  );
}
