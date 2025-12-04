import { Product } from './types';

export const CATEGORIES = ["All", "Running", "Lifestyle", "Basketball", "Limited Edition"];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Velocity Nitro",
    category: "Running",
    price: 129.99,
    description: "Experience the ultimate in speed and comfort with the Velocity Nitro. Featuring our patented air-mesh technology and responsive cushioning.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: 2,
    name: "Urban Force Low",
    category: "Lifestyle",
    price: 89.99,
    description: "A classic white silhouette that defines street style. Durable leather upper with perforated toe box for breathability.",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1000&auto=format&fit=crop",
    sizes: [6, 7, 8, 9, 10],
    featured: true
  },
  {
    id: 3,
    name: "Street Grey",
    category: "Lifestyle",
    price: 65.00,
    description: "Minimalist grey design for everyday wear. Features a comfortable rubber sole and premium canvas upper.",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000&auto=format&fit=crop",
    sizes: [9, 10, 11, 12, 13, 14],
    featured: true
  },
  {
    id: 4,
    name: "Tech Runner 270",
    category: "Running",
    price: 140.00,
    description: "Futuristic design meets performance. High-top construction with strap support for maximum stability.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    sizes: [7, 8, 9, 10, 11]
  },
  {
    id: 5,
    name: "Fresh Foam Breeze",
    category: "Running",
    price: 110.00,
    description: "Ultra-breathable mesh construction with Fresh Foam technology for a cloud-like running experience.",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop",
    sizes: [8, 9, 10, 11, 12]
  },
  {
    id: 6,
    name: "Skate Pro Black",
    category: "Lifestyle",
    price: 95.00,
    description: "Built for the board. Suede finish with reinforced stitching and impact protection.",
    image: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=1000&auto=format&fit=crop",
    sizes: [6, 7, 8, 9, 10]
  },
  {
    id: 7,
    name: "Beige Weave",
    category: "Lifestyle",
    price: 115.00,
    description: "Sock-like fit with adaptive knit technology. Neutral tones for a versatile look.",
    image: "https://images.unsplash.com/photo-1579338908476-3a3a1d71a706?q=80&w=1000&auto=format&fit=crop",
    sizes: [7, 8, 9, 10, 11, 12, 13]
  },
  {
    id: 8,
    name: "Future Rider Max",
    category: "Limited Edition",
    price: 180.00,
    description: "Bold colors and massive air unit. This limited edition sneaker turns heads wherever you go.",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1000&auto=format&fit=crop",
    sizes: [9, 10, 11],
    featured: true
  },
  {
    id: 9,
    name: "Human Race Prime",
    category: "Running",
    price: 160.00,
    description: "Designed for the human race. Flexible prime knit upper with unique lacing system.",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop",
    sizes: [8, 9, 10, 11, 12]
  },
  {
    id: 10,
    name: "Boost 350 V2",
    category: "Limited Edition",
    price: 250.00,
    description: "The icon. Primeknit upper with distinct center stitching and boost sole.",
    image: "https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1000&auto=format&fit=crop",
    sizes: [5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: 11,
    name: "Air Classic One",
    category: "Lifestyle",
    price: 140.00,
    description: "The one that started it all. Heritage design with visible air cushioning.",
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1000&auto=format&fit=crop",
    sizes: [10, 11, 12, 13, 14, 15]
  },
  {
    id: 12,
    name: "Zoom Flight",
    category: "Running",
    price: 130.00,
    description: "Propulsive feel with zoom air unit. Engineered mesh upper for breathability.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop",
    sizes: [8, 9, 10]
  }
];