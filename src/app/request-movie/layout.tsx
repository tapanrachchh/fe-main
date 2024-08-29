import React from "react";

import PageLayout from "@/components/layout/page-layout";

export default function RequestMovieLayout({
  children,
}: React.PropsWithChildren) {
  return <PageLayout>{children}</PageLayout>;
}
