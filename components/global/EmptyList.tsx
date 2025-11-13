import { cn } from "@/lib/utils";
import React from "react";

type EmptyListProps = {
  heading?: string;
  className?: string;
};

export default function EmptyList({
  heading = "No items found.",
  className,
}: EmptyListProps) {
  return <h2 className={cn("text-xl", className)}>{heading}</h2>;
}
