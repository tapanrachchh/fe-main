"use client";

import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { useNavigation } from "@/provider/navigation-provider";

import { FacebookIcon, InstagramIcon, YoutubeIcon } from "../icons";
import { Button } from "../ui/button";

const ThemeButton = dynamic(() => import("./theme-button"), { ssr: false });

export default function MobileNavigation() {
  const { isOpen, toggleNavigation } = useNavigation();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        toggleNavigation(); // Close the menu when "Escape" is pressed
      }

      // Trap focus within the navigation when it's open
      if (event.key === "Tab" && isOpen && navRef.current) {
        const focusableElements = navRef.current.querySelectorAll(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        if (event.shiftKey) {
          // If Shift + Tab is pressed, move focus to the last focusable element if on the first one
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          // If Tab is pressed, move focus to the first focusable element if on the last one
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.body.style.overflow = isOpen ? "hidden" : "auto";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, toggleNavigation]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          ref={navRef}
          className="fixed top-0 z-40 h-screen w-full bg-background/90 py-20 backdrop-blur-md"
          variants={{
            open: {
              translateY: 0,
            },
            close: {
              translateY: "-100%",
            },
          }}
          initial="close"
          transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
          animate="open"
          exit="close"
        >
          <ul className="w-full space-y-3 px-5 py-8">
            <li className="w-full py-3 text-xl font-medium text-text">
              <Link
                href="/"
                className="block"
                onClick={() => toggleNavigation()}
              >
                Home
              </Link>
            </li>
            <li className="w-full py-3 text-xl font-medium text-text">
              <Link
                href="/events"
                className="block"
                onClick={() => toggleNavigation()}
              >
                Events
              </Link>
            </li>
            <li className="w-full py-3 text-xl font-medium text-text">
              <Link
                href="/about-us"
                className="block"
                onClick={() => toggleNavigation()}
              >
                About
              </Link>
            </li>
            <li className="w-full py-3 text-xl font-medium text-text">
              <Link
                href="/contact-us"
                className="block"
                onClick={() => toggleNavigation()}
              >
                Contact
              </Link>
            </li>

            <li>
              <Button asChild>
                <Link href="/request-movie" onClick={() => toggleNavigation()}>
                  Request Movie
                </Link>
              </Button>
            </li>
          </ul>
          <div className="flex items-center gap-4 px-5">
            <Link
              href="https://www.facebook.com/WeAreFanOfAction/"
              aria-label="Facebook"
              target="_blank"
            >
              <FacebookIcon className="size-6 fill-text" />
            </Link>
            <Link
              href="https://www.instagram.com/fanofaction"
              aria-label="Instagram"
              target="_blank"
            >
              <InstagramIcon className="size-6 fill-text" />
            </Link>
            <Link
              href="https://www.youtube.com/@WeAreFanOfAction"
              aria-label="Youtube"
              target="_blank"
            >
              <YoutubeIcon className="size-6 fill-text" />
            </Link>
          </div>

          <div className="absolute bottom-24 right-6 [&>button]:!border-foreground [&>div]:border-foreground [&>svg]:fill-foreground [&>svg]:stroke-foreground">
            <ThemeButton />
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
