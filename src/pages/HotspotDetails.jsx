import { useParams } from 'react-router-dom';

export default function HotspotDetails() {
  const { id } = useParams();
  const locationName = id ? id.charAt(0).toUpperCase() + id.slice(1) : 'Koramangala';

  return (
    <div className="page-card">
      <div className="badge">Hotspot</div>
      <h2>Hotspot Details: {locationName}</h2>
      <p className="description">Detailed status and history for hotspot location: /hotspot/{id || 'koramangala'}</p>
      <div className="placeholder-box">
        <p>Hotspot Details View Placeholder</p>
      </div>
    </div>
  );
}
