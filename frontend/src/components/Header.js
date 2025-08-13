import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, MapPin, User, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const { user, signOut, isSignedIn } = useAuth();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      {/* Main header */}
      <div className="px-4 py-2">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-white">amazon</span>
              <span className="text-orange-400">.com</span>
            </div>
          </Link>

          {/* Delivery location */}
          <div className="hidden lg:flex items-center space-x-1 text-sm">
            <MapPin className="w-4 h-4" />
            <div>
              <div className="text-xs text-gray-300">Deliver to</div>
              <div className="font-semibold">New York 10001</div>
            </div>
          </div>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-4">
            <div className="flex rounded-md overflow-hidden">
              <select className="bg-gray-200 text-gray-900 px-3 py-2 text-sm border-none outline-none">
                <option>All Departments</option>
                <option>Electronics</option>
                <option>Books</option>
                <option>Clothing</option>
                <option>Home & Garden</option>
              </select>
              <Input
                type="search"
                placeholder="Search Amazon"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 rounded-none border-none focus:ring-0"
              />
              <Button type="submit" className="bg-orange-400 hover:bg-orange-500 rounded-none px-4">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </form>

          {/* Right side items */}
          <div className="flex items-center space-x-6">
            {/* Account & Lists */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:outline hover:outline-1 hover:outline-white p-2 rounded">
                <User className="w-5 h-5" />
                <div className="text-left text-sm hidden md:block">
                  <div className="text-xs text-gray-300">
                    {isSignedIn ? `Hello, ${user.name}` : 'Hello, Sign in'}
                  </div>
                  <div className="font-semibold">Account & Lists</div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {!isSignedIn ? (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/signin">Sign In</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/signup">Create Account</Link>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/account">Your Account</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/orders">Your Orders</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut}>
                      Sign Out
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Wishlist */}
            <Link to="/wishlist" className="flex items-center space-x-1 hover:outline hover:outline-1 hover:outline-white p-2 rounded">
              <Heart className="w-5 h-5" />
              <div className="text-left text-sm hidden md:block">
                <div className="text-xs text-gray-300">Returns</div>
                <div className="font-semibold">& Orders</div>
              </div>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="flex items-center space-x-1 hover:outline hover:outline-1 hover:outline-white p-2 rounded relative">
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-400 text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {getTotalItems()}
                </span>
              )}
              <div className="text-left text-sm hidden md:block">
                <div className="text-xs text-gray-300">Cart</div>
                <div className="font-semibold">${getTotalItems()}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Secondary navigation */}
      <div className="bg-gray-800 px-4 py-1">
        <div className="flex items-center space-x-6 max-w-7xl mx-auto text-sm">
          <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-gray-700">
            <Menu className="w-4 h-4 mr-2" />
            All
          </Button>
          <Link to="/category/electronics" className="hover:text-gray-200">Electronics</Link>
          <Link to="/category/books" className="hover:text-gray-200">Books</Link>
          <Link to="/category/clothing" className="hover:text-gray-200">Clothing</Link>
          <Link to="/category/home" className="hover:text-gray-200">Home & Garden</Link>
          <Link to="/deals" className="hover:text-gray-200">Today's Deals</Link>
          <Link to="/category/sports" className="hover:text-gray-200">Sports & Outdoors</Link>
          <span className="text-orange-400 font-semibold">Prime</span>
        </div>
      </div>
    </header>
  );
};

export default Header;