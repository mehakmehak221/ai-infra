"use client";

import { type ReactNode } from "react";
import { ScrollProgress } from "./ScrollProgress";

export function PageMotion({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollProgress />
      {children}
    </>
  );
}
