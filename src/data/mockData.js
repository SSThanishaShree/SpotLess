// Shared mock/demo data for SpotLess frontend prototype

export const dashboardStats = {
  totalReports: 128,
  activeHotspots: 34,
  criticalHotspots: 12,
  averageResolutionDays: 4.2
};

export const hotspots = [
  {
    id: 'koramangala',
    name: 'Koramangala',
    location: 'Koramangala, Bengaluru',
    wasteType: 'Mixed Waste',
    severity: 'Critical',
    status: 'Under Monitoring',
    reportsCount: 17,
    priorityScore: 84
  },
  {
    id: 'indiranagar',
    name: 'Indiranagar',
    location: 'Indiranagar 100ft Road, Bengaluru',
    wasteType: 'Plastic Waste',
    severity: 'High',
    status: 'Cleaned',
    reportsCount: 9,
    priorityScore: 72
  },
  {
    id: 'hsr-layout',
    name: 'HSR Layout',
    location: 'HSR Layout Sector 1, Bengaluru',
    wasteType: 'Construction Waste',
    severity: 'Medium',
    status: 'Reported',
    reportsCount: 4,
    priorityScore: 58
  }
];

export const koramangalaHotspot = {
  id: 'koramangala',
  name: 'KORAMANGALA',
  subtitle: 'Recurring Waste Hotspot',
  reportsCount: 17,
  daysActive: 45,
  recurrence: 'High Recurrence',
  priorityLevel: 'Critical Priority',
  overview: {
    location: 'Koramangala, Bengaluru',
    status: 'Under Monitoring',
    priorityScore: '84 / 100',
    wasteType: 'Mixed Waste'
  },
  description:
    'This location has received repeated waste reports over the past 45 days, indicating a recurring waste pattern rather than an isolated incident.',
  reportHistory: [
    { date: '12 Sept', type: 'Mixed Waste', status: 'Reported' },
    { date: '18 Sept', type: 'Plastic Waste', status: 'Reported' },
    { date: '25 Sept', type: 'Mixed Waste', status: 'Reported' },
    { date: '2 Oct', type: 'Mixed Waste', status: 'Reported' },
    { date: '6 Oct', type: 'Construction Waste', status: 'Reported' }
  ],
  contributingFactors: [
    '650m from nearest collection point',
    'High commercial activity',
    'Low collection frequency',
    'High pedestrian traffic'
  ],
  recommendations: [
    'Increase collection frequency during peak commercial hours.',
    'Improve waste disposal accessibility near the hotspot.',
    'Continue monitoring the location for 30 days.',
    'Investigate whether a new collection point is required.'
  ],
  recommendationPriority: 'HIGH',
  statusTimeline: ['Reported', 'Assigned', 'Cleaned', 'Under Monitoring'],
  currentStatus: 'Under Monitoring',
  importantMessage: 'This is not just one complaint. This is a recurring pattern.',
  followUpMessage:
    'SpotLess tracks repeated reports at the same location so authorities can address the underlying cause instead of repeatedly cleaning the same area.'
};

export const reportsList = [
  { id: 1, location: 'Koramangala', type: 'Mixed Waste', severity: 'Critical', status: 'Assigned' },
  { id: 2, location: 'Indiranagar', type: 'Plastic Waste', severity: 'High', status: 'Cleaned' },
  { id: 3, location: 'HSR Layout', type: 'Construction Waste', severity: 'Medium', status: 'Reported' },
  { id: 4, location: 'BTM Layout', type: 'Mixed Waste', severity: 'High', status: 'Assigned' },
  { id: 5, location: 'Whitefield', type: 'Organic Waste', severity: 'Medium', status: 'Cleaned' }
];

export const mockStats = {
  totalReports: 128,
  clearedHotspots: 89,
  activeHotspots: 34,
  criticalHotspots: 12,
  averageResolution: '4.2 days',
  communityVolunteers: 320
};

export const mockHotspots = hotspots;

export default {
  dashboardStats,
  hotspots,
  koramangalaHotspot,
  reportsList,
  mockStats,
  mockHotspots
};
