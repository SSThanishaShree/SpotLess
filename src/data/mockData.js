// Mock data placeholders for SpotLess prototype

export const mockHotspots = [
  {
    id: 'koramangala',
    name: 'Koramangala 5th Block',
    severity: 'High',
    reportsCount: 18,
    status: 'Pending Clearance',
    coordinates: { lat: 12.9352, lng: 77.6245 }
  },
  {
    id: 'indiranagar',
    name: 'Indiranagar 100ft Road',
    severity: 'Medium',
    reportsCount: 9,
    status: 'In Progress',
    coordinates: { lat: 12.9784, lng: 77.6408 }
  }
];

export const mockStats = {
  totalReports: 142,
  clearedHotspots: 89,
  activeHotspots: 14,
  communityVolunteers: 320
};
