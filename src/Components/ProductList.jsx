import Product from './Product';
// import { products } from '../data';

export default function ProductList({ products, onDeleteProduct }) {
  return (
    <div className="relative  sm:rounded-lg">
      <table className=" m-32 w-2/3 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              onDeleteProduct={onDeleteProduct}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
