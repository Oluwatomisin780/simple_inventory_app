import { useState } from 'react';

export default function AddProduct({ onAddProduct }) {
  const [product_name, setProduct_name] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState('in stock');
  const handleSubmit = () => {
    const newProduct = {
      product_name,
      price,
      category,
      status,
      id: new Date(),
    };
    onAddProduct(newProduct);
    setProduct_name('');
    setCategory('');
    setPrice(0);
    setStatus('in stock');
    console.log(newProduct);
  };
  return (
    <form className="max-w-sm center  mx-auto mt-24">
      <input
        type="text"
        name="product_name"
        className="mb-5 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={product_name}
        onChange={(e) => {
          console.log(e.target.value);
          setProduct_name(e.target.value);
        }}
      />

      <input
        type="text"
        name="category"
        className=" mb-5 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={category}
        onChange={(e) => {
          console.log(e.target.value);
          setCategory(e.target.value);
        }}
      />

      <input
        type="number"
        name="price"
        id="price"
        className="mb-5 block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={price}
        onChange={(e) => {
          console.log(e.target.value);
          setPrice(e.target.value);
        }}
      />

      <select
        className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={status}
        onChange={(e) => {
          console.log(e.target.value);
          setStatus(e.target.value);
        }}
      >
        <option value="sold">sold</option>
        <option value="in stock">in stock</option>
      </select>
      <button
        type="button"
        className="py-2.5 px-5 me-2  ml-28 mt-8 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={handleSubmit}
      >
        Add Product
      </button>
    </form>
  );
}
