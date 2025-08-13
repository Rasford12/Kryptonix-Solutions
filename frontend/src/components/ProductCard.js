import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product, className = '' }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to wishlist logic here
  };

  return (
    <Card className={`group hover:shadow-lg transition-all duration-200 ${className}`}>
      <CardContent className="p-0">
        <Link to={`/product/${product.id}`} className="block">
          <div className="relative overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-200"
            />
            
            {/* Badges */}
            <div className="absolute top-2 left-2 flex flex-col space-y-1">
              {product.deal && (
                <Badge className="bg-red-500 text-white">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </Badge>
              )}
              {product.prime && (
                <Badge className="bg-blue-600 text-white">Prime</Badge>
              )}
            </div>

            {/* Wishlist button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 p-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              onClick={handleAddToWishlist}
            >
              <Heart className="w-4 h-4" />
            </Button>

            {/* Quick add to cart overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
              <Button
                onClick={handleAddToCart}
                className="bg-orange-500 hover:bg-orange-600 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform translate-y-4 group-hover:translate-y-0"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Quick Add
              </Button>
            </div>
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200">
              {product.title}
            </h3>
            
            {/* Rating */}
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">({product.reviewCount})</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-lg font-bold text-gray-900">${product.price}</span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>

            {/* Features */}
            <div className="text-xs text-gray-600 mb-3">
              {product.freeShipping && (
                <span className="inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded mr-2">
                  FREE Shipping
                </span>
              )}
              {product.inStock ? (
                <span className="text-green-600">In Stock</span>
              ) : (
                <span className="text-red-600">Out of Stock</span>
              )}
            </div>
          </div>
        </Link>

        {/* Add to Cart Button */}
        <div className="px-4 pb-4">
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white disabled:bg-gray-300"
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;