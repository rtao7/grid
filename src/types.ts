export interface GridConfig {
  /** Number of columns in the grid */
  columns: number;
  /** Gap between columns in pixels */
  gutter: number;
  /** Maximum width of the grid container in pixels (0 = full width) */
  maxWidth: number;
  /** Horizontal margin on each side in pixels */
  margin: number;
}

export interface GridState {
  config: GridConfig;
  setConfig: (config: Partial<GridConfig>) => void;
  visible: boolean;
  toggle: () => void;
  setVisible: (visible: boolean) => void;
}

export interface GridOverlayProps {
  /** Number of columns */
  columns?: number;
  /** Gap between columns in pixels */
  gutter?: number;
  /** Maximum width of the grid container in pixels (0 = full width) */
  maxWidth?: number;
  /** Horizontal margin on each side in pixels */
  margin?: number;
  /** Whether the overlay is visible */
  visible?: boolean;
  /** Additional CSS class name */
  className?: string;
}

export type ControlsPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export interface GridControlsProps {
  /** Current grid configuration */
  config: GridConfig;
  /** Callback when any config value changes */
  setConfig: (config: Partial<GridConfig>) => void;
  /** Whether the overlay is visible */
  visible: boolean;
  /** Toggle overlay visibility */
  toggle: () => void;
  /** Corner position of the controls panel */
  position?: ControlsPosition;
  /** Additional CSS class name */
  className?: string;
}

export interface GridToolProps {
  /** Initial grid configuration (uses sensible defaults if omitted) */
  initialConfig?: Partial<GridConfig>;
  /** Corner position of the controls panel */
  position?: ControlsPosition;
  /** Additional CSS class name for the overlay */
  overlayClassName?: string;
  /** Additional CSS class name for the controls */
  controlsClassName?: string;
}

export const DEFAULT_CONFIG: GridConfig = {
  columns: 12,
  gutter: 20,
  maxWidth: 1440,
  margin: 8,
};
