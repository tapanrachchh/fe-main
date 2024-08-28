import React from "react";
import Link from "next/link";

import { LogoIcon } from "../icons";

export default function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-md bg-background/50 z-50">
      <div className="container">
        <div className="flex items-center justify-between py-3">
          <Link
            href="/"
            className="rounded-full focus:outline-none focus:ring-0"
          >
            <LogoIcon className="size-12" />
          </Link>

          <div className="border-[1px] flex flex-col gap-1 border-secondary dark:border-primary rounded-full px-2 py-3.5">
            <span className="h-[2px] rounded-full inline-block w-5 bg-primary"></span>
            <span className="h-[2px] rounded-full inline-block w-5 bg-primary"></span>
          </div>
        </div>
      </div>
    </header>
  );
}