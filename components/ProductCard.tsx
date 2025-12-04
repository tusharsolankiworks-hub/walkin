import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full flex flex-col">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {product.featured && (
            <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 uppercase tracking-wide">
              Featured
            </span>
          )}
          <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <Plus size={20} className="text-brand-600" />
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-brand-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-900 font-semibold mt-auto">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
