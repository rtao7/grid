import { GridTool } from "tool-grid";
import "tool-grid/styles.css";

const demoStyles = {
  page: {
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(12, [col-start] 1fr)",
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
    gridColumn: "col-start / span 12",
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 1.6,
    color: "#666",
    marginBottom: 48,
    gridColumn: "col-start / span 8",
  },
  grid: {
    display: "grid",
    gridColumn: "col-start / span 12",
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
  return (
    <>
      <div style={demoStyles.page}>
        <h1 style={demoStyles.h1}>Grid Overlay</h1>
        <p style={demoStyles.subtitle}>
          A toggleable grid overlay for design QA. Adjust columns, gutters,
          max-width, and margins — right in the browser. Press <kbd>Cmd+G</kbd>{" "}
          to toggle.
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
      <GridTool />
    </>
  );
}
