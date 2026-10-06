import React from "react";
import WasteMap from "../components/WasteMap";
import CaseTypeChart from "../components/CaseTypeChart";
import StatusChart from "../components/StatusChart";

const reports = [
  ["Koramangala", "Mixed Waste", "Critical", "Assigned"],
  ["Indiranagar", "Plastic Waste", "High", "Cleaned"],
  ["HSR Layout", "Construction Waste", "Medium", "Reported"],
  ["BTM Layout", "Mixed Waste", "High", "Assigned"],
  ["Whitefield", "Organic Waste", "Medium", "Cleaned"],
];

const severityClass = {
  Critical: "severity-critical",
  High: "severity-high",
  Medium: "severity-medium",
  Low: "severity-low",
};

const statusClass = {
  Assigned: "status-assigned",
  Cleaned: "status-cleaned",
  Reported: "status-reported",
};

function Badge({ children, className }) {
  return <span className={`badge ${className}`}>{children}</span>;
}

export default function Dashboard() {
  return (
    <div className="spotless-dashboard">
      <style>{`
        .spotless-dashboard {
          min-height: 100vh;
          background: #f6f1e7;
          color: #171a17;
          padding: 32px;
          box-sizing: border-box;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        .dashboard-shell { max-width: 1280px; margin: 0 auto; }
        .dashboard-header { margin-bottom: 24px; }
        .eyebrow {
          color: #287a4d;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .12em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .dashboard-title { margin: 0; font-size: clamp(30px, 4vw, 46px); line-height: 1; letter-spacing: -.04em; }
        .dashboard-subtitle { margin: 12px 0 0; color: #60655e; max-width: 680px; font-size: 15px; line-height: 1.6; }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          margin-bottom: 18px;
        }
        .stat-card {
          background: #fffdf8;
          border: 1px solid #e4ded1;
          border-radius: 18px;
          padding: 20px;
          box-shadow: 0 8px 24px rgba(31, 39, 32, .05);
        }
        .stat-value { font-size: 30px; font-weight: 850; letter-spacing: -.04em; }
        .stat-label { margin-top: 6px; color: #74786f; font-size: 12px; font-weight: 800; letter-spacing: .08em; }
        .dashboard-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.7fr) minmax(310px, 1fr);
          gap: 18px;
          margin-bottom: 18px;
        }
        .panel {
          background: #fffdf8;
          border: 1px solid #e4ded1;
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 8px 24px rgba(31, 39, 32, .05);
        }
        .panel-title { margin: 0; font-size: 18px; font-weight: 800; }
        .panel-subtitle { margin: 6px 0 16px; font-size: 13px; color: #74786f; }
        .charts-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-bottom: 18px;
        }
        .reports-table { width: 100%; border-collapse: collapse; }
        .reports-table th {
          text-align: left;
          padding: 12px 10px;
          font-size: 11px;
          letter-spacing: .08em;
          color: #7b7d76;
          text-transform: uppercase;
          border-bottom: 1px solid #e9e3d8;
        }
        .reports-table td {
          padding: 14px 10px;
          font-size: 13px;
          border-bottom: 1px solid #eee8de;
        }
        .reports-table tr:last-child td { border-bottom: 0; }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border-radius: 999px;
          padding: 6px 9px;
          font-size: 11px;
          font-weight: 800;
        }
        .severity-critical { background: #fce4e1; color: #9c3028; }
        .severity-high { background: #fff0cf; color: #8b5f00; }
        .severity-medium { background: #fff7d9; color: #7b6b0b; }
        .severity-low { background: #e4f4e9; color: #287a4d; }
        .status-assigned { background: #e6eefb; color: #365b8a; }
        .status-cleaned { background: #e2f4e9; color: #287a4d; }
        .status-reported { background: #fff0cf; color: #8b5f00; }
        @media (max-width: 950px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .dashboard-grid, .charts-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 620px) {
          .spotless-dashboard { padding: 18px; }
          .stats-grid { grid-template-columns: 1fr; }
          .reports-table { min-width: 680px; }
          .table-scroll { overflow-x: auto; }
        }
      `}</style>

      <div className="dashboard-shell">
        <header className="dashboard-header">
          <div className="eyebrow">SpotLess • SEE • TRACK • PREVENT</div>
          <h1 className="dashboard-title">Authority Dashboard</h1>
          <p className="dashboard-subtitle">
            Monitor waste reports, recurring hotspots, and cleanup progress across the city.
          </p>
        </header>

        <section className="stats-grid">
          <div className="stat-card"><div className="stat-value">128</div><div className="stat-label">TOTAL REPORTS</div></div>
          <div className="stat-card"><div className="stat-value">34</div><div className="stat-label">ACTIVE HOTSPOTS</div></div>
          <div className="stat-card"><div className="stat-value">12</div><div className="stat-label">CRITICAL</div></div>
          <div className="stat-card"><div className="stat-value">4.2 days</div><div className="stat-label">AVG. RESOLUTION</div></div>
        </section>

        <section className="dashboard-grid">
          <div className="panel">
            <h2 className="panel-title">Waste Hotspots</h2>
            <p className="panel-subtitle">Click a hotspot to view recurrence history and recommended intervention.</p>
            <WasteMap />
          </div>

          <div className="panel">
            <CaseTypeChart />
          </div>
        </section>

        <section className="charts-row">
          <div className="panel">
            <StatusChart />
          </div>

          <div className="panel">
            <h2 className="panel-title">Hotspot Snapshot</h2>
            <p className="panel-subtitle">The highest-priority recurring location right now.</p>
            <div style={{
              border: "1px solid #eadfce",
              borderRadius: 16,
              padding: 18,
              background: "#fbf6eb"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontSize: 21, fontWeight: 850 }}>Koramangala</div>
                  <div style={{ color: "#6e736c", fontSize: 13, marginTop: 5 }}>17 reports • 45 days</div>
                </div>
                <Badge className="severity-critical">Critical</Badge>
              </div>
              <div style={{ marginTop: 16, color: "#545951", fontSize: 13, lineHeight: 1.65 }}>
                High recurrence with low collection accessibility and high commercial activity.
              </div>
              <a
                href="/hotspot/koramangala"
                style={{
                  display: "inline-block",
                  marginTop: 16,
                  color: "#287a4d",
                  fontWeight: 800,
                  fontSize: 13,
                  textDecoration: "none"
                }}
              >
                View hotspot details →
              </a>
            </div>
          </div>
        </section>

        <section className="panel">
          <h2 className="panel-title">Recent Reports</h2>
          <p className="panel-subtitle">Latest waste reports requiring authority attention.</p>
          <div className="table-scroll">
            <table className="reports-table">
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Waste Type</th>
                  <th>Severity</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {reports.map(([location, type, severity, status]) => (
                  <tr key={`${location}-${type}`}>
                    <td style={{ fontWeight: 750 }}>{location}</td>
                    <td>{type}</td>
                    <td><Badge className={severityClass[severity]}>{severity}</Badge></td>
                    <td><Badge className={statusClass[status]}>{status}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
