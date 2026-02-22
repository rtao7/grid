import { useState, useCallback, useEffect } from "react";
import type { GridConfig, GridState } from "../types";
import { DEFAULT_CONFIG } from "../types";

export function useGridState(
  initialConfig: Partial<GridConfig> = {}
): GridState {
  const [config, setConfigState] = useState<GridConfig>({
    ...DEFAULT_CONFIG,
    ...initialConfig,
  });
  const [visible, setVisible] = useState(true);

  const setConfig = useCallback((partial: Partial<GridConfig>) => {
    setConfigState((prev) => ({ ...prev, ...partial }));
  }, []);

  const toggle = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
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
