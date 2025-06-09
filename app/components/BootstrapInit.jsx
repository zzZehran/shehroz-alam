"use client";

import { useEffect } from "react";

export default function BootstrapInit() {
  useEffect(() => {
    import("bootstrap");
  }, []);

  return null;
}
