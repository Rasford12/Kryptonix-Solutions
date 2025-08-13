import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Filter, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { products, categories } from '../data/mockData';
import { useCart } from '../contexts/CartContext';

const CategoryPage = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const { addToCart } = useCart();

  const categoryName = category?.replace('-', ' ') || '';
  const currentCategory = categories.find(c => 
    c.name.toLowerCase().replace(/\s+/g, '-') === category
  );

  useEffect(() => {
    let filtered = products;
    
    if (currentCategory) {
      filtered = products.filter(p => p.categoryId === currentCategory.id);
    }

    // Apply price filter
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Apply rating filter
    if (selectedRating > 0) {
      filtered = filtered.filter(p => p.rating >= selectedRating);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        // Featured - keep original order
        break;
    }

    setFilteredProducts(filtered);
  }, [category, currentCategory, priceRange, selectedRating, sortBy]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-orange-600">Home</Link>
          <span>/</span>
          <span className="text-gray-900 capitalize">{categoryName}</span>
        </nav>

        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 capitalize mb-2">{categoryName}</h1>
          <p className="text-gray-600">{filteredProducts.length} products found</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className="lg:w-64">
            <div className="lg:hidden mb-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="w-full"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
                <ChevronDown className="w-4 h-4 ml-auto" />
              </Button>
            </div>

            <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              {/* Price Range */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <Checkbox 
                        checked={priceRange[1] >= 50}
                        onCheckedChange={(checked) => checked ? setPriceRange([0, 50]) : setPriceRange([0, 2000])}
                      />
                      <span className="text-sm">Under $50</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <Checkbox 
                        checked={priceRange[0] === 50 && priceRange[1] === 100}
                        onCheckedChange={(checked) => checked ? setPriceRange([50, 100]) : setPriceRange([0, 2000])}
                      />
                      <span className="text-sm">$50 - $100</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <Checkbox 
                        checked={priceRange[0] === 100 && priceRange[1] === 500}
                        onCheckedChange={(checked) => checked ? setPriceRange([100, 500]) : setPriceRange([0, 2000])}
                      />
                      <span className="text-sm">$100 - $500</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <Checkbox 
                        checked={priceRange[0] === 500}
                        onCheckedChange={(checked) => checked ? setPriceRange([500, 2000]) : setPriceRange([0, 2000])}
                      />
                      <span className="text-sm">$500 & Above</span>
                    </label>
                  </div>
                </CardContent>
              </Card>

              {/* Customer Rating */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3">Customer Rating</h3>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map((rating) => (
                      <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                        <Checkbox 
                          checked={selectedRating === rating}
                          onCheckedChange={(checked) => setSelectedRating(checked ? rating : 0)}
                        />
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="text-sm ml-2">& Up</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Brand */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3">Brand</h3>
                  <div className="space-y-2">
                    {['Apple', 'Samsung', 'Nike', 'Amazon', 'Sony'].map((brand) => (
                      <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm">{brand}</span>
                      </label>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort and View Options */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-600">
                Showing {filteredProducts.length} results
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Customer Rating</SelectItem>
                  <SelectItem value="newest">Newest Arrivals</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">No products found matching your criteria.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setPriceRange([0, 2000]);
                    setSelectedRating(0);
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-200">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        {product.deal && (
                          <Badge className="absolute top-2 left-2 bg-red-500">
                            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                          </Badge>
                        )}
                        {product.prime && (
                          <Badge className="absolute top-2 right-2 bg-blue-600">Prime</Badge>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-orange-600">
                          <Link to={`/product/${product.id}`}>{product.title}</Link>
                        </h3>
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
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="text-lg font-bold">${product.price}</span>
                          {product.originalPrice > product.price && (
                            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                          )}
                        </div>
                        <Button
                          onClick={() => handleAddToCart(product)}
                          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;