const names = [
  "Adeola Johnson", "Emeka Okafor", "Fatima Bello", "Ifeanyi Chukwu", "Ngozi Uche", 
  "Tunde Adebayo", "Chidera Nwosu", "Kelechi Obi", "Maryam Yusuf", "Babatunde Lawal",
  "Blessing Eze", "Samuel Olu", "Zainab Danjuma", "Olumide Dada", "Chinwe Ike",
  "Solomon Peters", "Funke Alabi", "Osas Igbinedion", "Ezekiel Bassey", "Amina Abdullahi",
  "Chinaza Okonkwo", "David Olatunji", "Rasheed Balogun", "Nkechi Anozie", "Jude Chibuzo",
  "Abdulrahman Sanni", "Gloria Etim", "Femi Bankole", "Jennifer Nwachukwu", "Ibrahim Suleiman",
  "Yetunde Akinyemi", "Ugochukwu Eze", "Ruth Obinna", "Seun Ayodele", "Esther Agbo",
  "Tobi Adesina", "Chukwuemeka Okeke", "Halima Lawal", "Kelvin Iroegbu", "Patience Osei",
  "Daniel Abiodun", "Eunice Akpan", "Ahmed Garba", "Tope Falana", "Sarah Okwu",
  "Ebuka Chike", "Abigail Musa", "Taiwo Salami", "Moses Oyewole", "Caroline Ebi"
];

const photos = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/women/6.jpg",
  "https://randomuser.me/api/portraits/men/7.jpg",
  "https://randomuser.me/api/portraits/women/8.jpg",
  "https://randomuser.me/api/portraits/men/9.jpg",
  "https://randomuser.me/api/portraits/women/10.jpg"
];

const employmentStatusOptions = ["Full-time", "Part-time", "Contract", "Intern"];

// Function to generate realistic email
const generateEmail = (name) => {
  const emailProviders = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
  const provider = emailProviders[Math.floor(Math.random() * emailProviders.length)];
  return `${name.toLowerCase().replace(/\s/g, "")}@${provider}`;
};

export const UserData = Array.from({ length: 50 }, (_, index) => {
  const randomPhoto = photos[index % photos.length];
  const randomEmploymentStatus = employmentStatusOptions[Math.floor(Math.random() * employmentStatusOptions.length)];
  const name = names[index % names.length];

  return {
    id: index + 1,
    photo: randomPhoto,
    name,
    email: generateEmail(name),
    phone: `+234 80${Math.floor(10000000 + Math.random() * 90000000)}`,
    addedBy: index % 2 === 0 ? "Admin" : "Partner",
    status: ["Pending", "Active", "Inactive"][Math.floor(Math.random() * 3)],
    employmentStatus: randomEmploymentStatus,
    dateJoined: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toLocaleDateString(),
  };
});