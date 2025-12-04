import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { UserDetails } from '../types';
import { CheckCircle, CreditCard, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { cartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState<UserDetails>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: 'United States'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const total = (cartTotal * 1.08).toFixed(2);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    clearCart();
    // Simulate API call
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 text-center animate-in zoom-in-95 duration-500">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-2">Order Confirmed!</h2>
          <p className="text-gray-500 mb-8">
            Thank you for your purchase, {formData.firstName}. We've sent a confirmation email to {formData.email}.
          </p>
          <Link
            to="/"
            className="inline-block w-full px-6 py-4 bg-brand-600 text-white font-bold rounded-full hover:bg-brand-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          
          {/* Form */}
          <div className="lg:col-span-7">
             <h1 className="text-3xl font-black text-gray-900 mb-8">Checkout</h1>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                    <input
                      type="text"
                      name="zip"
                      required
                      value={formData.zip}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Info Mock */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                 <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Details</h2>
                 <div className="space-y-4">
                   <div className="flex items-center p-4 border rounded-lg border-brand-200 bg-brand-50 cursor-pointer">
                      <input type="radio" checked readOnly className="h-5 w-5 text-brand-600" />
                      <div className="ml-3 flex items-center w-full justify-between">
                         <span className="font-medium text-brand-900">Credit Card</span>
                         <div className="flex space-x-2 text-brand-700">
                           <CreditCard size={20} />
                         </div>
                      </div>
                   </div>
                   <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-500 flex items-center">
                     <Lock size={16} className="mr-2" /> All transactions are secure and encrypted.
                   </div>
                   {/* External Link */}
                   <div className="pt-4">
                     <p className="mb-4 text-sm text-gray-600">
                       For security, you will be redirected to PayPal to complete your purchase.
                     </p>
                     <a 
                       href={`https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=demo@walkin.com&currency_code=USD&amount=${total}`}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="block w-full text-center bg-[#0070ba] text-white font-bold py-3 rounded-lg hover:bg-[#003087] transition"
                     >
                       Pay with PayPal
                     </a>
                   </div>
                 </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-8 bg-black text-white text-lg font-bold rounded-full hover:bg-gray-800 transition transform hover:scale-[1.01] shadow-xl"
              >
                Complete Order - ${total}
              </button>
            </form>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-5 mt-8 lg:mt-0">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                 <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${(cartTotal * 0.08).toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-4 text-xl font-black">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
