import React from "react";

import { IconType } from "./types";

export function YoutubeIcon({ size, className }: IconType) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.67375 2.95036C8.38975 2.79607 10.1726 2.66064 11.9983 2.66064C13.824 2.66064 15.6069 2.79436 17.3212 2.95207C20.1806 3.20922 22.56 5.45322 22.896 8.32807C23.0366 9.51436 23.1412 10.7418 23.1412 12.0001C23.1412 13.2584 23.0349 14.4858 22.896 15.6721C22.56 18.5469 20.1806 20.7892 17.3212 21.0498C15.6069 21.2041 13.824 21.3395 11.9983 21.3395C10.1726 21.3395 8.38975 21.2058 6.67375 21.0481C3.81604 20.7926 1.43833 18.5486 1.0989 15.6738C0.946303 14.455 0.865022 13.2283 0.855469 12.0001C0.855469 10.7418 0.961754 9.51436 1.0989 8.32807C1.43661 5.45322 3.81604 3.21093 6.67375 2.95036ZM16.5138 12.0001C16.5138 13.2755 13.1726 15.2658 10.7743 16.5309C9.66861 17.1138 8.3829 16.2961 8.3829 15.0464V8.95379C8.3829 7.70236 9.66861 6.88636 10.7743 7.46922C13.1726 8.73436 16.5138 10.7264 16.5138 12.0001Z"
        fill="white"
      />
    </svg>
  );
}