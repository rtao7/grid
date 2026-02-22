import React, { useCallback } from "react";
import type { GridControlsProps, GridConfig } from "./types";

const isMac =
  typeof navigator !== "undefined" && /Mac/.test(navigator.userAgent);

interface FieldProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}

function Field({ label, value, min, max, step = 1, onChange }: FieldProps) {
  return (
    <div className="grid-controls__field">
      <span className="grid-controls__label">{label}</span>
      <input
        type="range"
        className="grid-controls__slider"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <input
        type="number"
        className="grid-controls__input"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

export function GridControls({
  config,
  setConfig,
  visible,
  toggle,
  position = "bottom-right",
  className,
}: GridControlsProps) {
  const update = useCallback(
    (key: keyof GridConfig) => (value: number) => {
      setConfig({ [key]: value });
    },
    [setConfig]
  );

  return (
    <div
      data-grid-controls=""
      className={`grid-controls grid-controls--${position}${className ? ` ${className}` : ""}`}
    >
      <div className="grid-controls__header">
        <span className="grid-controls__title">Grid</span>
        <button
          className="grid-controls__toggle"
          role="switch"
          aria-checked={visible}
          aria-label="Toggle grid visibility"
          onClick={toggle}
        />
      </div>

      <Field
        label="Cols"
        value={config.columns}
        min={1}
        max={24}
        onChange={update("columns")}
      />
      <Field
        label="Gutter"
        value={config.gutter}
        min={0}
        max={100}
        onChange={update("gutter")}
      />
      <Field
        label="Width"
        value={config.maxWidth}
        min={0}
        max={2560}
        step={10}
        onChange={update("maxWidth")}
      />
      <Field
        label="Margin"
        value={config.margin}
        min={0}
        max={200}
        onChange={update("margin")}
      />

      <div className="grid-controls__hint">
        <span className="grid-controls__kbd">{isMac ? "⌘" : "Ctrl"}</span>
        {" + "}
        <span className="grid-controls__kbd">G</span>
        {" to toggle"}
      </div>
    </div>
  );
}
