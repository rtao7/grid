import React from "react";
import type { GridToolProps } from "../types";
import { GridOverlay } from "./GridOverlay";
import { GridControls } from "./GridControls";
import { useGridState } from "../hooks/useGridState";

export function GridTool({
  initialConfig,
  position,
  overlayClassName,
  controlsClassName,
}: GridToolProps) {
  const { config, setConfig, visible, toggle } = useGridState(initialConfig);

  return (
    <>
      <GridOverlay
        columns={config.columns}
        gutter={config.gutter}
        maxWidth={config.maxWidth}
        margin={config.margin}
        visible={visible}
        className={overlayClassName}
      />
      <GridControls
        config={config}
        setConfig={setConfig}
        visible={visible}
        toggle={toggle}
        position={position}
        className={controlsClassName}
      />
    </>
  );
}
