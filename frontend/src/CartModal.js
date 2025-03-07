import React from 'react';
import { useCart } from './CartContext';

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, cartTotal, cartItemCount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg w-96 max-h-[80vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button 
            onClick={onClose} 
            className=" bg-gray-500 text-gray-900 hover:text-gray-900 hover:bg-gray-600"
          >
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <div 
                key={item._id} 
                className="flex items-center justify-between border-b py-2"
              >
                <div className="flex items-center">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-16 h-20 object-cover mr-4" 
                  />
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-gray-600">
                      ₹{item.salePrice || item.originalPrice} x {item.quantity}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item._id)}
                  className="bg-gray-200 hover:bg-red-600 text-gray-900 hover:text-gray-300"
                >
                  Remove
                </button>
              </div>
            ))}
            
            <div className="mt-4 flex justify-between">
              <span className="font-bold">Total Items:</span>
              <span>{cartItemCount}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-bold">Total Price:</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
            
            <button 
              onClick={() => {}}
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;