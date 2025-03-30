// data/products.js
const productData = [
    { name: "Wireless Headphones", category: "Electronics", image: "https://example.com/headphones.jpg" },
    { name: "Smartwatch", category: "Electronics", image: "https://example.com/smartwatch.jpg" },
    { name: "Gaming Mouse", category: "Gaming", image: "https://example.com/mouse.jpg" },
    { name: "Leather Wallet", category: "Fashion", image: "https://example.com/wallet.jpg" },
    { name: "Blender", category: "Home Appliances", image: "https://example.com/blender.jpg" },
  ];
  
  export const productList = Array.from({ length: 100 }, (_, index) => {
    const product = productData[index % productData.length];
    return {
      id: index + 1,
      name: product.name,
      category: product.category,
      price: Math.floor(Math.random() * 500000) + 10000,
      image: product.image,
      stock: Math.floor(Math.random() * 20),
    };
  });