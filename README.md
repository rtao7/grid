# tool-grid

A toggleable grid overlay for design QA. Adjust columns, gutters, max-width, and margins — right in the browser.

## Install

```bash
npm install tool-grid
```

## Quick Start

Drop in `<GridTool />` — no props needed.

```tsx
import { GridTool } from "tool-grid";
import "tool-grid/styles.css";

function App() {
  return (
    <>
      <YourApp />
      <GridTool />
    </>
  );
}
```

Press **Cmd+G** (Mac) or **Ctrl+G** (Windows/Linux) to toggle visibility.

### With custom defaults

```tsx
<GridTool
  initialConfig={{ columns: 6, gutter: 16, maxWidth: 1280 }}
  position="top-left"
/>
```

## API

### `<GridTool />`

All-in-one component. Renders the grid overlay and controls panel with built-in state management.

| Prop | Type | Default | Description |
|---|---|---|---|
| `initialConfig` | `Partial<GridConfig>` | `{}` | Initial grid settings |
| `position` | `ControlsPosition` | `"bottom-right"` | Panel corner placement |
| `overlayClassName` | `string` | — | CSS class for the overlay |
| `controlsClassName` | `string` | — | CSS class for the controls |

---

### Advanced: individual components

For full control over state and rendering, use the pieces directly.

#### `useGridState(initialConfig?)`

React hook that manages grid configuration state and visibility.

```ts
const { config, setConfig, visible, toggle, setVisible } = useGridState({
  columns: 12,   // default: 12
  gutter: 20,    // default: 20 (px)
  maxWidth: 1440, // default: 1440 (px, 0 = full width)
  margin: 0,     // default: 0 (px)
});
```

**Returns:**

| Property | Type | Description |
|---|---|---|
| `config` | `GridConfig` | Current grid configuration |
| `setConfig` | `(partial: Partial<GridConfig>) => void` | Update one or more config values |
| `visible` | `boolean` | Whether the overlay is visible |
| `toggle` | `() => void` | Toggle visibility |
| `setVisible` | `(visible: boolean) => void` | Set visibility directly |

#### `<GridOverlay />`

Renders the column overlay. Non-interactive (`pointer-events: none`).

| Prop | Type | Default | Description |
|---|---|---|---|
| `columns` | `number` | `12` | Number of columns |
| `gutter` | `number` | `20` | Gap between columns (px) |
| `maxWidth` | `number` | `1440` | Container max-width (px, 0 = full) |
| `margin` | `number` | `0` | Horizontal margin (px) |
| `visible` | `boolean` | `true` | Show/hide the overlay |
| `className` | `string` | — | Additional CSS class |

#### `<GridControls />`

Floating panel with sliders and inputs to adjust the grid.

| Prop | Type | Default | Description |
|---|---|---|---|
| `config` | `GridConfig` | — | Current grid configuration (required) |
| `setConfig` | `(partial) => void` | — | Config update callback (required) |
| `visible` | `boolean` | — | Current visibility state (required) |
| `toggle` | `() => void` | — | Toggle callback (required) |
| `position` | `ControlsPosition` | `"bottom-right"` | Panel corner placement |
| `className` | `string` | — | Additional CSS class |

**`ControlsPosition`**: `"top-left"` | `"top-right"` | `"bottom-left"` | `"bottom-right"`

## Theming with CSS Variables

Override these custom properties to theme the overlay and controls panel.

### Overlay

```css
[data-grid-overlay] {
  --grid-color: rgba(255, 0, 0, 0.1);       /* column fill */
  --grid-outline-color: rgba(255, 0, 0, 0.25); /* column border */
  --grid-z-index: 9999;                       /* stacking order */
}
```

### Controls Panel

```css
[data-grid-controls] {
  --grid-controls-bg: #1a1a1a;        /* panel background */
  --grid-controls-text: #e5e5e5;      /* text color */
  --grid-controls-border: #333333;    /* border color */
  --grid-controls-accent: #3b82f6;    /* active/accent color */
  --grid-controls-input-bg: #2a2a2a;  /* input background */
  --grid-controls-radius: 10px;       /* panel border radius */
}
```

### Example: Blue Grid on Light Theme

```css
[data-grid-overlay] {
  --grid-color: rgba(59, 130, 246, 0.08);
  --grid-outline-color: rgba(59, 130, 246, 0.2);
}

[data-grid-controls] {
  --grid-controls-bg: #ffffff;
  --grid-controls-text: #111111;
  --grid-controls-border: #e5e5e5;
  --grid-controls-input-bg: #f5f5f5;
}
```

## TypeScript

All types are exported:

```ts
import type {
  GridConfig,
  GridState,
  GridToolProps,
  GridOverlayProps,
  GridControlsProps,
  ControlsPosition,
} from "tool-grid";
```

## License

MIT
