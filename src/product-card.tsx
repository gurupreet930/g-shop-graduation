import React from 'react';
export const ProductCard = ({ product }: any) => (
  <div className="border p-4 rounded-lg shadow-sm bg-white">
    <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
    <h3 className="font-bold text-lg">{product.title}</h3>
    <p className="text-blue-600 font-semibold">${product.price}</p>
    <button className="mt-4 bg-black text-white px-4 py-2 rounded w-full hover:bg-gray-800">Add to Cart</button>
  </div>
);

