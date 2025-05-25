import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Marketplace.css';

// Optimized image paths with no duplicates
const images = {
  maize: 'https://cdn.pixabay.com/photo/2018/04/07/17/32/potatoes-3299046_640.jpg',
  tomatoes: 'https://images.pexels.com/photos/26950753/pexels-photo-26950753/free-photo-of-pile-of-tomatoes.jpeg',
  strawberries: 'https://images.pexels.com/photos/26646960/pexels-photo-26646960/free-photo-of-disposable-box-of-strawberries.jpeg',
  kale: 'https://images.pexels.com/photos/27047895/pexels-photo-27047895/free-photo-of-cabbage-and-cauliflower-at-bazaar.jpeg',
  coffee: 'https://images.pexels.com/photos/30711594/pexels-photo-30711594/free-photo-of-ripe-coffee-berries-on-plant-branch-in-burundi.jpeg',
  carrots: 'https://images.pexels.com/photos/25397904/pexels-photo-25397904/free-photo-of-red-radish-bundles-at-bazaar.jpeg',
  flowers: 'https://images.pexels.com/photos/25547315/pexels-photo-25547315/free-photo-of-bunches-of-radishes-on-the-market-stall.jpeg',
  wheat: 'https://images.pexels.com/photos/19064900/pexels-photo-19064900/free-photo-of-colorful-corns-at-bazaar.jpeg',
  beans: 'https://images.pexels.com/photos/27047895/pexels-photo-27047895/free-photo-of-cabbage-and-cauliflower-at-bazaar.jpeg',
  onions: 'https://images.pexels.com/photos/29355934/pexels-photo-29355934/free-photo-of-fresh-organic-beets-and-carrots-at-market.jpeg',
  peas: 'https://images.pexels.com/photos/32188889/pexels-photo-32188889/free-photo-of-fresh-green-peas-and-pods-on-rustic-wooden-table.jpeg',
  spinach: 'https://images.pexels.com/photos/29125998/pexels-photo-29125998/free-photo-of-harvested-pumpkins-displayed-outdoors-in-sweden.jpeg',
  avocados: 'https://images.pexels.com/photos/25946860/pexels-photo-25946860/free-photo-of-blue-containers-of-strawberries-and-raspberries.jpeg',
  bananas: 'https://images.pexels.com/photos/31501823/pexels-photo-31501823/free-photo-of-close-up-of-colorful-corn-cobs-in-bulk.jpeg',
  mushrooms: 'https://images.pexels.com/photos/26950758/pexels-photo-26950758/free-photo-of-close-up-of-fresh-vegetables-at-the-market.jpeg',
  farmProduce: 'https://images.pexels.com/photos/31979013/pexels-photo-31979013/free-photo-of-vibrant-vegetable-market-with-fresh-produce-display.jpeg',
  farmEquipment: 'https://images.pexels.com/photos/31673795/pexels-photo-31673795/free-photo-of-hands-holding-granular-fertilizer-outdoors.jpeg',
  tractor: 'https://images.pexels.com/photos/18404065/pexels-photo-18404065/free-photo-of-bags-with-sand.jpeg',
  mixedVeggies: 'https://images.pexels.com/photos/31092533/pexels-photo-31092533/free-photo-of-colorful-fresh-produce-at-market-stall.jpeg',
  harvestBasket: 'https://images.pexels.com/photos/18982560/pexels-photo-18982560/free-photo-of-orange-mini-pumpkins-and-strawberry-corn-at-a-market-stall.jpeg'
};

const FALLBACK_IMAGE = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMjAwIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjYiPlByb2R1Y3QgSW1hZ2U8L3RleHQ+PC9zdmc+';

const ProductImage = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = useState(src);
  
  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <img 
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        console.warn(`Image failed to load: ${src}`);
        setImgSrc(FALLBACK_IMAGE);
      }}
      loading="lazy"
    />
  );
};

