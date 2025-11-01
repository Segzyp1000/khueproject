import { useState } from "react";
import Layout from "../components/Layout";
import { productList } from "../data/productData";

const Products = () => {
  const [products, setProducts] = useState(productList);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingProduct, setEditingProduct] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
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
  const paginatedProducts = products.slice(startIndex, startIndex + productsPerPage);

  // ✅ Open confirmation modal
  const confirmDeleteProduct = (product) => {
    setProductToDelete(product);
    setShowConfirm(true);
  };

  // ✅ Handle delete confirmation
  const handleConfirmDelete = () => {
    if (!productToDelete) return;

    setProducts((prev) => prev.filter((p) => p.id !== productToDelete.id));
    setDeleteMessage(`Deleted "${productToDelete.name}" successfully.`);
    setShowConfirm(false);
    setProductToDelete(null);

    setTimeout(() => setDeleteMessage(""), 3000);
  };

  const handleEdit = (product) => setEditingProduct(product);

  const handleSaveEdit = () => {
    setProducts((prevProducts) =>
      prevProducts.map((p) => (p.id === editingProduct.id ? editingProduct : p))
    );
    setEditingProduct(null);
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      setError("Please fill in at least name, price, and image fields.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    const newId = Date.now();
    setProducts([...products, { id: newId, ...newProduct }]);
    setNewProduct({ name: "", category: "", price: "", image: "", stock: "" });
    setSuccess("Product added successfully.");
    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <Layout title="Product List">
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Products
        </h2>

        {/* ✅ Add Product Section */}
        <div className="mb-10 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Add Product
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
                        className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 flex-1 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"

            />
            <input
              type="text"
              placeholder="Category"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
                        className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 flex-1 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"

            />
            <input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
                        className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 flex-1 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"

            />
            <input
              type="text"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
                        className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 flex-1 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"

            />
            <input
              type="number"
              placeholder="Stock"
              value={newProduct.stock}
              onChange={(e) =>
                setNewProduct({ ...newProduct, stock: e.target.value })
              }
                        className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 flex-1 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"

            />
          </div>

          <button
            onClick={handleAddProduct}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md mt-4 transition transform hover:scale-[1.02]"
          >
            Add Product
          </button>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mt-4 text-center">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-100 text-green-700 p-3 rounded mt-4 text-center">
              {success}
            </div>
          )}
          {deleteMessage && (
            <div className="bg-yellow-100 text-yellow-800 p-3 rounded mt-4 text-center">
              {deleteMessage}
            </div>
          )}
        </div>

        {/* ✅ Product Grid */}
        {products.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-16">
            No products available. Add a new one above.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg transform transition duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />

                {editingProduct?.id === product.id ? (
                  <div>
                    <input
                      type="text"
                      value={editingProduct.name}
                      onChange={(e) =>
                        setEditingProduct({
                          ...editingProduct,
                          name: e.target.value,
                        })
                      }
                      className="w-full p-2 border rounded mb-2 text-gray-800"
                    />
                    <input
                      type="number"
                      value={editingProduct.price}
                      onChange={(e) =>
                        setEditingProduct({
                          ...editingProduct,
                          price: e.target.value,
                        })
                      }
                      className="w-full p-2 border rounded mb-2 text-gray-800"
                    />
                    <button
                      onClick={handleSaveEdit}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {product.category}
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 font-bold">
                      ₦{Number(product.price).toLocaleString()}
                    </p>
                    <p className="text-red-500 font-bold">
                      {product.stock || 0} left
                    </p>

                    <div className="flex justify-between mt-4">
                      <button
                        onClick={() => handleEdit(product)}
                        className="bg-yellow-500 text-gray-800 px-3 py-1 rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => confirmDeleteProduct(product)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ✅ Single Confirm Delete Modal (fixed placement) */}
        {showConfirm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-[90%] max-w-sm text-center animate-fadeIn">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Confirm Delete
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Are you sure you want to delete{" "}
                <span className="font-bold text-red-600">
                  {productToDelete?.name}
                </span>
                ?
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => {
                    setShowConfirm(false);
                    setProductToDelete(null);
                  }}
                  className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition"
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-14">
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
              className={`px-4 py-2 rounded-md transition ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white"
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