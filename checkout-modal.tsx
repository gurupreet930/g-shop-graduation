import React from 'react';
export const CheckoutModal = () => (
  <div className="p-6 bg-white rounded-xl shadow-2xl border">
    <h2 className="text-2xl font-bold mb-4">Secure Checkout</h2>
    <p className="text-gray-600">Enter your shipping address for fast delivery in the USA.</p>
    <div className="mt-4 space-y-2">
      <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" />
      <input type="text" placeholder="Address" className="w-full border p-2 rounded" />
      <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold mt-4">Pay Now</button>
    </div>
  </div>
);

