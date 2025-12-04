import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const location = useLocation();

  // Handle scroll to section if navigated with state (e.g. from Navbar)
  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const sectionId = (location.state as any).scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const filteredProducts = useMemo(() => {
    return selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img
            src="https://picsum.photos/id/103/1920/1080"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 flex flex-col items-start justify-center">
          <span className="text-brand-400 font-bold tracking-widest uppercase mb-4 animate-in fade-in slide-in-from-bottom-5 duration-700">
            New Collection 2024
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            WALK YOUR <br />
            OWN <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-600">PATH</span>.
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-lg animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
            Discover the perfect blend of style, comfort, and performance. Engineered for those who never stop moving.
          </p>
          <button
             onClick={() => {
               const el = document.getElementById('products');
               el?.scrollIntoView({ behavior: 'smooth' });
             }}
             className="inline-flex items-center px-8 py-4 bg-brand-600 text-white font-bold rounded-full hover:bg-brand-700 transition-all transform hover:scale-105 shadow-lg shadow-brand-600/30 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-300"
          >
            Shop Now <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* Categories & Products */}
      <section id="products" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Arrivals</h2>
            <p className="text-gray-500">Curated styles just for you.</p>
          </div>

          <div className="mt-6 md:mt-0 overflow-x-auto no-scrollbar pb-2">
            <div className="flex space-x-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-black text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="mt-4 text-brand-600 font-semibold hover:underline"
            >
              View all products
            </button>
          </div>
        )}
      </section>

      {/* Feature Section (About) */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
               <img
                 src="https://picsum.photos/id/349/800/600"
                 alt="Lifestyle"
                 className="rounded-2xl shadow-2xl"
               />
             </div>
             <div className="order-1 md:order-2">
               <span className="text-brand-600 font-bold uppercase tracking-wider mb-2 block">Our Promise</span>
               <h2 className="text-4xl font-black text-gray-900 mb-6">Designed for the Future of Comfort</h2>
               <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                 Every pair of Walkin sneakers is crafted with precision engineering and sustainable materials. We believe that looking good shouldn't cost the earth, nor should it compromise on comfort.
               </p>
               <ul className="space-y-4 mb-8">
                 <li className="flex items-center text-gray-700">
                   <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">✓</div>
                   Eco-friendly materials
                 </li>
                 <li className="flex items-center text-gray-700">
                   <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">✓</div>
                   Ultra-lightweight foam technology
                 </li>
                 <li className="flex items-center text-gray-700">
                   <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3">✓</div>
                   30-day wear test guarantee
                 </li>
               </ul>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;