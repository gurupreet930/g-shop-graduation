import React from 'react';
import { ProductCard } from '../product-card';

const products = [
  { id: 1, title: "Graduation Gown & Cap Set", price: 39.99, image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500" },
  { id: 2, title: "Class of 2026 Sash", price: 14.99, image: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=500" }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">USA Graduation Store 🎓</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}

