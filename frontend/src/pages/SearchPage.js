import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { products } from '../data/mockData';
import { useCart } from '../contexts/CartContext';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [searchResults, setSearchResults] = useState([]);
  const [sortBy, setSortBy] = useState('relevance');
  const { addToCart } = useCart();

  const query = searchParams.get('q') || '';

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  useEffect(() => {
    if (query) {
      let results = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.features.some(feature => 
          feature.toLowerCase().includes(query.toLowerCase())
        )
      );

      // Apply sorting
      switch (sortBy) {
        case 'price-low':
          results.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          results.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          results.sort((a, b) => b.rating - a.rating);
          break;
        case 'newest':
          results.sort((a, b) => b.id - a.id);
          break;
        default:
          // Relevance - keep search order
          break;
      }

      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [query, sortBy]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex rounded-md overflow-hidden border border-gray-300">
              <Input
                type="search"
                placeholder="Search Amazon"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 rounded-none border-none focus:ring-0"
              />
              <Button type="submit" className="bg-orange-400 hover:bg-orange-500 rounded-none px-6">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </form>
        </div>

        {query && (
          <>
            {/* Search Results Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-1">
                    Search results for "{query}"
                  </h1>
                  <p className="text-gray-600">
                    {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                  </p>
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Customer Rating</SelectItem>
                    <SelectItem value="newest">Newest Arrivals</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Search Results */}
            {searchResults.length === 0 ? (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">No results found</h2>
                <p className="text-gray-600 mb-8">
                  Try different keywords or remove search filters
                </p>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">Search suggestions:</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['laptop', 'phone', 'headphones', 'books', 'shoes'].map((suggestion) => (
                      <Button
                        key={suggestion}
                        variant="outline"
                        onClick={() => setSearchParams({ q: suggestion })}
                        className="capitalize"
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {searchResults.map((product) => (
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
          </>
        )}

        {!query && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Search Amazon</h2>
            <p className="text-gray-600 mb-8">
              Find millions of products from books to electronics
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Popular searches:</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Electronics', 'Books', 'Clothing', 'Home & Garden', 'Sports', 'Beauty'].map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    onClick={() => setSearchParams({ q: category.toLowerCase() })}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;