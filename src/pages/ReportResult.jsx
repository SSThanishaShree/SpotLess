import { Link } from 'react-router-dom';

export default function ReportResult() {
  return (
    <div className="report-container">
      <div className="page-card text-center-card">
        <div className="badge">Prototype Reference</div>
        <h2 className="result-title">Report Result</h2>
        <p className="description">
          In this frontend prototype, simulated report analysis is displayed directly on the Report Waste view.
        </p>

        <div className="placeholder-box">
          <p>
            This route (<code>/report-result</code>) is preserved for future backend confirmation workflows.
          </p>
          <div className="placeholder-actions">
            <Link to="/report" className="btn btn-primary">
              View Sample Report
            </Link>
            <Link to="/dashboard" className="btn btn-secondary">
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
