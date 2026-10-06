import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="brand-logo">
          Spot<span>Less</span>
        </NavLink>
        <span className="brand-tagline">Spot it. Track it. Stop it.</span>
      </div>

      <nav className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/report"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Report Waste
        </NavLink>
        <NavLink
          to="/report-result"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Report Result
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/hotspot/koramangala"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Hotspot (Koramangala)
        </NavLink>
      </nav>
    </header>
  );
}
