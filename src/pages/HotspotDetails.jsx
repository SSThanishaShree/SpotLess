import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { koramangalaHotspot } from '../data/mockData';

export default function HotspotDetails() {
  const { id } = useParams();
  const data = koramangalaHotspot;

  return (
    <div className="hotspot-details-container">
      {/* Back to Dashboard Navigation */}
      <div className="back-nav">
        <Link to="/dashboard" className="btn btn-secondary btn-back">
          ← Back to Dashboard
        </Link>
      </div>

      {/* Main Header Banner */}
      <section className="hotspot-header-card">
        <div className="header-top-row">
          <span className="badge badge-hotspot-title">Hotspot Analysis</span>
          <span className="priority-pill-critical">Critical Priority</span>
        </div>

        <h1 className="hotspot-title">{data.name}</h1>
        <p className="hotspot-subtitle">{data.subtitle}</p>

        {/* Highlight Key Metrics Badges */}
        <div className="key-metrics-badges">
          <div className="metric-badge">
            <span className="metric-badge-value">{data.reportsCount}</span>
            <span className="metric-badge-label">Reports</span>
          </div>
          <div className="metric-badge">
            <span className="metric-badge-value">{data.daysActive}</span>
            <span className="metric-badge-label">Days Active</span>
          </div>
          <div className="metric-badge badge-warning">
            <span className="metric-badge-value">{data.recurrence}</span>
          </div>
          <div className="metric-badge badge-danger">
            <span className="metric-badge-value">{data.priorityLevel}</span>
          </div>
        </div>
      </section>

      {/* Current Status Timeline Section */}
      <section className="hotspot-section-card">
        <div className="section-title-group">
          <span className="section-kicker">Lifecycle Progress</span>
          <h2 className="section-heading">STATUS TIMELINE</h2>
        </div>

        <div className="status-timeline-bar">
          {data.statusTimeline.map((step, index) => {
            const isCurrent = step === data.currentStatus;
            const isPassed = index < data.statusTimeline.indexOf(data.currentStatus);

            return (
              <div
                key={step}
                className={`timeline-step ${isCurrent ? 'step-current' : ''} ${isPassed ? 'step-passed' : ''}`}
              >
                <div className="step-node">
                  {isPassed ? '✓' : index + 1}
                </div>
                <div className="step-label">{step}</div>
                {isCurrent && <span className="current-indicator">Current State</span>}
              </div>
            );
          })}
        </div>
      </section>

      {/* Overview & Core Pattern Insight Grid */}
      <div className="hotspot-grid-two-col">
        {/* Overview Panel */}
        <section className="hotspot-section-card">
          <div className="section-title-group">
            <span className="section-kicker">Site Metadata</span>
            <h2 className="section-heading">Overview</h2>
          </div>

          <div className="overview-list">
            <div className="overview-row">
              <span className="overview-label">Location:</span>
              <span className="overview-value font-bold">{data.overview.location}</span>
            </div>
            <div className="overview-row">
              <span className="overview-label">Status:</span>
              <span className="badge badge-monitoring">{data.overview.status}</span>
            </div>
            <div className="overview-row">
              <span className="overview-label">Priority Score:</span>
              <div className="score-display">
                <span className="overview-value font-bold score-highlight">{data.overview.priorityScore}</span>
                <div className="score-mini-bar">
                  <div className="score-mini-fill" style={{ width: '84%' }}></div>
                </div>
              </div>
            </div>
            <div className="overview-row">
              <span className="overview-label">Waste Type:</span>
              <span className="overview-value type-tag">{data.overview.wasteType}</span>
            </div>
          </div>
        </section>

        {/* Pattern Insight & Description Panel */}
        <section className="hotspot-section-card accent-card">
          <div className="section-title-group">
            <span className="section-kicker">Pattern Detection</span>
            <h2 className="section-heading">Description</h2>
          </div>

          <blockquote className="pattern-quote">
            "{data.description}"
          </blockquote>

          {/* Important Message Callout */}
          <div className="pattern-callout-box">
            <div className="callout-header">
              <span className="callout-icon">⚡</span>
              <h3 className="callout-primary-text">{data.importantMessage}</h3>
            </div>
            <p className="callout-secondary-text">{data.followUpMessage}</p>
          </div>
        </section>
      </div>

      {/* Report History Visual Timeline Section */}
      <section className="hotspot-section-card">
        <div className="section-title-group">
          <span className="section-kicker">Chronological Log</span>
          <h2 className="section-heading">REPORT HISTORY</h2>
        </div>

        <div className="history-visual-timeline">
          {data.reportHistory.map((item, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {idx < data.reportHistory.length - 1 && <div className="marker-line"></div>}
              </div>
              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <span className="timeline-waste-type">{item.type}</span>
                <span className="timeline-status-badge">{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Is This Happening & Recommended Intervention Grid */}
      <div className="hotspot-grid-two-col">
        {/* Why Is This Happening? */}
        <section className="hotspot-section-card">
          <div className="section-title-group">
            <span className="section-kicker">Root Cause Analysis</span>
            <h2 className="section-heading">WHY IS THIS HAPPENING?</h2>
          </div>

          <ul className="factors-list">
            {data.contributingFactors.map((factor, idx) => (
              <li key={idx} className="factor-item">
                <span className="factor-bullet">•</span>
                <span className="factor-text">{factor}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Recommended Intervention */}
        <section className="hotspot-section-card intervention-card">
          <div className="intervention-header">
            <div className="section-title-group">
              <span className="section-kicker">Action Plan</span>
              <h2 className="section-heading">RECOMMENDED INTERVENTION</h2>
            </div>
            <div className="priority-badge-high">
              Priority: <strong>{data.recommendationPriority}</strong>
            </div>
          </div>

          <ul className="interventions-list">
            {data.recommendations.map((rec, idx) => (
              <li key={idx} className="intervention-item">
                <span className="intervention-check">✓</span>
                <span className="intervention-text">{rec}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
