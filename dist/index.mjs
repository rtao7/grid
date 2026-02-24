// src/types.ts
var DEFAULT_CONFIG = {
  columns: 12,
  gutter: 16,
  maxWidth: 2560,
  margin: 16
};

// src/components/GridOverlay.tsx
import { jsx } from "react/jsx-runtime";
function GridOverlay({
  columns = DEFAULT_CONFIG.columns,
  gutter = DEFAULT_CONFIG.gutter,
  maxWidth = DEFAULT_CONFIG.maxWidth,
  margin = DEFAULT_CONFIG.margin,
  visible = true,
  className
}) {
  if (!visible) return null;
  const containerStyle = {
    maxWidth: maxWidth > 0 ? `${maxWidth}px` : "100%",
    padding: `0 ${margin}px`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `0 ${gutter}px`
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-grid-overlay": "",
      className: `grid-overlay${className ? ` ${className}` : ""}`,
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsx("div", { className: "grid-overlay__container", style: containerStyle, children: Array.from({ length: columns }, (_, i) => /* @__PURE__ */ jsx("div", { className: "grid-overlay__column" }, i)) })
    }
  );
}

// src/components/GridControls.tsx
import { useCallback } from "react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var isMac = typeof navigator !== "undefined" && /Mac/.test(navigator.userAgent);
function Field({ label, value, min, max, step = 1, onChange }) {
  return /* @__PURE__ */ jsxs("div", { className: "grid-controls__field", children: [
    /* @__PURE__ */ jsx2("span", { className: "grid-controls__label", children: label }),
    /* @__PURE__ */ jsx2(
      "input",
      {
        type: "range",
        className: "grid-controls__slider",
        min,
        max,
        step,
        value,
        onChange: (e) => onChange(Number(e.target.value))
      }
    ),
    /* @__PURE__ */ jsx2(
      "input",
      {
        type: "number",
        className: "grid-controls__input",
        min,
        max,
        step,
        value,
        onChange: (e) => onChange(Number(e.target.value))
      }
    )
  ] });
}
function GridControls({
  config,
  setConfig,
  visible,
  toggle,
  position = "top-right",
  className
}) {
  const update = useCallback(
    (key) => (value) => {
      setConfig({ [key]: value });
    },
    [setConfig]
  );
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-grid-controls": "",
      className: `grid-controls grid-controls--${position}${className ? ` ${className}` : ""}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "grid-controls__header", children: [
          /* @__PURE__ */ jsx2("span", { className: "grid-controls__title", children: "Grid" }),
          /* @__PURE__ */ jsx2(
            "button",
            {
              className: "grid-controls__toggle",
              role: "switch",
              "aria-checked": visible,
              "aria-label": "Toggle grid visibility",
              onClick: toggle
            }
          )
        ] }),
        /* @__PURE__ */ jsx2(
          Field,
          {
            label: "Cols",
            value: config.columns,
            min: 1,
            max: 24,
            onChange: update("columns")
          }
        ),
        /* @__PURE__ */ jsx2(
          Field,
          {
            label: "Gutter",
            value: config.gutter,
            min: 0,
            max: 100,
            onChange: update("gutter")
          }
        ),
        /* @__PURE__ */ jsx2(
          Field,
          {
            label: "Width",
            value: config.maxWidth,
            min: 0,
            max: 2560,
            step: 10,
            onChange: update("maxWidth")
          }
        ),
        /* @__PURE__ */ jsx2(
          Field,
          {
            label: "Margin",
            value: config.margin,
            min: 0,
            max: 200,
            onChange: update("margin")
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid-controls__hint", children: [
          /* @__PURE__ */ jsx2("span", { className: "grid-controls__kbd", children: isMac ? "\u2318" : "Ctrl" }),
          " + ",
          /* @__PURE__ */ jsx2("span", { className: "grid-controls__kbd", children: "G" }),
          " to toggle"
        ] })
      ]
    }
  );
}

// src/hooks/useGridState.ts
import { useState, useCallback as useCallback2, useEffect } from "react";
function useGridState(initialConfig = {}) {
  const [config, setConfigState] = useState({
    ...DEFAULT_CONFIG,
    ...initialConfig
  });
  const [visible, setVisible] = useState(true);
  const setConfig = useCallback2((partial) => {
    setConfigState((prev) => ({ ...prev, ...partial }));
  }, []);
  const toggle = useCallback2(() => {
    setVisible((prev) => !prev);
  }, []);
  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === "g") {
        e.preventDefault();
        toggle();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggle]);
  return { config, setConfig, visible, toggle, setVisible };
}

// src/components/GridTool.tsx
import { Fragment, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function GridTool({
  initialConfig,
  position,
  overlayClassName,
  controlsClassName
}) {
  const { config, setConfig, visible, toggle } = useGridState(initialConfig);
  return /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx3(
      GridOverlay,
      {
        columns: config.columns,
        gutter: config.gutter,
        maxWidth: config.maxWidth,
        margin: config.margin,
        visible,
        className: overlayClassName
      }
    ),
    /* @__PURE__ */ jsx3(
      GridControls,
      {
        config,
        setConfig,
        visible,
        toggle,
        position,
        className: controlsClassName
      }
    )
  ] });
}
export {
  DEFAULT_CONFIG,
  GridControls,
  GridOverlay,
  GridTool,
  useGridState
};
//# sourceMappingURL=index.mjs.map