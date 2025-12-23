import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { UserDetails } from '../types';
import { CheckCircle, Lock, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const Checkout: React.FC = () => {
  const { cart, cartTotal, clearCart } = useCart();
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const total = (cartTotal * 1.08).toFixed(2);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare the product summary string
      const productSummary = cart
        .map(item => `${item.name} (Size: ${item.selectedSize}) x${item.quantity}`)
        .join(', ');

      // Insert data into Supabase
      const { error } = await supabase.from('orders').insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          street_address: formData.address,
          city: formData.city,
          zip_code: formData.zip,
          product_name: productSummary,
          total_amount: parseFloat(total),
        },
      ]);

      if (error) {
        throw error;
      }

      // Open the payment link in a new tab
      // TODO: Replace 'https://www.paypal.com/' with your actual payment link.
      window.open('https://www.paypal.com/', '_blank');

      console.log('Order processed successfully to Supabase');
      clearCart();
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error processing order:', error);
      alert('There was an error placing your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
            Thank you for your purchase, {formData.firstName}. We've saved your order details and sent a confirmation email to {formData.email}.
            <br /><br />
            Please complete your payment in the new tab if you haven't already.
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
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:text-gray-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:text-gray-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                    <input
                      type="text"
                      name="address"
                      required
                      placeholder="123 Main St"
                      value={formData.address}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="New York"
                      value={formData.city}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                    <input
                      type="text"
                      name="zip"
                      required
                      placeholder="10001"
                      value={formData.zip}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:text-gray-500"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Info Mock - PayPal */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                 <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Details</h2>
                 <div className="space-y-4">
                   <div className="flex items-center p-4 border rounded-lg border-blue-200 bg-blue-50 cursor-pointer transition-colors hover:bg-blue-100">
                      <input type="radio" checked readOnly className="h-5 w-5 text-blue-600 focus:ring-blue-500" />
                      <div className="ml-3 flex items-center w-full justify-between">
                         <span className="font-bold text-[#003087] flex items-center text-lg italic">
                           PayPal
                         </span>
                         <span className="text-xs font-semibold px-2 py-1 bg-white text-blue-700 rounded border border-blue-100">
                           Fast & Secure
                         </span>
                      </div>
                   </div>
                   
                   <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-500 flex items-center">
                     <Lock size={16} className="mr-2 flex-shrink-0" />
                     <span>You will be redirected to PayPal to complete your purchase securely.</span>
                   </div>
                 </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 bg-[#0070ba] hover:bg-[#003087] text-white text-lg font-bold rounded-full transition transform hover:scale-[1.01] shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" /> Processing...
                  </>
                ) : (
                  `Pay with PayPal - $${total}`
                )}
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
                
                {/* Mini Cart Display */}
                <div className="mt-6 border-t border-gray-100 pt-6">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Items in Cart</h3>
                  <ul className="space-y-4 max-h-60 overflow-y-auto no-scrollbar">
                    {cart.map((item, idx) => (
                      <li key={`${item.id}-${idx}`} className="flex items-center space-x-4">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            Size: {item.selectedSize} | Qty: {item.quantity}
                          </p>
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;