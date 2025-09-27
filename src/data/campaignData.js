export const data = Array.from({ length: 12 }, (_, i) => {
  const names = [
    'MacBook Pro 15 Retina Touch',
    'iPhone 12 Pro Max',
    'Apple Watch Series 6',
    'iPad Pro 2021',
    'AirPods Pro',
    'Apple TV 4K',
  ];
  const creators = ['Partner', 'Admin'];
  const statuses = ['Active', 'Pending', 'Completed', 'Expired'];
  const rewards = [
    '₦5,000 Gift Card',
    '₦10,000 Shopping Voucher',
    'Free iPhone Case',
    'Discount Coupon',
    '₦50,000 Cash Prize',
  ];

  const createdAt = new Date(2020, 7, 12 + (i % 5));
  const start = new Date(2020, 7, 18 + (i % 5));
  const end = new Date(2020, 7, 28 + (i % 5));

  return {
    id: i + 1,
    campaignName: names[i % names.length],
    description: `This is a promotional campaign for ${names[i % names.length]}. 
      Participate to stand a chance of winning exciting rewards.`,
    createdBy: creators[i % creators.length],
    createdAt: createdAt.toLocaleDateString('en-GB'),
    start: start.toLocaleDateString('en-GB'),
    end: end.toLocaleDateString('en-GB'),
    campaignUsage: `${1000 + i * 120} / ${2000 + i * 150}`,
    status: statuses[i % statuses.length],
    budget: `₦${(500000 + i * 25000).toLocaleString()}`,
    participants: 500 + i * 45,
    reward: rewards[i % rewards.length],
  };
});
