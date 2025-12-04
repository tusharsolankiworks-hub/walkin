import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { Star, Truck, Shield, ArrowLeft, Check } from 'lucide-react';
import { Product } from '../types';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const found = PRODUCTS.find(p => p.id === Number(id));
    if (found) {
      setProduct(found);
      if (found.sizes.length > 0) setSelectedSize(found.sizes[0]);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleAddToCart = () => {
    if (product && selectedSize) {
      setIsAdding(true);
      addToCart(product, selectedSize);
      setTimeout(() => setIsAdding(false), 500);
    }
  };

  if (!product) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600"></div></div>;

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-500 hover:text-gray-900 transition mb-8"
        >
          <ArrowLeft size={20} className="mr-2" /> Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="text-brand-600 font-semibold tracking-wide uppercase text-sm">
                {product.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              {product.name}
            </h1>
            <div className="flex items-center mb-6">
               <div className="flex text-yellow-400">
                 {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
               </div>
               <span className="text-gray-500 text-sm ml-2">(128 reviews)</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-8">
              ${product.price.toFixed(2)}
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-gray-900">Select Size (US)</span>
                <button className="text-sm text-brand-600 underline">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-lg border font-medium transition-all ${
                      selectedSize === size
                        ? 'border-black bg-black text-white shadow-md'
                        : 'border-gray-200 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-4 mb-10">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`flex-1 py-4 px-8 rounded-full font-bold text-lg flex items-center justify-center transition-all transform active:scale-95 ${
                  isAdding ? 'bg-green-600 text-white' : 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/30'
                }`}
              >
                {isAdding ? (
                   <>Added <Check size={24} className="ml-2" /></>
                ) : (
                  'Add to Cart'
                )}
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-100">
              <div className="flex items-start">
                <Truck className="text-gray-400 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Free Shipping</h4>
                  <p className="text-xs text-gray-500 mt-1">On all orders over $150</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="text-gray-400 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Secure Payment</h4>
                  <p className="text-xs text-gray-500 mt-1">100% protected checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
