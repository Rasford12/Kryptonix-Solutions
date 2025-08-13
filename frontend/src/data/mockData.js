// Mock data for Amazon clone

export const categories = [
  { id: 1, name: 'Electronics', icon: 'Monitor', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400' },
  { id: 2, name: 'Books', icon: 'Book', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400' },
  { id: 3, name: 'Clothing', icon: 'Shirt', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400' },
  { id: 4, name: 'Home & Garden', icon: 'Home', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400' },
  { id: 5, name: 'Sports & Outdoors', icon: 'Dumbbell', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400' },
  { id: 6, name: 'Beauty', icon: 'Heart', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400' },
  { id: 7, name: 'Toys & Games', icon: 'Gamepad2', image: 'https://images.unsplash.com/photo-1566873481799-9d86d6d77d4b?w=400' },
  { id: 8, name: 'Automotive', icon: 'Car', image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=400' }
];

export const products = [
  {
    id: 1,
    title: 'MacBook Air M2 Chip 13-inch',
    price: 1199.99,
    originalPrice: 1399.99,
    rating: 4.8,
    reviewCount: 2847,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500'
    ],
    category: 'Electronics',
    categoryId: 1,
    description: 'Experience the power of the M2 chip in the super-portable MacBook Air. With up to 20 hours of battery life, stunning Retina display, and all-day performance.',
    features: [
      'Apple M2 chip for incredible performance',
      '13.6-inch Liquid Retina display',
      'Up to 20 hours of battery life',
      '8GB unified memory',
      '256GB SSD storage',
      'Two Thunderbolt ports'
    ],
    inStock: true,
    freeShipping: true,
    prime: true,
    deal: true
  },
  {
    id: 2,
    title: 'Samsung 65" 4K Smart TV',
    price: 799.99,
    originalPrice: 999.99,
    rating: 4.5,
    reviewCount: 1523,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500',
    images: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500',
      'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=500'
    ],
    category: 'Electronics',
    categoryId: 1,
    description: 'Immerse yourself in stunning 4K picture quality with this Samsung Smart TV. Features HDR support, built-in streaming apps, and voice control.',
    features: [
      '65-inch 4K UHD display',
      'HDR10+ support',
      'Built-in Tizen OS',
      'Voice control with Alexa',
      'Multiple HDMI ports',
      'WiFi connectivity'
    ],
    inStock: true,
    freeShipping: true,
    prime: true,
    deal: true
  },
  {
    id: 3,
    title: 'The Psychology of Money',
    price: 14.99,
    originalPrice: 18.99,
    rating: 4.7,
    reviewCount: 3245,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500',
    images: [
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500'
    ],
    category: 'Books',
    categoryId: 2,
    description: 'Timeless lessons on wealth, greed, and happiness doing well with money isn\'t necessarily about what you know. It\'s about how you behave.',
    features: [
      'Paperback edition',
      '256 pages',
      'Business & Money category',
      'Best seller',
      'Author: Morgan Housel',
      'Publisher: Harriman House'
    ],
    inStock: true,
    freeShipping: true,
    prime: true,
    deal: false
  },
  {
    id: 4,
    title: 'Nike Air Max 270 Running Shoes',
    price: 89.99,
    originalPrice: 120.99,
    rating: 4.4,
    reviewCount: 892,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500'
    ],
    category: 'Clothing',
    categoryId: 3,
    description: 'Experience ultimate comfort and style with Nike Air Max 270. Features the largest heel Air unit in Nike history for maximum cushioning.',
    features: [
      'Air Max heel cushioning',
      'Breathable mesh upper',
      'Durable rubber outsole',
      'Available in multiple colors',
      'Lightweight design',
      'Iconic Nike styling'
    ],
    inStock: true,
    freeShipping: true,
    prime: true,
    deal: true
  },
  {
    id: 5,
    title: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker',
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.6,
    reviewCount: 5647,
    image: 'https://images.unsplash.com/photo-1574781330855-d0db6cc7e5c1?w=500',
    images: [
      'https://images.unsplash.com/photo-1574781330855-d0db6cc7e5c1?w=500'
    ],
    category: 'Home & Garden',
    categoryId: 4,
    description: '7 kitchen appliances in 1: pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and warmer.',
    features: [
      '6-quart capacity',
      '7-in-1 functionality',
      '14 smart programs',
      'Stainless steel inner pot',
      'Safety features',
      'Easy cleanup'
    ],
    inStock: true,
    freeShipping: true,
    prime: true,
    deal: true
  },
  {
    id: 6,
    title: 'Sony WH-1000XM4 Wireless Headphones',
    price: 279.99,
    originalPrice: 349.99,
    rating: 4.9,
    reviewCount: 4235,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500'
    ],
    category: 'Electronics',
    categoryId: 1,
    description: 'Industry-leading noise cancellation with Dual Noise Sensor technology. Up to 30-hour battery life with quick charging.',
    features: [
      'Industry-leading noise cancellation',
      '30-hour battery life',
      'Quick charge (10 min = 5 hours)',
      'Touch sensor controls',
      'Speak-to-chat technology',
      'Premium comfort'
    ],
    inStock: true,
    freeShipping: true,
    prime: true,
    deal: true
  }
];

export const deals = [
  {
    id: 'deal1',
    title: 'Electronics Flash Sale',
    description: 'Up to 40% off on electronics',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600',
    discount: '40%',
    endTime: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours from now
  },
  {
    id: 'deal2',
    title: 'Fashion Week Special',
    description: 'Designer clothes at unbeatable prices',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600',
    discount: '30%',
    endTime: new Date(Date.now() + 48 * 60 * 60 * 1000) // 48 hours from now
  }
];

export const reviews = {
  1: [
    {
      id: 1,
      user: 'John D.',
      rating: 5,
      date: '2024-12-15',
      title: 'Amazing performance!',
      content: 'This MacBook Air is incredible. The M2 chip handles everything I throw at it with ease. Battery life is exactly as advertised.',
      helpful: 23,
      verified: true
    },
    {
      id: 2,
      user: 'Sarah M.',
      rating: 4,
      date: '2024-12-10',
      title: 'Great laptop but...',
      content: 'Love the performance and design. Only wish it had more ports. Overall very satisfied with the purchase.',
      helpful: 15,
      verified: true
    }
  ],
  2: [
    {
      id: 3,
      user: 'Mike R.',
      rating: 5,
      date: '2024-12-12',
      title: 'Perfect TV for the price',
      content: 'Picture quality is outstanding. Setup was easy and the smart features work flawlessly.',
      helpful: 18,
      verified: true
    }
  ]
};

export const cart = [
  {
    id: 1,
    productId: 1,
    quantity: 1,
    addedAt: new Date()
  }
];

export const user = {
  name: 'Guest User',
  email: '',
  isSignedIn: false,
  addresses: [],
  orders: []
};