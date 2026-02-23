"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  DEFAULT_CONFIG: () => DEFAULT_CONFIG,
  GridControls: () => GridControls,
  GridOverlay: () => GridOverlay,
  GridTool: () => GridTool,
  useGridState: () => useGridState
});
module.exports = __toCommonJS(index_exports);

// src/types.ts
var DEFAULT_CONFIG = {
  columns: 12,
  gutter: 20,
  maxWidth: 1440,
  margin: 0
};

// src/components/GridOverlay.tsx
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      "data-grid-overlay": "",
      className: `grid-overlay${className ? ` ${className}` : ""}`,
      "aria-hidden": "true",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-overlay__container", style: containerStyle, children: Array.from({ length: columns }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-overlay__column" }, i)) })
    }
  );
}

// src/components/GridControls.tsx
var import_react = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var isMac = typeof navigator !== "undefined" && /Mac/.test(navigator.userAgent);
function Field({ label, value, min, max, step = 1, onChange }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "grid-controls__field", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "grid-controls__label", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
  position = "bottom-right",
  className
}) {
  const update = (0, import_react.useCallback)(
    (key) => (value) => {
      setConfig({ [key]: value });
    },
    [setConfig]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      "data-grid-controls": "",
      className: `grid-controls grid-controls--${position}${className ? ` ${className}` : ""}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "grid-controls__header", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "grid-controls__title", children: "Grid" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Field,
          {
            label: "Cols",
            value: config.columns,
            min: 1,
            max: 24,
            onChange: update("columns")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Field,
          {
            label: "Gutter",
            value: config.gutter,
            min: 0,
            max: 100,
            onChange: update("gutter")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Field,
          {
            label: "Margin",
            value: config.margin,
            min: 0,
            max: 200,
            onChange: update("margin")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "grid-controls__hint", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "grid-controls__kbd", children: isMac ? "\u2318" : "Ctrl" }),
          " + ",
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "grid-controls__kbd", children: "G" }),
          " to toggle"
        ] })
      ]
    }
  );
}

// src/hooks/useGridState.ts
var import_react2 = require("react");
function useGridState(initialConfig = {}) {
  const [config, setConfigState] = (0, import_react2.useState)({
    ...DEFAULT_CONFIG,
    ...initialConfig
  });
  const [visible, setVisible] = (0, import_react2.useState)(true);
  const setConfig = (0, import_react2.useCallback)((partial) => {
    setConfigState((prev) => ({ ...prev, ...partial }));
  }, []);
  const toggle = (0, import_react2.useCallback)(() => {
    setVisible((prev) => !prev);
  }, []);
  (0, import_react2.useEffect)(() => {
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
var import_jsx_runtime3 = require("react/jsx-runtime");
function GridTool({
  initialConfig,
  position,
  overlayClassName,
  controlsClassName
}) {
  const { config, setConfig, visible, toggle } = useGridState(initialConfig);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DEFAULT_CONFIG,
  GridControls,
  GridOverlay,
  GridTool,
  useGridState
});
//# sourceMappingURL=index.js.map