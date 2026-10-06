export default function ReportWaste() {
  const handleNonFunctionalAction = (e) => {
    e.preventDefault();
  };

  return (
    <div className="report-container">
      {/* Page Header */}
      <div className="report-header">
        <div className="header-meta">
          <span className="badge">Civic Incident Reporting</span>
          <span className="demo-pill">Frontend Demo Only</span>
        </div>
        <h1 className="page-heading">REPORT WASTE</h1>
        <p className="page-subheading">
          Document roadside dumping and flag recurring accumulation spots for municipal tracking.
        </p>
      </div>

      {/* Notice Banner */}
      <div className="demo-notice-bar">
        <span className="notice-icon">ℹ️</span>
        <div>
          <strong>Prototype Demonstration:</strong> Image upload and submissions are simulated. Below is an example report showing how SpotLess analyzes civic waste submissions.
        </div>
      </div>

      <div className="report-form-layout">
        {/* Large Image Upload Area (Non-functional demo) */}
        <section className="upload-section">
          <div className="upload-dropzone" onClick={handleNonFunctionalAction}>
            <div className="upload-icon-wrapper">
              {/* Camera / Upload SVG Illustration */}
              <svg
                className="upload-svg-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>

            <h3 className="upload-title">Visual Evidence</h3>
            <p className="upload-instruction">Drop photo here or select from camera roll</p>

            <button
              type="button"
              className="btn btn-secondary upload-demo-btn"
              onClick={handleNonFunctionalAction}
              aria-label="Upload Image (Demo Mode Disabled)"
            >
              Upload Image
            </button>

            <p className="upload-disclaimer">
              Demo mode — image upload is not connected.
            </p>
          </div>
        </section>

        {/* Pre-filled Demo Analysis Data */}
        <section className="analysis-section">
          <div className="analysis-card">
            <div className="analysis-card-header">
              <div>
                <span className="analysis-kicker">Analyzed Example Report</span>
                <h2 className="analysis-title">Incident Analysis Summary</h2>
              </div>
              <span className="status-chip status-reported">STATUS: REPORTED</span>
            </div>

            <div className="meta-grid">
              {/* Location */}
              <div className="meta-item location-item">
                <span className="meta-label">Location</span>
                <div className="location-row">
                  <div className="location-info">
                    <span className="geo-icon">📍</span>
                    <span className="location-text">Koramangala, Bengaluru</span>
                  </div>
                  <span className="tag-detected">Location detected</span>
                </div>
                <button
                  type="button"
                  className="link-btn-change"
                  onClick={handleNonFunctionalAction}
                >
                  Change location (Demo)
                </button>
              </div>

              {/* Waste Type */}
              <div className="meta-item">
                <span className="meta-label">Waste Type</span>
                <div className="meta-value-box">
                  <span className="type-badge">Mixed Waste</span>
                  <span className="type-note">Organic + dry recyclables combined</span>
                </div>
              </div>

              {/* Severity */}
              <div className="meta-item">
                <span className="meta-label">Severity Level</span>
                <div className="severity-row">
                  <span className="severity-badge-high">HIGH</span>
                  <span className="severity-desc">Immediate environmental & foot-traffic impact</span>
                </div>
              </div>

              {/* Priority Score */}
              <div className="meta-item">
                <span className="meta-label">Priority Score</span>
                <div className="score-wrapper">
                  <div className="score-header">
                    <span className="score-value">84 <small>/ 100</small></span>
                    <span className="score-tag">Elevated Urgency</span>
                  </div>
                  <div className="score-bar-track">
                    <div className="score-bar-fill" style={{ width: '84%' }}></div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="meta-item full-width">
                <span className="meta-label">Description</span>
                <p className="description-content">
                  "Large amount of mixed waste accumulated near roadside."
                </p>
              </div>
            </div>

            {/* Submission Action */}
            <div className="submit-section">
              <button
                type="button"
                className="btn btn-submit-demo"
                disabled
                aria-disabled="true"
              >
                SUBMIT REPORT
              </button>
              <p className="submit-note">
                Submission disabled in prototype mode. Pre-filled sample analysis is displayed for evaluation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
