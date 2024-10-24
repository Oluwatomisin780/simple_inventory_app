export default function Product({ product, onDeleteProduct }) {
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {product.product_name}
      </th>
      <td className="px-6 py-4">{product.category}</td>
      <td className="px-6 py-4">{product.price}</td>
      <td className="px-6 py-4">{product.status}</td>
      <td className="px-6 py-4">
        <button
          className="font-medium text-blue-600 dark:text-blue-500"
          onClick={() => onDeleteProduct(product.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
