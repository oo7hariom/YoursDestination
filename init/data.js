const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States"
  },
  {
    title: "Modern Apartment in the City",
    description: "Stay in this modern apartment located in the heart of the city. Perfect for business or leisure travel.",
    image: "https://images.unsplash.com/photo-1505691723518-36a1e7a1e041?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "New York City",
    country: "United States"
  },
  {
    title: "Rustic Cabin in the Woods",
    description: "Enjoy a peaceful retreat in this rustic cabin surrounded by nature.",
    image: "https://images.unsplash.com/photo-1584138723788-f7f78cf9be96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Aspen",
    country: "United States"
  },
  {
    title: "Luxury Downtown Loft",
    description: "Experience luxury living in this downtown loft with modern amenities and stunning city views.",
    image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Chicago",
    country: "United States"
  },
  {
    title: "Secluded Lake House",
    description: "Relax in this secluded lake house with breathtaking views and private access to the lake.",
    image: "https://images.unsplash.com/photo-1540569014015-19a07a981979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Lake Tahoe",
    country: "United States"
  },
  {
    title: "Charming Countryside Bungalow",
    description: "A charming bungalow in the countryside, perfect for a peaceful and relaxing stay.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "Nashville",
    country: "United States"
  },
  {
    title: "Spacious Suburban Home",
    description: "A spacious home in the suburbs, ideal for families and groups.",
    image: "https://images.unsplash.com/photo-1530731141654-5993c3016c77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "San Francisco",
    country: "United States"
  },
  {
    title: "Cozy Mountain Chalet",
    description: "A cozy chalet in the mountains, perfect for a winter getaway.",
    image: "https://images.unsplash.com/photo-1564049489314-60efe3820cdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 1700,
    location: "Denver",
    country: "United States"
  },
  {
    title: "Modern Beachfront Villa",
    description: "A luxurious beachfront villa with modern amenities and stunning ocean views.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 3200,
    location: "Miami",
    country: "United States"
  },
  {
    title: "Historic Downtown Apartment",
    description: "Stay in this historic apartment located in the heart of downtown.",
    image: "https://images.unsplash.com/photo-1523301343968-6a6c3d4c3a68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Boston",
    country: "United States"
  },
  {
    title: "Spacious City Condo",
    description: "A spacious condo in the city with modern amenities and great views.",
    image: "https://images.unsplash.com/photo-1560448071-3a7b38d51c16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 2700,
    location: "Seattle",
    country: "United States"
  },
  {
    title: "Charming Coastal Home",
    description: "A charming home with breathtaking views of the coast, ideal for a relaxing stay.",
    image: "https://images.unsplash.com/photo-1559767940-18b03a0a9470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Santa Barbara",
    country: "United States"
  },
  {
    title: "Elegant Country Estate",
    description: "Experience luxury in this elegant estate surrounded by beautiful countryside.",
    image: "https://images.unsplash.com/photo-1543486958-d783bfbf7f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Charlottesville",
    country: "United States"
  },
  {
    title: "Cozy Mountain Retreat",
    description: "A cozy retreat in the mountains, perfect for a peaceful getaway.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Denver",
    country: "United States"
  },
  {
    title: "Beach House with Private Pool",
    description: "Relax in this spacious beach house with a private pool and stunning ocean views.",
    image: "https://images.unsplash.com/photo-1570410307244-ff3b641a0ef1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "San Diego",
    country: "United States"
  },
  {
    title: "Modern Loft with City Views",
    description: "Stay in this modern loft with stunning city views and all the amenities you need.",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Portland",
    country: "United States"
  },
  {
    title: "Rustic Barn House",
    description: "A rustic barn house located in the countryside, perfect for a quiet and peaceful retreat.",
    image: "https://images.unsplash.com/photo-1616627987552-7eeab7f3e3ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Lancaster",
    country: "United States"
  },
  {
    title: "Charming Downtown Studio",
    description: "A charming studio located in the heart of downtown, perfect for solo travelers or couples.",
    image: "https://images.unsplash.com/photo-1563729784474-40ab529fd011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "Philadelphia",
    country: "United States"
  },
  {
    title: "Luxury Penthouse Suite",
    description: "Experience luxury in this penthouse suite with breathtaking views and modern amenities.",
    image: "https://images.unsplash.com/photo-1598454442573-76da8b6fbd7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 7000,
    location: "Los Angeles",
    country: "United States"
  },
  {
    title: "Secluded Forest Cabin",
    description: "A secluded cabin in the forest, perfect for nature lovers and outdoor enthusiasts.",
    image: "https://images.unsplash.com/photo-1564860730292-5379a68b46b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Asheville",
    country: "United States"
  },
  {
    title: "Modern Farmhouse",
    description: "Stay in this modern farmhouse with all the comforts of home and beautiful surroundings.",
    image: "https://images.unsplash.com/photo-1606851367444-9c31c9e43b8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Austin",
    country: "United States"
  },
  {
    title: "Chic City Apartment",
    description: "A chic apartment located in the heart of the city, perfect for urban explorers.",
    image: "https://images.unsplash.com/photo-1600607680521-d2d1f3c1d8f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 1900,
    location: "San Francisco",
    country: "United States"
  },
  {
    title: "Quaint Country Cottage",
    description: "A quaint cottage in the country, perfect for a relaxing getaway.",
    image: "https://images.unsplash.com/photo-1608536847920-9237dd1ed763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Savannah",
    country: "United States"
  },
  {
    title: "Modern Beach House",
    description: "Stay in this modern beach house with stunning ocean views and all the amenities you need.",
    image: "https://images.unsplash.com/photo-1602511542865-3d9e92a18788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Myrtle Beach",
    country: "United States"
  },
  {
    title: "Luxury City Condo",
    description: "A luxury condo in the city with all the modern amenities and great views.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Dallas",
    country: "United States"
  },
  {
    title: "Rustic Log Cabin",
    description: "Stay in this rustic log cabin surrounded by nature, perfect for a peaceful retreat.",
    image: "https://images.unsplash.com/photo-1600566751411-cfb51a0e85f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Gatlinburg",
    country: "United States"
  },
  {
    title: "Charming Coastal Cottage",
    description: "A charming cottage located on the coast, perfect for a relaxing stay.",
    image: "https://images.unsplash.com/photo-1598312012175-c148254aa640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Cape Cod",
    country: "United States"
  }
];

module.exports = { data: sampleListings };