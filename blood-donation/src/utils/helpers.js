export const BLOOD_GROUPS = [
  'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'
];

export const enrichDonorData = (users) => {
  return users.map(user => ({
    id: user.id,
    name: user.name,
    city: user.address.city,
    bloodGroup:
      BLOOD_GROUPS[Math.floor(Math.random() * BLOOD_GROUPS.length)],
    isAvailable: Math.random() > 0.3,
  }));
};