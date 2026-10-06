import React from "react";

const data = [
  { label: "Assigned", value: 42, color: "#5b79a7" },
  { label: "Cleaned", value: 56, color: "#287a4d" },
  { label: "Reported", value: 30, color: "#c78a20" },
];

const total = data.reduce((sum, item) => sum + item.value, 0);
const circumference = 2 * Math.PI * 42;

export default function StatusChart() {
  let accumulated = 0;

  return (
    <div>
      <h2 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#171a17" }}>Report Status</h2>
      <p style={{ margin: "6px 0 16px", fontSize: 13, color: "#74786f" }}>
        Current status of submitted waste reports.
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
        <div style={{ position: "relative", width: 170, height: 170, flex: "0 0 auto" }}>
          <svg width="170" height="170" viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)" }}>
            <circle cx="50" cy="50" r="42" fill="none" stroke="#ece6da" strokeWidth="13" />
            {data.map((item) => {
              const segment = (item.value / total) * circumference;
              const dashOffset = -accumulated;
              accumulated += segment;
              return (
                <circle
                  key={item.label}
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke={item.color}
                  strokeWidth="13"
                  strokeDasharray={`${segment} ${circumference - segment}`}
                  strokeDashoffset={dashOffset}
                  pathLength={circumference}
                />
              );
            })}
          </svg>
          <div style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeItems: "center",
            pointerEvents: "none"
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 850 }}>{total}</div>
              <div style={{ fontSize: 11, color: "#74786f", fontWeight: 800 }}>REPORTS</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {data.map((item) => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, display: "inline-block" }} />
              <span style={{ fontSize: 13, minWidth: 70 }}>{item.label}</span>
              <b style={{ fontSize: 13 }}>{item.value}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
