import { GridOverlay, GridControls, useGridState } from "grid-kit";
import "grid-kit/styles.css";

const demoStyles = {
  page: {
    maxWidth: 960,
    margin: "0 auto",
    padding: "80px 24px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  h1: {
    fontSize: 48,
    fontWeight: 700,
    letterSpacing: "-0.03em",
    lineHeight: 1.1,
    marginBottom: 16,
    color: "#111",
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 1.6,
    color: "#666",
    maxWidth: 560,
    marginBottom: 48,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20,
    marginBottom: 48,
  },
  card: {
    background: "#f5f5f5",
    borderRadius: 12,
    padding: 24,
    minHeight: 140,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 8,
    color: "#333",
  },
  cardText: {
    fontSize: 13,
    lineHeight: 1.5,
    color: "#888",
  },
} as const;

export function App() {
  const { config, setConfig, visible, toggle } = useGridState({
    columns: 12,
    gutter: 20,
    maxWidth: 1440,
    margin: 0,
  });

  return (
    <>
      <div style={demoStyles.page}>
        <h1 style={demoStyles.h1}>Grid Overlay</h1>
        <p style={demoStyles.subtitle}>
          A toggleable grid overlay for design QA. Adjust columns, gutters,
          max-width, and margins — right in the browser. Press{" "}
          <kbd>Cmd+G</kbd> to toggle.
        </p>

        <div style={demoStyles.grid}>
          {["Columns", "Gutters", "Max Width"].map((title) => (
            <div key={title} style={demoStyles.card}>
              <div style={demoStyles.cardTitle}>{title}</div>
              <div style={demoStyles.cardText}>
                Adjust {title.toLowerCase()} using the controls panel in the
                bottom-right corner to see the grid update in real-time.
              </div>
            </div>
          ))}
        </div>
      </div>

      <GridOverlay
        columns={config.columns}
        gutter={config.gutter}
        maxWidth={config.maxWidth}
        margin={config.margin}
        visible={visible}
      />
      <GridControls
        config={config}
        setConfig={setConfig}
        visible={visible}
        toggle={toggle}
      />
    </>
  );
}
