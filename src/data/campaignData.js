export const data = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  campaignName: [
    'MacBook Pro 15 Retina Touch',
    'iPhone 12 Pro Max',
    'Apple Watch Series 6',
    'iPad Pro 2021'
  ][i % 4],
  createdBy: ['Partner', 'Admin'][i % 2],
  createdAt: [
    new Date('2020-08-12')
      .toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      })
      .split(' ')
      .join('/')
  ][i % 1],
  start: [
    new Date('2020-08-18')
      .toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      })
      .split(' ')
      .join('/')
  ][i % 1],
  end: [
    new Date('2020-08-28')
      .toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      })
      .split(' ')
      .join('/')
  ][i % 1],
  campaignUsage: ['1,200/ 2,020'][i % 1]
}));
