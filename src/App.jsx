import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import { useState } from 'react';

export default function App() {
  const [products, setProducts] = useState([]);

  function handlSubmit(product) {
    setProducts((products) => [...products, product]);
  }
  function handleDelete(id) {
    setProducts((products) => products.filter((product) => product.id !== id));
  }

  return (
    <>
      <AddProduct onAddProduct={handlSubmit} />
      <ProductList products={products} onDeleteProduct={handleDelete} />
    </>
  );
}
