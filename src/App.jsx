import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ReportWaste from './pages/ReportWaste';
import ReportResult from './pages/ReportResult';
import Dashboard from './pages/Dashboard';
import HotspotDetails from './pages/HotspotDetails';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<ReportWaste />} />
            <Route path="/report-result" element={<ReportResult />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/hotspot/koramangala" element={<HotspotDetails />} />
            <Route path="/hotspot/:id" element={<HotspotDetails />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
