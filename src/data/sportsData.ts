export interface SportCategory {
  id: string;
  name: string;
  shortDescription: string;
  items: string[];
  image: string;
  badge: string;
  color: string;
}

export interface ShowcaseProduct {
  id: string;
  name: string;
  category: 'cricket' | 'football' | 'volleyball' | 'indoor' | 'outdoor' | 'shoes' | 'jerseys' | 'awards' | 'accessories';
  description: string;
  highlights: string[];
  image: string;
  tag: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const BUSINESS_INFO = {
  name: 'HN SPORTS HUB',
  shortName: 'HN SPORTS',
  category: 'Sports Shop / Sports Accessories Store',
  phone: '8074121484',
  phoneFormatted: '+91 80741 21484',
  phoneHref: 'tel:8074121484',
  whatsappHref: 'https://wa.me/918074121484?text=Hi%20HN%20Sports%20Hub%2C%20I%20would%20like%20to%20enquire%20about%20sports%20equipment%20availability.',
  address: 'Manjoor Nagar, Manju Nagar, Bhupalpally, Telangana 506169',
  addressLine1: 'Manjoor Nagar, Manju Nagar',
  addressCity: 'Bhupalpally, Telangana 506169',
  instagramUrl: 'https://www.instagram.com/hn_sports_hub30/',
  instagramHandle: '@hn_sports_hub30',
  googleMapsUrl: 'https://maps.app.goo.gl/kbvxsAQTtCTW4AXSA',
  rating: 5.0,
  reviewsCount: 5,
  heroHeadline: 'PLAY HARD. PLAY BOLD.',
  heroSubheading: 'Everything You Need to Play Your Game.',
  heroSupportingText: 'Discover cricket equipment, football, volleyball, indoor games, jerseys, trophies, medals and sports accessories at HN SPORTS HUB, Bhupalpally.',
  aboutHeadline: 'YOUR GAME. YOUR GEAR. YOUR STORE.',
  aboutDescription: 'HN SPORTS HUB is a sports shop in Bhupalpally offering equipment, accessories and sports essentials for different kinds of games. From cricket and football to volleyball, indoor games, jerseys, trophies and medals, customers can explore a variety of sports-related products in one place.',
};

export const QUICK_STATS = [
  { id: 'location', label: 'Bhupalpally', sublabel: 'Manjoor Nagar', icon: 'MapPin' },
  { id: 'rating', label: '5.0 Google Rating', sublabel: '5 Verified Reviews', icon: 'Star' },
  { id: 'store', label: 'Sports Shop', sublabel: 'Complete Gear Store', icon: 'Trophy' },
  { id: 'sports', label: 'Multiple Sports', sublabel: 'Outdoor & Indoor Games', icon: 'Activity' },
  { id: 'awards', label: 'Trophies & Medals', sublabel: 'Tournaments & Awards', icon: 'Medal' },
];

export const SPORTS_CATEGORIES: SportCategory[] = [
  {
    id: 'cricket',
    name: 'CRICKET',
    shortDescription: 'Comprehensive cricket gear and accessories for practice matches and tournaments.',
    items: ['Cricket Bats', 'Cricket Balls (Leather & Tennis)', 'Batting Pads & Gloves', 'Cricket Accessories & Kit Bags'],
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=900&auto=format&fit=crop',
    badge: 'Popular Outdoor Sport',
    color: '#ef4444',
  },
  {
    id: 'football',
    name: 'FOOTBALL',
    shortDescription: 'Durable match footballs, goalkeeper essentials, and football accessories.',
    items: ['Match Footballs & Training Balls', 'Football Accessories & Pumps', 'Shin Guards & Goal Keeper Gloves', 'Training Cones & Gear'],
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=900&auto=format&fit=crop',
    badge: 'High Energy',
    color: '#f97316',
  },
  {
    id: 'volleyball',
    name: 'VOLLEYBALL',
    shortDescription: 'Quality volleyballs and court equipment designed for outdoor and tournament play.',
    items: ['Tournament & Practice Volleyballs', 'Volleyball Accessories', 'Nets & Related Equipment', 'Court Essentials'],
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=900&auto=format&fit=crop',
    badge: 'Team Sport',
    color: '#e11d48',
  },
  {
    id: 'outdoor',
    name: 'OUTDOOR SPORTS',
    shortDescription: 'Equipment and accessories built for high-performance outdoor athletic sports.',
    items: ['Cricket Equipment', 'Football Gear', 'Volleyball', 'Outdoor Training Essentials'],
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80',
    badge: 'Field & Court',
    color: '#dc2626',
  },
  {
    id: 'indoor',
    name: 'INDOOR GAMES',
    shortDescription: 'Classic and competitive indoor games for recreation, clubs, and home play.',
    items: ['Chess Boards & Pieces', 'Carrom Boards, Coins & Striker Sets', 'Indoor Game Accessories', 'Board Game Essentials'],
    image: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=900&auto=format&fit=crop',
    badge: 'Indoor Strategy',
    color: '#f43f5e',
  },
  {
    id: 'shoes',
    name: 'SPORTS SHOES',
    shortDescription: 'Athletic footwear engineered for traction, grip, stability, and speed across terrains.',
    items: ['Running & Training Footwear', 'Turf & Cricket Shoes', 'Court Shoes', 'Comfort Athletic Socks'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop',
    badge: 'Footwear Collection',
    color: '#ef4444',
  },
  {
    id: 'jerseys',
    name: 'JERSEYS & APPAREL',
    shortDescription: 'Breathable sports jerseys and team-style sportswear for players and fans.',
    items: ['Sports Jerseys', 'Team-Style Match Jerseys', 'Athletic Shorts & Trackwear', 'Sports Clothing'],
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80',
    badge: 'Apparel Range',
    color: '#f87171',
  },
  {
    id: 'awards',
    name: 'TROPHIES & MEDALS',
    shortDescription: 'Recognition awards, custom cups, and medals for tournaments, school, and corporate events.',
    items: ['Championship Trophies', 'Gold, Silver & Bronze Medals', 'Sports Awards & Shields', 'Tournament Presentation Sets'],
    image: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=900&auto=format&fit=crop',
    badge: 'Recognition & Victory',
    color: '#e11d48',
  },
  {
    id: 'accessories',
    name: 'SPORTS ACCESSORIES',
    shortDescription: 'Essential fitness and sporting accessories to elevate practice and game day.',
    items: ['Grip Bands, Wristbands & Headbands', 'Ball Pumps & Needles', 'Whistles, Cones & Agility Gear', 'Sports Water Bottles & Kit Bags'],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=900&auto=format&fit=crop',
    badge: 'Essentials',
    color: '#fb7185',
  },
];

export const PRODUCT_SHOWCASE: ShowcaseProduct[] = [
  {
    id: 'cricket-bats',
    name: 'Cricket Bats',
    category: 'cricket',
    description: 'Explore a variety of cricket bats crafted for power-hitting, defensive strokeplay, and tournament matches.',
    highlights: ['Available in various sizes', 'Short handle & full sizes', 'Available in-store'],
    image: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=800&auto=format&fit=crop',
    tag: 'Cricket Gear',
  },
  {
    id: 'cricket-balls',
    name: 'Cricket Balls',
    category: 'cricket',
    description: 'Quality leather balls, heavy tennis balls, and practice balls suited for gully, club, and competitive matches.',
    highlights: ['Leather & heavy tennis balls', 'Durable seam & core', 'Available in-store'],
    image: 'https://images.unsplash.com/photo-1589801258579-18e091f4ca26?q=80&w=800&auto=format&fit=crop',
    tag: 'Cricket Gear',
  },
  {
    id: 'sports-shoes',
    name: 'Sports Shoes',
    category: 'shoes',
    description: 'Athletic footwear with durable soles and breathable fabrics for turf games, running, and athletic training.',
    highlights: ['Firm grip & cushioned sole', 'Multi-ground versatility', 'Explore in-store'],
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop',
    tag: 'Footwear',
  },
  {
    id: 'footballs',
    name: 'Footballs & Gear',
    category: 'football',
    description: 'All-weather footballs with precision stitching, optimal air retention, and reliable bounce for turf and grass.',
    highlights: ['Standard match & practice sizes', 'Durable outer casing', 'Available in-store'],
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=800&auto=format&fit=crop',
    tag: 'Football Range',
  },
  {
    id: 'volleyball-set',
    name: 'Volleyballs',
    category: 'volleyball',
    description: 'Soft-touch cushioned volleyballs designed for outdoor sand, dirt, and indoor court games.',
    highlights: ['Soft panel surface', 'High visibility panels', 'Ask us in-store'],
    image: 'https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=800&auto=format&fit=crop',
    tag: 'Volleyball',
  },
  {
    id: 'chess-sets',
    name: 'Chess Sets',
    category: 'indoor',
    description: 'Tournament and recreational chess boards with solid weighted pieces for strategic minds.',
    highlights: ['Clear notations', 'Durable game pieces', 'Explore our range'],
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800&auto=format&fit=crop',
    tag: 'Indoor Games',
  },
  {
    id: 'carrom-boards',
    name: 'Carrom Boards & Sets',
    category: 'indoor',
    description: 'Smooth wooden carrom boards, precision striker pieces, coins, and premium carrom powder.',
    highlights: ['Smooth playing surface', 'Striker & coin sets', 'Available in-store'],
    image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=80',
    tag: 'Indoor Games',
  },
  {
    id: 'jerseys-apparel',
    name: 'Sports Jerseys & Wear',
    category: 'jerseys',
    description: 'Lightweight, moisture-wicking jerseys and sports apparel for team matches, running, casual sport, and fitness routines.',
    highlights: ['Breathable performance fabric', 'Vibrant athletic colorways', 'Explore our collection'],
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80',
    tag: 'Sportswear',
  },
  {
    id: 'trophies',
    name: 'Trophies',
    category: 'awards',
    description: 'Elegant championship cups, golden sports statuettes, and awards for tournaments and sports celebrations.',
    highlights: ['Various heights & styles', 'Suitable for all sports', 'Available in-store'],
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80',
    tag: 'Trophies & Medals',
  },
  {
    id: 'medals',
    name: 'Medals',
    category: 'awards',
    description: 'Gold, Silver, and Bronze sports award medals with neck ribbons for athletic meets and school competitions.',
    highlights: ['Gold, Silver & Bronze sets', 'Vibrant ribbon attachments', 'Ask for tournament sets'],
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80',
    tag: 'Trophies & Medals',
  },
  {
    id: 'sports-accessories',
    name: 'Sports Accessories',
    category: 'accessories',
    description: 'Essential sporting accessories including ball pumps, wristbands, skip ropes, cones, whistles, and kit bags.',
    highlights: ['Agility & training items', 'Maintenance accessories', 'Available in-store'],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    tag: 'Accessories',
  },
  {
    id: 'outdoor-essentials',
    name: 'Field & Court Sports Gear',
    category: 'outdoor',
    description: 'Reliable field & court equipment and practice accessories to train with intensity and play competitively.',
    highlights: ['Multi-sport court gear', 'Outdoor training essentials', 'Explore our range'],
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
    tag: 'Field & Court',
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'multi-sport',
    title: 'MULTI-SPORT RANGE',
    description: 'Explore equipment and accessories across multiple sports under one roof in Bhupalpally.',
    iconName: 'LayoutGrid',
  },
  {
    id: 'indoor-outdoor',
    title: 'INDOOR + OUTDOOR',
    description: 'Products and accessories for both active outdoor games and classic indoor board games.',
    iconName: 'Compass',
  },
  {
    id: 'accessories-gear',
    title: 'SPORTS ACCESSORIES',
    description: 'Find essential sports accessories, maintenance items, and training gear in one place.',
    iconName: 'Sparkles',
  },
  {
    id: 'jerseys-wear',
    title: 'JERSEYS & SPORTSWEAR',
    description: 'Explore jerseys and sports-related clothing designed for comfort and athletic performance.',
    iconName: 'Shirt',
  },
  {
    id: 'trophies-awards',
    title: 'TROPHIES & MEDALS',
    description: 'Suitable for sports events, local tournaments, school meets, competitions and winner recognition.',
    iconName: 'Award',
  },
  {
    id: 'local-convenient',
    title: 'LOCAL & CONVENIENT',
    description: 'Your accessible, friendly local sports destination located conveniently in Bhupalpally, Telangana.',
    iconName: 'MapPin',
  },
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=600&q=80',
    title: 'Cricket Match Gear & Bats',
    sport: 'Cricket Gear',
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80',
    title: 'Football Match Balls & Kits',
    sport: 'Football',
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=600&q=80',
    title: 'Tournament Award Ceremonies',
    sport: 'Awards & Medals',
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
    title: 'Athletic Shoes & Sneakers',
    sport: 'Footwear',
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=600&q=80',
    title: 'Team Sportswear & Match Kits',
    sport: 'Apparel',
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=600&q=80',
    title: 'Indoor Strategy Board Games',
    sport: 'Indoor Games',
  },
];
