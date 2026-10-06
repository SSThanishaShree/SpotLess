import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-badge">Civic Waste Intelligence • Prototype</div>
        <h1 className="hero-brand">SPOTLESS</h1>
        <p className="hero-tagline">"Spot it. Track it. Stop it."</p>
        <p className="hero-supporting">
          Identify waste. Track recurring hotspots. Prevent them from coming back.
        </p>

        <div className="hero-actions">
          <Link to="/report" className="btn btn-primary">
            Report Waste
          </Link>
          <Link to="/dashboard" className="btn btn-secondary">
            View Dashboard
          </Link>
        </div>
      </section>

      {/* How SpotLess Works Section */}
      <section className="section-block">
        <div className="section-header">
          <span className="section-kicker">Municipal Workflow</span>
          <h2 className="section-title">How SpotLess Works</h2>
          <p className="section-desc">
            SpotLess turns individual waste reports into city-level insights, shifting civic management from reactive cleanups to systematic prevention.
          </p>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-num">01</div>
            <h3 className="step-title">Report</h3>
            <p className="step-text">
              Citizens and sanitation workers flag roadside dumping with geotagged visual reports.
            </p>
          </div>

          <div className="step-card">
            <div className="step-num">02</div>
            <h3 className="step-title">Analyze</h3>
            <p className="step-text">
              Incidents are categorized by waste type, severity, and urgency score to prioritize sanitation crews.
            </p>
          </div>

          <div className="step-card">
            <div className="step-num">03</div>
            <h3 className="step-title">Track</h3>
            <p className="step-text">
              Chronic dumping zones are clustered spatially to detect repeating hotspot patterns across wards.
            </p>
          </div>

          <div className="step-card">
            <div className="step-num">04</div>
            <h3 className="step-title">Prevent</h3>
            <p className="step-text">
              City officials deploy targeted bins, collection scheduling, and enforcement to permanently stop waste accumulation.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section using DEMO DATA */}
      <section className="section-block stats-section">
        <div className="section-header-compact">
          <div className="section-kicker">City-Wide Metrics</div>
          <h2 className="section-title">Civic Impact at a Glance</h2>
          <div className="demo-badge">Demo Data • Prototype Pilot</div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number">128</span>
            <span className="stat-label">Reports Logged</span>
            <span className="stat-note">Across monitored pilot wards</span>
          </div>

          <div className="stat-card">
            <span className="stat-number">34</span>
            <span className="stat-label">Active Hotspots</span>
            <span className="stat-note">Flagged for recurring dumping</span>
          </div>

          <div className="stat-card stat-critical">
            <span className="stat-number">12</span>
            <span className="stat-label">Critical Cases</span>
            <span className="stat-note">High priority remediation</span>
          </div>

          <div className="stat-card">
            <span className="stat-number">4.2 <small>days</small></span>
            <span className="stat-label">Avg. Resolution</span>
            <span className="stat-note">From detection to clearance</span>
          </div>
        </div>
      </section>

      {/* Core Value Section */}
      <section className="section-block value-section">
        <div className="value-card">
          <div className="value-badge">Our Mission</div>
          <h2 className="value-heading">Beyond cleanup. Towards prevention.</h2>
          <p className="value-body">
            Treating every citizen complaint as an isolated incident creates endless cycles of temporary cleanup. SpotLess empowers municipal authorities to identify where, why, and how often waste returns—addressing root infrastructure gaps so public spaces stay permanently clean.
          </p>

          <div className="value-comparison">
            <div className="comparison-box conventional">
              <h4>Conventional Sanitation</h4>
              <p>Clean up complaints as one-off tasks with no historical awareness or recurrence tracking.</p>
            </div>
            <div className="comparison-box spotless-approach">
              <h4>SpotLess Approach</h4>
              <p>Map recurring dumping clusters, analyze root waste streams, and deploy preventive urban solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Action Footer Callout */}
      <section className="cta-banner">
        <div>
          <h3>Ready to explore the prototype?</h3>
          <p>Test the report analysis interface or inspect city-wide hotspot records.</p>
        </div>
        <div className="cta-actions">
          <Link to="/report" className="btn btn-primary">
            Report Waste Demo
          </Link>
          <Link to="/dashboard" className="btn btn-secondary-light">
            Go to Dashboard
          </Link>
        </div>
      </section>
    </div>
  );
}
