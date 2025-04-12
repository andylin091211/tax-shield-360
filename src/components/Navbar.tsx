
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-brand-purple">流程力税盾360</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-purple font-medium">
              首页
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-brand-purple font-medium">
              产品
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-brand-purple font-medium">
              定价
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-purple font-medium">
              关于我们
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand-purple font-medium">
              联系我们
            </Link>
            <Button className="bg-brand-purple hover:bg-brand-lightPurple text-white">
              免费试用
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-purple hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-100"
              onClick={toggleMenu}
            >
              首页
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-100"
              onClick={toggleMenu}
            >
              产品
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-100"
              onClick={toggleMenu}
            >
              定价
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-100"
              onClick={toggleMenu}
            >
              关于我们
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-100"
              onClick={toggleMenu}
            >
              联系我们
            </Link>
            <div className="pt-2">
              <Button className="w-full bg-brand-purple hover:bg-brand-lightPurple text-white">
                免费试用
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
