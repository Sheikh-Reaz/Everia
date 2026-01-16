"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PathDetector() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.setAttribute("data-path", pathname);
  }, [pathname]);

  return null;
}