export default function Marketplace({ user }) {
  const [listings] = useState([
    {
      id: 1,
      title: "Premium Maize Harvest",
      image: images.maize,
      description: "High-quality fresh maize from our organic farms, perfect for both human consumption and animal feed. Grown using sustainable farming practices.",
      crop_type: 'Maize',
      variety: 'DH04',
      price_per_unit: 50,
      organic: true,
      farmer: "John Kamau",
      contact: "john@example.com",
      location: "Nakuru, Kenya",
      available: 20,
      harvest_date: '2023-11-15',
      certification: 'EU Organic Certified'
    },
    {
      id: 2,
      title: "Organic Roma Tomatoes",
      image: images.tomatoes,
      description: "Fresh organic Roma tomatoes grown without synthetic pesticides, rich in flavor and nutrients. Perfect for sauces, salads, and canning.",
      crop_type: 'Tomato',
      variety: 'Roma',
      price_per_unit: 80,
      organic: true,
      farmer: "Mary Wanjiku",
      contact: "mary@example.com",
      location: "Kiambu, Kenya",
      available: 15,
      harvest_date: '2023-11-10',
      certification: 'KARLO Certified'
    },
    {
      id: 3,
      title: "Sweet Strawberries",
      image: images.strawberries,
      description: "Juicy and sweet strawberries, perfect for desserts or fresh eating. Grown in vertical farms for maximum flavor and minimal environmental impact.",
      crop_type: 'Strawberry',
      variety: 'Chandler',
      price_per_unit: 120,
      organic: true,
      farmer: "Peter Mwangi",
      contact: "peter@example.com",
      location: "Murang'a, Kenya",
      available: 8,
      harvest_date: '2023-11-05',
      certification: 'Rainforest Alliance'
    },
    {
      id: 4,
      title: "Fresh Kale Greens",
      image: images.kale,
      description: "Nutrient-packed kale greens, freshly harvested and ready for your healthy meals. Contains high levels of vitamins A, K, and C.",
      crop_type: 'Kale',
      variety: 'Lacinato',
      price_per_unit: 60,
      organic: true,
      farmer: "Grace Njeri",
      contact: "grace@example.com",
      location: "Nyeri, Kenya",
      available: 12,
      harvest_date: '2023-11-12',
      certification: 'Organic Farmers Association'
    },
    {
      id: 5,
      title: "Premium Coffee Beans",
      image: images.coffee,
      description: "High-quality Arabica coffee beans from the slopes of Mount Kenya. Single-origin, shade-grown, and hand-picked for exceptional quality.",
      crop_type: 'Coffee',
      variety: 'Arabica',
      price_per_unit: 200,
      organic: false,
      farmer: "James Kariuki",
      contact: "james@example.com",
      location: "Kirinyaga, Kenya",
      available: 30,
      harvest_date: '2023-10-30',
      certification: 'Direct Trade'
    },
    {
      id: 6,
      title: "Fresh Carrots",
      image: images.carrots,
      description: "Sweet and crunchy carrots, perfect for cooking or snacking. Rich in beta-carotene and grown in mineral-rich soils.",
      crop_type: 'Carrot',
      variety: 'Nantes',
      price_per_unit: 40,
      organic: false,
      farmer: "Susan Atieno",
      contact: "susan@example.com",
      location: "Machakos, Kenya",
      available: 25,
      harvest_date: '2023-11-08',
      certification: null
    },
    {
      id: 7,
      title: "Flowers Bouquet",
      image: images.flowers,
      description: "Beautiful fresh flowers for decoration and gifts. Grown in our climate-controlled greenhouses for consistent quality year-round.",
      crop_type: 'Flowers',
      variety: 'Mixed',
      price_per_unit: 150,
      organic: true,
      farmer: "Lucy Wambui",
      contact: "lucy@example.com",
      location: "Naivasha, Kenya",
      available: 10,
      harvest_date: '2023-11-14',
      certification: 'Floral Sustainability Initiative'
    },
    {
      id: 8,
      title: "Organic Wheat",
      image: images.wheat,
      description: "High-quality organic wheat for baking and cooking. Stone-ground to preserve nutrients and flavor.",
      crop_type: 'Wheat',
      variety: 'Hard Red',
      price_per_unit: 90,
      organic: true,
      farmer: "David Omondi",
      contact: "david@example.com",
      location: "Narok, Kenya",
      available: 18,
      harvest_date: '2023-10-25',
      certification: 'USDA Organic'
    },
    {
      id: 9,
      title: "Green Beans",
      image: images.beans,
      description: "Fresh green beans, perfect for stews and salads. Harvested at peak freshness and cooled immediately to preserve crispness.",
      crop_type: 'Beans',
      variety: 'French',
      price_per_unit: 70,
      organic: false,
      farmer: "Esther Mumbi",
      contact: "esther@example.com",
      location: "Meru, Kenya",
      available: 14,
      harvest_date: '2023-11-07',
      certification: null
    },
    {
      id: 10,
      title: "Red Onions",
      image: images.onions,
      description: "Flavorful red onions, perfect for cooking and salads. Naturally cured for maximum shelf life and flavor.",
      crop_type: 'Onion',
      variety: 'Red',
      price_per_unit: 55,
      organic: true,
      farmer: "Sarah Wangui",
      contact: "sarah@example.com",
      location: "Kisumu, Kenya",
      available: 17,
      harvest_date: '2023-10-28',
      certification: 'EU Organic Certified'
    },
    {
      id: 11,
      title: "Sweet Peas",
      image: images.peas,
      description: "Sweet garden peas, freshly picked and packed. Flash-frozen within hours of harvest to lock in nutrients.",
      crop_type: 'Peas',
      variety: 'Garden',
      price_per_unit: 65,
      organic: true,
      farmer: "Paul Gitonga",
      contact: "paul@example.com",
      location: "Embu, Kenya",
      available: 9,
      harvest_date: '2023-11-03',
      certification: 'Organic Farmers Association'
    },
    {
      id: 12,
      title: "Fresh Spinach",
      image: images.spinach,
      description: "Tender spinach leaves, rich in iron and vitamins. Hydroponically grown for clean, consistent quality.",
      crop_type: 'Spinach',
      variety: 'Baby',
      price_per_unit: 50,
      organic: true,
      farmer: "Rebecca Achieng",
      contact: "rebecca@example.com",
      location: "Kakamega, Kenya",
      available: 11,
      harvest_date: '2023-11-09',
      certification: 'KARLO Certified'
    },
    {
      id: 13,
      title: "Ripe Avocados",
      image: images.avocados,
      description: "Creamy Hass avocados, perfect for guacamole or toast. Ethylene-ripened to perfect readiness.",
      crop_type: 'Avocado',
      variety: 'Hass',
      price_per_unit: 100,
      organic: false,
      farmer: "Daniel Omollo",
      contact: "daniel@example.com",
      location: "Murang'a, Kenya",
      available: 7,
      harvest_date: '2023-10-20',
      certification: null
    },
    {
      id: 14,
      title: "Banana Bunch",
      image: images.bananas,
      description: "Sweet and nutritious bananas, great for snacks and cooking. Fairtrade certified and sustainably grown.",
      crop_type: 'Banana',
      variety: 'Cavendish',
      price_per_unit: 120,
      organic: true,
      farmer: "Agnes Nyambura",
      contact: "agnes@example.com",
      location: "Bungoma, Kenya",
      available: 13,
      harvest_date: '2023-10-15',
      certification: 'Fairtrade International'
    },
    {
      id: 15,
      title: "Fresh Mushrooms",
      image: images.mushrooms,
      description: "Organic button mushrooms, great for soups and stir-fries. Grown in controlled environments without pesticides.",
      crop_type: 'Mushroom',
      variety: 'Button',
      price_per_unit: 150,
      organic: true,
      farmer: "Margaret Wanjiru",
      contact: "margaret@example.com",
      location: "Limuru, Kenya",
      available: 5,
      harvest_date: '2023-11-13',
      certification: 'USDA Organic'
    },
    {
      id: 16,
      title: "Farm Fresh Produce Box",
      image: images.farmProduce,
      description: "Assorted fresh vegetables from our farm to your table. Weekly subscription available for consistent supply.",
      crop_type: 'Mixed Vegetables',
      variety: 'Seasonal',
      price_per_unit: 85,
      organic: true,
      farmer: "AgroConnect Farms",
      contact: "farms@agroconnect.com",
      location: "Kitale, Kenya",
      available: 10,
      harvest_date: '2023-11-11',
      certification: 'Farm Verified Organic'
    },
    {
      id: 17,
      title: "Farm Irrigation System",
      image: images.farmEquipment,
      description: "Smart irrigation system with soil moisture sensors for efficient water use. Reduces water consumption by up to 40%.",
      crop_type: 'Equipment',
      variety: 'Irrigation',
      price_per_unit: 2500,
      organic: false,
      farmer: "AgriTech Solutions",
      contact: "sales@agritech.com",
      location: "Nairobi, Kenya",
      available: 3,
      harvest_date: null,
      certification: 'CE Certified'
    },
    {
      id: 18,
      title: "Compact Farm Tractor",
      image: images.tractor,
      description: "Reliable 45HP tractor suitable for small to medium farms. Fuel-efficient with low emissions.",
      crop_type: 'Machinery',
      variety: 'Tractor',
      price_per_unit: 1500000,
      organic: false,
      farmer: "Machinery Direct",
      contact: "sales@machinerydirect.com",
      location: "Nairobi, Kenya",
      available: 2,
      harvest_date: null,
      certification: 'ISO 9001'
    },
    {
      id: 19,
      title: "Organic Veggie Box",
      image: images.mixedVeggies,
      description: "Weekly box of seasonal organic vegetables. Supports small-scale farmers directly.",
      crop_type: 'Vegetables',
      variety: 'Mixed',
      price_per_unit: 95,
      organic: true,
      farmer: "Green Valley Farms",
      contact: "info@greenvalley.com",
      location: "Thika, Kenya",
      available: 8,
      harvest_date: '2023-11-06',
      certification: 'Participatory Guarantee System'
    },
    {
      id: 20,
      title: "Gift Harvest Basket",
      image: images.harvestBasket,
      description: "Beautifully arranged harvest basket with fresh produce. Perfect corporate or holiday gift.",
      crop_type: 'Mixed Produce',
      variety: 'Gift',
      price_per_unit: 350,
      organic: true,
      farmer: "Harvest Gifts",
      contact: "gifts@harvest.com",
      location: "Mombasa, Kenya",
      available: 4,
      harvest_date: '2023-11-14',
      certification: 'Fair Trade Certified'
    }
  ]);

  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterOrganic, setFilterOrganic] = useState('all');
  const [sortOption, setSortOption] = useState('default');
  const [notification, setNotification] = useState(null);
  const [selectedListing, setSelectedListing] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate API call for cart persistence
  useEffect(() => {
    const fetchCart = async () => {
      setIsLoading(true);
      try {
        const savedCart = localStorage.getItem('agroConnectCart');
        if (savedCart) {
          setCart(JSON.parse(savedCart));
        }
      } catch (error) {
        console.error('Error loading cart:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchCart();
  }, []);

  useEffect(() => {
    localStorage.setItem('agroConnectCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    if (item.available <= 0) {
      setNotification({
        message: `Sorry, ${item.title} is out of stock`,
        type: 'error'
      });
      return;
    }

    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      if (existingItem.quantity >= item.available) {
        setNotification({
          message: `Maximum available quantity reached for ${item.title}`,
          type: 'error'
        });
        return;
      }
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    
    setNotification({
      message: `${item.title} added to cart`,
      type: 'success'
    });
    setTimeout(() => setNotification(null), 3000);
  };

  const removeFromCart = (itemId) => {
    const existingItem = cart.find(item => item.id === itemId);
    
    if (existingItem.quantity > 1) {
      setCart(cart.map(item =>
        item.id === itemId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ));
    } else {
      setCart(cart.filter(item => item.id !== itemId));
    }
    
    const item = listings.find(l => l.id === itemId);
    setNotification({
      message: `${item.title} removed from cart`,
      type: 'warning'
    });
    setTimeout(() => setNotification(null), 3000);
  };

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.crop_type.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === 'all' || listing.crop_type === filterType;
    const matchesOrganic = filterOrganic === 'all' || 
                         (filterOrganic === 'organic' && listing.organic) || 
                         (filterOrganic === 'non-organic' && !listing.organic);
    
    return matchesSearch && matchesType && matchesOrganic;
  });

  const sortedListings = [...filteredListings].sort((a, b) => {
    switch (sortOption) {
      case 'price-asc': return a.price_per_unit - b.price_per_unit;
      case 'price-desc': return b.price_per_unit - a.price_per_unit;
      case 'name-asc': return a.title.localeCompare(b.title);
      case 'name-desc': return b.title.localeCompare(a.title);
      case 'available-asc': return a.available - b.available;
      case 'available-desc': return b.available - a.available;
      default: return 0;
    }
  });

  const cropTypes = ['all', ...new Set(listings.map(item => item.crop_type))];
  const cartTotal = cart.reduce((total, item) => total + (item.price_per_unit * item.quantity), 0);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const viewListingDetails = (listing) => {
    setSelectedListing(listing);
  };

  const closeModal = () => {
    setSelectedListing(null);
  };

  const clearCart = () => {
    setCart([]);
    setNotification({
      message: 'Cart cleared successfully',
      type: 'success'
    });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="marketplace-container">
      {notification && (
        <div className={`notification-toast ${notification.type}`}>
          <span>{notification.message}</span>
          <button onClick={() => setNotification(null)} className="close-notification">
            &times;
          </button>
        </div>
      )}

      {selectedListing && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>&times;</button>
            <div className="modal-image-container">
              <ProductImage 
                src={selectedListing.image} 
                alt={selectedListing.title}
                className="modal-image"
              />
            </div>
            <div className="modal-details">
              <h2>{selectedListing.title}</h2>
              <div className="modal-meta">
                <span className="crop-type">{selectedListing.crop_type}</span>
                <span className="variety">{selectedListing.variety}</span>
                {selectedListing.organic && <span className="organic-badge">Organic</span>}
                {selectedListing.certification && <span className="certification-badge">{selectedListing.certification}</span>}
              </div>
              <p className="modal-description">{selectedListing.description}</p>
              
              <div className="tech-info">
                {selectedListing.harvest_date && (
                  <p><strong>Harvest Date:</strong> {new Date(selectedListing.harvest_date).toLocaleDateString()}</p>
                )}
                <p><strong>Location:</strong> {selectedListing.location}</p>
                <p><strong>Available:</strong> {selectedListing.available} units</p>
                {selectedListing.farmer && <p><strong>Farmer:</strong> {selectedListing.farmer}</p>}
                {selectedListing.contact && <p><strong>Contact:</strong> {selectedListing.contact}</p>}
              </div>
              
              <div className="modal-footer">
                <div className="price">KSh {selectedListing.price_per_unit.toLocaleString()}</div>
                <div className="modal-actions">
                  {cart.some(item => item.id === selectedListing.id) ? (
                    <div className="quantity-controls">
                      <button 
                        onClick={() => removeFromCart(selectedListing.id)}
                        className="quantity-btn remove"
                      >
                        -
                      </button>
                      <span className="quantity">
                        {cart.find(item => item.id === selectedListing.id).quantity}
                      </span>
                      <button 
                        onClick={() => addToCart(selectedListing)}
                        className="quantity-btn add"
                        disabled={cart.find(item => item.id === selectedListing.id).quantity >= selectedListing.available}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => addToCart(selectedListing)}
                      className="add-to-cart-btn"
                      disabled={selectedListing.available <= 0}
                    >
                      {selectedListing.available > 0 ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <header className="marketplace-header">
        <div className="header-content">
          <h1>AgroConnect Digital Marketplace</h1>
          <p>Connecting farmers directly with buyers through blockchain-verified transactions</p>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-value">{listings.length}</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{new Set(listings.map(l => l.farmer)).size}</span>
              <span className="stat-label">Verified Farmers</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Traceability</span>
            </div>
          </div>
        </div>
      </header>

      <div className="marketplace-controls">
        <div className="controls-left">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search products, farmers, or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              aria-label="Search marketplace"
            />
            <button className="search-button">Search</button>
          </div>

          <div className="filters-container">
            <div className="filter-group">
              <label htmlFor="crop-type-filter" className="filter-label">Crop Type</label>
              <select
                id="crop-type-filter"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Crop Types</option>
                {cropTypes.filter(type => type !== 'all').map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="organic-filter" className="filter-label">Farming Method</label>
              <select
                id="organic-filter"
                value={filterOrganic}
                onChange={(e) => setFilterOrganic(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Methods</option>
                <option value="organic">Organic Only</option>
                <option value="non-organic">Conventional</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="sort-option" className="filter-label">Sort By</label>
              <select
                id="sort-option"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="filter-select"
              >
                <option value="default">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A-Z</option>
                <option value="name-desc">Name: Z-A</option>
                <option value="available-desc">Availability: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="cart-summary">
          <Link to="/cart" className="cart-link">
            <span className="cart-icon">Cart</span>
            <span className="cart-count">({cartItemCount})</span>
            <span className="cart-total">KSh {cartTotal.toLocaleString()}</span>
          </Link>
          {cart.length > 0 && (
            <button onClick={clearCart} className="clear-cart-btn">
              Clear
            </button>
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>Loading marketplace data...</p>
        </div>
      ) : (
        <div className="listings-grid">
          {sortedListings.length > 0 ? (
            sortedListings.map(listing => (
              <div key={listing.id} className="listing-card" onClick={() => viewListingDetails(listing)}>
                <div className="card-image-container">
                  <ProductImage 
                    src={listing.image} 
                    alt={listing.title}
                    className="card-image"
                  />
                  {listing.organic && <span className="organic-badge">Organic</span>}
                  {listing.available <= 5 && <span className="low-stock-badge">Only {listing.available} left</span>}
                  {listing.available === 0 && <span className="out-of-stock-badge">Out of Stock</span>}
                </div>
                
                <div className="card-content">
                  <h3 className="card-title">{listing.title}</h3>
                  <div className="card-meta">
                    <span className="crop-type">{listing.crop_type}</span>
                    <span className="variety">{listing.variety}</span>
                  </div>
                  
                  <p className="card-description">{listing.description.substring(0, 100)}...</p>
                  
                  <div className="farmer-info">
                    <p><strong>Farmer:</strong> {listing.farmer}</p>
                    <p><strong>Location:</strong> {listing.location}</p>
                  </div>
                  
                  <div className="card-footer">
                    <div className="price">KSh {listing.price_per_unit.toLocaleString()}</div>
                    <div className="card-actions">
                      {cart.some(item => item.id === listing.id) ? (
                        <div className="quantity-controls">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFromCart(listing.id);
                            }}
                            className="cart-btn remove-btn"
                          >
                            -
                          </button>
                          <span className="quantity">
                            {cart.find(item => item.id === listing.id).quantity}
                          </span>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart(listing);
                            }}
                            className="cart-btn add-btn"
                            disabled={cart.find(item => item.id === listing.id).quantity >= listing.available || listing.available === 0}
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(listing);
                          }}
                          className="add-to-cart-btn"
                          disabled={listing.available === 0}
                        >
                          {listing.available > 0 ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <h3>No products match your search</h3>
              <p>Try adjusting your filters or search term</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setFilterType('all');
                  setFilterOrganic('all');
                }}
                className="reset-filters-btn"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      )}

      <div className="marketplace-info">
        <div className="info-section">
          <h3>About Our Marketplace</h3>
          <p>
            AgroConnect uses blockchain technology to provide complete transparency in the agricultural supply chain. 
            Each product listing includes verifiable information about its origin, farming practices, and journey to market.
          </p>
        </div>
        
        <div className="info-section">
          <h3>How It Works</h3>
          <ol className="how-it-works">
            <li>Farmers list their produce with verified details</li>
            <li>Buyers browse and purchase directly from farmers</li>
            <li>Secure payments are held in escrow until delivery</li>
            <li>Products are delivered with full traceability</li>
          </ol>
        </div>
        
        <div className="info-section">
          <h3>Technology Features</h3>
          <ul className="tech-features">
            <li>Blockchain-verified product origins</li>
            <li>IoT-enabled freshness monitoring</li>
            <li>AI-powered quality assessment</li>
            <li>Mobile payment integration</li>
            <li>Real-time logistics tracking</li>
          </ul>
        </div>
      </div>
    </div>
  );
}