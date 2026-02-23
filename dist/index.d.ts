import * as react_jsx_runtime from 'react/jsx-runtime';

interface GridConfig {
    /** Number of columns in the grid */
    columns: number;
    /** Gap between columns in pixels */
    gutter: number;
    /** Maximum width of the grid container in pixels (0 = full width) */
    maxWidth: number;
    /** Horizontal margin on each side in pixels */
    margin: number;
}
interface GridState {
    config: GridConfig;
    setConfig: (config: Partial<GridConfig>) => void;
    visible: boolean;
    toggle: () => void;
    setVisible: (visible: boolean) => void;
}
interface GridOverlayProps {
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
type ControlsPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";
interface GridControlsProps {
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
interface GridToolProps {
    /** Initial grid configuration (uses sensible defaults if omitted) */
    initialConfig?: Partial<GridConfig>;
    /** Corner position of the controls panel */
    position?: ControlsPosition;
    /** Additional CSS class name for the overlay */
    overlayClassName?: string;
    /** Additional CSS class name for the controls */
    controlsClassName?: string;
}
declare const DEFAULT_CONFIG: GridConfig;

declare function GridTool({ initialConfig, position, overlayClassName, controlsClassName, }: GridToolProps): react_jsx_runtime.JSX.Element;

declare function GridOverlay({ columns, gutter, maxWidth, margin, visible, className, }: GridOverlayProps): react_jsx_runtime.JSX.Element | null;

declare function GridControls({ config, setConfig, visible, toggle, position, className, }: GridControlsProps): react_jsx_runtime.JSX.Element;

declare function useGridState(initialConfig?: Partial<GridConfig>): GridState;

export { type ControlsPosition, DEFAULT_CONFIG, type GridConfig, GridControls, type GridControlsProps, GridOverlay, type GridOverlayProps, type GridState, GridTool, type GridToolProps, useGridState };
