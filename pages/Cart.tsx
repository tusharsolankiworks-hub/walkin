import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't found your perfect pair yet.</p>
        <Link
          to="/"
          className="px-8 py-3 bg-brand-600 text-white font-bold rounded-full hover:bg-brand-700 transition"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-black text-gray-900 mb-8">Shopping Cart</h1>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <ul className="divide-y divide-gray-100">
                {cart.map((item) => (
                  <li key={`${item.id}-${item.selectedSize}`} className="p-6 flex flex-col sm:flex-row items-center">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-gray-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6 w-full mt-4 sm:mt-0">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-lg font-bold text-gray-900">
                              <Link to={`/product/${item.id}`}>{item.name}</Link>
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm text-gray-500">
                            <p className="border-r border-gray-200 pr-3">Size {item.selectedSize}</p>
                            <p className="pl-3 text-brand-600 font-medium">{item.category}</p>
                          </div>
                          <p className="mt-1 text-lg font-medium text-gray-900">${item.price.toFixed(2)}</p>
                        </div>

                        <div className="mt-4 sm:mt-0 sm:pr-9">
                           <div className="flex items-center space-x-3">
                             <button
                               onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                               className="p-1 rounded-full hover:bg-gray-100 text-gray-500"
                             >
                               <Minus size={16} />
                             </button>
                             <span className="font-semibold text-gray-900">{item.quantity}</span>
                             <button
                               onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                               className="p-1 rounded-full hover:bg-gray-100 text-gray-500"
                             >
                               <Plus size={16} />
                             </button>
                           </div>

                          <div className="absolute top-0 right-0">
                            <button
                              onClick={() => removeFromCart(item.id, item.selectedSize)}
                              className="-m-2 p-2 text-gray-400 hover:text-red-500 transition"
                            >
                              <span className="sr-only">Remove</span>
                              <Trash2 size={20} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>

              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">${cartTotal.toFixed(2)}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Shipping</dt>
                  <dd className="text-sm font-medium text-green-600">Free</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Tax Estimate</dt>
                  <dd className="text-sm font-medium text-gray-900">${(cartTotal * 0.08).toFixed(2)}</dd>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="text-base font-bold text-gray-900">Order Total</dt>
                  <dd className="text-xl font-black text-gray-900">${(cartTotal * 1.08).toFixed(2)}</dd>
                </div>
              </dl>

              <div className="mt-6">
                <Link
                  to="/checkout"
                  className="w-full flex items-center justify-center px-6 py-4 border border-transparent rounded-full shadow-sm text-base font-bold text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all transform hover:scale-[1.02]"
                >
                  Checkout <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
               <div className="mt-6 text-center">
                 <p className="text-xs text-gray-400">Secure Checkout powered by PayPal</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
