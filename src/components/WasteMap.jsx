import React from "react";

const hotspots = [
  { id: "koramangala", name: "Koramangala", type: "Recurring", severity: "Critical", reports: 17, x: 44, y: 56 },
  { id: "indiranagar", name: "Indiranagar", type: "Recurring", severity: "High", reports: 9, x: 67, y: 38 },
  { id: "hsr", name: "HSR Layout", type: "New", severity: "Medium", reports: 4, x: 55, y: 76 },
  { id: "btm", name: "BTM Layout", type: "Recurring", severity: "High", reports: 11, x: 34, y: 72 },
  { id: "whitefield", name: "Whitefield", type: "New", severity: "Medium", reports: 3, x: 86, y: 43 },
];

const markerColors = {
  Critical: "#c74435",
  High: "#c78a20",
  Medium: "#9d9d25",
};

export default function WasteMap() {
  const goToHotspot = (id) => {
    if (id === "koramangala") {
      window.location.href = "/hotspot/koramangala";
    }
  };

  return (
    <div>
      <div style={{
        position: "relative",
        width: "100%",
        height: 390,
        overflow: "hidden",
        borderRadius: 18,
        border: "1px solid #ded8cd",
        background: "#e9e4d9"
      }}>
        <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="none" aria-label="SpotLess mock Bengaluru hotspot map">
          <rect x="0" y="0" width="100" height="100" fill="#e9e4d9" />

          <path d="M4 18 C25 10, 30 34, 51 24 S73 12, 97 20" fill="none" stroke="#cfc8ba" strokeWidth="2.4" />
          <path d="M-4 51 C15 39, 27 60, 47 48 S78 37, 104 52" fill="none" stroke="#d3ccbf" strokeWidth="2.8" />
          <path d="M2 82 C21 68, 36 91, 55 79 S78 65, 104 83" fill="none" stroke="#d0c9bc" strokeWidth="2.4" />
          <path d="M19 -4 C23 18, 18 37, 30 53 S34 79, 27 103" fill="none" stroke="#d6d0c4" strokeWidth="2.2" />
          <path d="M63 -5 C56 18, 72 35, 61 52 S56 82, 67 105" fill="none" stroke="#d6d0c4" strokeWidth="2.2" />

          <path d="M8 33 L25 28 L42 33 L54 26 L74 30 L92 27" fill="none" stroke="#f8f4ea" strokeWidth="1.6" />
          <path d="M12 65 L31 59 L50 66 L69 58 L88 64" fill="none" stroke="#f8f4ea" strokeWidth="1.6" />

          {hotspots.map((spot) => (
            <g
              key={spot.id}
              onClick={() => goToHotspot(spot.id)}
              role={spot.id === "koramangala" ? "button" : undefined}
              tabIndex={spot.id === "koramangala" ? 0 : undefined}
              onKeyDown={(e) => {
                if (spot.id === "koramangala" && (e.key === "Enter" || e.key === " ")) goToHotspot(spot.id);
              }}
              style={{ cursor: spot.id === "koramangala" ? "pointer" : "default" }}
            >
              <circle
                cx={spot.x}
                cy={spot.y}
                r={spot.id === "koramangala" ? 4.2 : 3.3}
                fill={markerColors[spot.severity]}
                stroke="#fffdf8"
                strokeWidth="1.2"
              />
              {spot.id === "koramangala" && (
                <circle cx={spot.x} cy={spot.y} r="7" fill="none" stroke={markerColors[spot.severity]} strokeWidth="0.9" opacity="0.35" />
              )}
            </g>
          ))}
        </svg>

        {hotspots.map((spot) => (
          <button
            key={spot.id}
            type="button"
            onClick={() => goToHotspot(spot.id)}
            style={{
              position: "absolute",
              left: `${spot.x}%`,
              top: `${spot.y - 14}%`,
              transform: "translate(-50%, -100%)",
              border: 0,
              background: spot.id === "koramangala" ? "#171a17" : "rgba(255,253,248,.92)",
              color: spot.id === "koramangala" ? "#fff" : "#282b28",
              borderRadius: 999,
              padding: "5px 8px",
              fontSize: 10,
              fontWeight: 850,
              boxShadow: "0 5px 15px rgba(23,26,23,.12)",
              cursor: spot.id === "koramangala" ? "pointer" : "default",
              whiteSpace: "nowrap",
              pointerEvents: spot.id === "koramangala" ? "auto" : "none"
            }}
            aria-label={`${spot.name}, ${spot.type}, ${spot.reports} reports`}
          >
            {spot.name}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 13, fontSize: 12, color: "#61665f" }}>
        <span><b style={{ color: "#c74435" }}>●</b> Critical</span>
        <span><b style={{ color: "#c78a20" }}>●</b> Recurring</span>
        <span><b style={{ color: "#9d9d25" }}>●</b> New</span>
        <span style={{ marginLeft: "auto" }}>Click Koramangala to inspect hotspot</span>
      </div>
    </div>
  );
}
