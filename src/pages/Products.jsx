import { useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { productList } from "../data/productData";

const Products = () => {
  const [products, setProducts] = useState(productList);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAdmin, setIsAdmin] = useState(true); // Change to false for testing non-admin view
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
    stock: "",
  });

  const productsPerPage = 25;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const deleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleSaveEdit = () => {
    setProducts((prevProducts) =>
      prevProducts.map((p) => (p.id === editingProduct.id ? editingProduct : p))
    );
    setEditingProduct(null);
  };

  const handleAddProduct = () => {
    const newId = products.length + 1;
    setProducts([...products, { id: newId, ...newProduct }]);
    setNewProduct({ name: "", category: "", price: "", image: "", stock: "" });
  };

  return (
    <Layout title="Product List">
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
          Products
        </h2>

        {isAdmin && (
          <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
              Add Product
            </h3>
            <input
              type="text"
              placeholder="Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="text"
              placeholder="Category"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="number"
              placeholder="Stock"
              value={newProduct.stock}
              onChange={(e) =>
                setNewProduct({ ...newProduct, stock: e.target.value })
              }
              className="w-full p-2 mb-2 border rounded"
            />
            <Button onClick={handleAddProduct}>Add Product</Button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {product.category}
              </p>
              <p className="text-blue-600 dark:text-blue-400 font-bold">
                ₦{product.price.toLocaleString()}
              </p>
              <p
                className={`text-sm font-semibold ${
                  product.stock > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {`product.stock > 0 ? ${product.stock} in stock : "Out of stock"`}
              </p>

              {isAdmin && (
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded disabled:opacity-50"
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Products;

// {paginatedProducts.map((product) => (
//   <div key={product.id} className="bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg">
//     <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-2" />

//     {/* Editing Mode */}
//     {editingProduct?.id === product.id ? (
//       <div>
//         <input
//           type="text"
//           value={editingProduct.name}
//           onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
//           className="w-full p-2 border rounded mb-2"
//         />
//         <input
//           type="number"
//           value={editingProduct.price}
//           onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
//           className="w-full p-2 border rounded mb-2"
//         />
//         <button
//           onClick={handleSaveEdit}
//           className="bg-green-500 text-white px-3 py-1 rounded"
//         >
//           Save
//         </button>
//       </div>
//     ) : (
//       // Normal View
//       <>
//         <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{product.name}</h3>
//         <p className="text-gray-600 dark:text-gray-300">{product.category}</p>
//         <p className="text-blue-600 dark:text-blue-400 font-bold">₦{product.price.toLocaleString()}</p>
//         <p className={text-sm font-semibold ${product.stock > 0 ? "text-green-500" : "text-red-500"}}>
//           {product.stock > 0 ? ${product.stock} in stock : "Out of stock"}
//         </p>

//         {isAdmin && (
//           <div className="flex justify-between mt-4">
//             <button
//               onClick={() => handleEdit(product)}
//               className="bg-yellow-500 text-white px-3 py-1 rounded"
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => deleteProduct(product.id)}
//               className="bg-red-500 text-white px-3 py-1 rounded"
//             >
//               Delete
//             </button>
//           </div>
//         )}
//       </>
//     )}
//   </div>
// ))}
