import React from 'react';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-black tracking-tighter mb-4">
              WALK<span className="text-brand-400">IN</span>.
            </h3>
            <p className="text-gray-400 text-sm">
              Redefining movement one step at a time. Quality sneakers for the modern explorer.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-100">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-400 transition">New Arrivals</a></li>
              <li><a href="#" className="hover:text-brand-400 transition">Best Sellers</a></li>
              <li><a href="#" className="hover:text-brand-400 transition">Running</a></li>
              <li><a href="#" className="hover:text-brand-400 transition">Lifestyle</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-100">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-400 transition">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-brand-400 transition">Care Guide</a></li>
              <li><a href="#" className="hover:text-brand-400 transition">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-100">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Github size={20} /></a>
            </div>
            <div className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Walkin Inc. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
