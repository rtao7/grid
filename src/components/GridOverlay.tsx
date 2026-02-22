import React from "react";
import type { GridOverlayProps } from "../types";
import { DEFAULT_CONFIG } from "../types";

export function GridOverlay({
  columns = DEFAULT_CONFIG.columns,
  gutter = DEFAULT_CONFIG.gutter,
  maxWidth = DEFAULT_CONFIG.maxWidth,
  margin = DEFAULT_CONFIG.margin,
  visible = true,
  className,
}: GridOverlayProps) {
  if (!visible) return null;

  const containerStyle: React.CSSProperties = {
    maxWidth: maxWidth > 0 ? `${maxWidth}px` : "100%",
    padding: `0 ${margin}px`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `0 ${gutter}px`,
  };

  return (
    <div
      data-grid-overlay=""
      className={`grid-overlay${className ? ` ${className}` : ""}`}
      aria-hidden="true"
    >
      <div className="grid-overlay__container" style={containerStyle}>
        {Array.from({ length: columns }, (_, i) => (
          <div key={i} className="grid-overlay__column" />
        ))}
      </div>
    </div>
  );
}
