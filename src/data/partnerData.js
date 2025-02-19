export const partnerData = Array.from({ length: 11 }, (_, i) => {
  const companyNames = ["Apple", "Coco Cola", "Google", "Facebook", "Samsung", "Itel", "Dell", "Bruhum", "Elengaza", "Slot", "LG", "Pepsi"];
  const categories = ["Tech", "Finance", "Healthcare", "Retail"];
  const locations = ["New York", "London", "Berlin", "Tokyo"];

  const company = companyNames[i % companyNames.length]; // Get the company name
  const domain = `${company.toLowerCase().replace(/\s+/g, "")}.com`; // Convert to lowercase and remove spaces

  return {
    id: i + 1,
    company,
    category: categories[i % categories.length],
    domain,
    location: locations[i % locations.length],
    status: i % 3 === 0 ? "Active" : "Pending" ,
  };
});

console.log(partnerData); // Check output in the console
