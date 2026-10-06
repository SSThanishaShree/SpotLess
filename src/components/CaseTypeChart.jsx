import React from "react";

const data = [
  { label: "Critical", value: 12 },
  { label: "Recurring", value: 34 },
  { label: "New", value: 82 },
];

export default function CaseTypeChart() {
  const max = Math.max(...data.map((item) => item.value));

  return (
    <div>
      <h2 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#171a17" }}>Case Overview</h2>
      <p style={{ margin: "6px 0 18px", fontSize: 13, color: "#74786f" }}>
        Current hotspot classification across reported cases.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {data.map((item) => (
          <div key={item.label}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7, fontSize: 13 }}>
              <span style={{ fontWeight: 750 }}>{item.label}</span>
              <span style={{ fontWeight: 850 }}>{item.value}</span>
            </div>
            <div style={{ height: 13, background: "#ece6da", borderRadius: 999, overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  width: `${(item.value / max) * 100}%`,
                  background: item.label === "Critical" ? "#c74435" : item.label === "Recurring" ? "#c78a20" : "#6fa678",
                  borderRadius: 999,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
