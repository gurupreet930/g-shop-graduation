import React from 'react';
export const CartDrawer = () => (
  <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl p-6 border-l">
    <div className="flex justify-between items-center border-b pb-4">
      <h2 className="text-xl font-bold">Your Cart</h2>
      <span className="text-gray-400">Close</span>
    </div>
    <div className="mt-10 text-center">
      <p className="text-gray-500 italic">Your cart is empty. Start shopping for Graduation!</p>
    </div>
  </div>
);

