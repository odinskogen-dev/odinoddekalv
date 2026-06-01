"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Subtle, calm reveal: fade + slight upward motion when scrolled into view.
 * Respects prefers-reduced-motion (handled globally in CSS, and motion's
 * own reduced-motion support).
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
