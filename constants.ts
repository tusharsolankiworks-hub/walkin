import { Product } from './types';

export const CATEGORIES = ["All", "Running", "Lifestyle", "Basketball", "Limited Edition"];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Velocity Nitro",
    category: "Running",
    price: 129.99,
    description: "Experience the ultimate in speed and comfort with the Velocity Nitro. Featuring our patented air-mesh technology and responsive cushioning.",
    image: "https://picsum.photos/id/103/600/600",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: 2,
    name: "Urban Drifter X",
    category: "Lifestyle",
    price: 89.99,
    description: "Designed for the city streets. The Urban Drifter X combines minimalist aesthetics with rugged durability.",
    image: "https://picsum.photos/id/21/600/600",
    sizes: [6, 7, 8, 9, 10],
    featured: true
  },
  {
    id: 3,
    name: "Court King Pro",
    category: "Basketball",
    price: 159.99,
    description: "Dominate the paint with ankle support and high-traction soles. The Court King Pro is worn by champions.",
    image: "https://picsum.photos/id/158/600/600",
    sizes: [9, 10, 11, 12, 13, 14],
    featured: true
  },
  {
    id: 4,
    name: "Cloud Walker 2",
    category: "Running",
    price: 110.00,
    description: "Like walking on clouds. Lightweight foam sole meets breathable knit upper.",
    image: "https://picsum.photos/id/250/600/600",
    sizes: [7, 8, 9, 10, 11]
  },
  {
    id: 5,
    name: "Retro High 85",
    category: "Lifestyle",
    price: 145.00,
    description: "A throwback to the golden era of sneakers. Premium leather construction with vintage colorways.",
    image: "https://picsum.photos/id/177/600/600",
    sizes: [8, 9, 10, 11, 12]
  },
  {
    id: 6,
    name: "Sprint Master",
    category: "Running",
    price: 99.50,
    description: "Built for speed. The aerodynamic design cuts through air resistance while you cut seconds off your time.",
    image: "https://picsum.photos/id/96/600/600",
    sizes: [6, 7, 8, 9, 10]
  },
  {
    id: 7,
    name: "Dunk Low Pro",
    category: "Basketball",
    price: 115.00,
    description: "Low profile, high impact. Perfect for the court or the skate park.",
    image: "https://picsum.photos/id/338/600/600",
    sizes: [7, 8, 9, 10, 11, 12, 13]
  },
  {
    id: 8,
    name: "Future Rider",
    category: "Limited Edition",
    price: 220.00,
    description: "Step into tomorrow. Holographic accents and self-lacing mechanism simulation.",
    image: "https://picsum.photos/id/111/600/600",
    sizes: [9, 10, 11],
    featured: true
  },
  {
    id: 9,
    name: "Trail Blazer",
    category: "Running",
    price: 135.00,
    description: "Go off-road with confidence. Reinforced toe cap and water-resistant outer layer.",
    image: "https://picsum.photos/id/112/600/600",
    sizes: [8, 9, 10, 11, 12]
  },
  {
    id: 10,
    name: "Canvas Classic",
    category: "Lifestyle",
    price: 55.00,
    description: "Timeless style. The shoe that goes with everything in your wardrobe.",
    image: "https://picsum.photos/id/225/600/600",
    sizes: [5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: 11,
    name: "Elevation Zero",
    category: "Basketball",
    price: 175.00,
    description: "Maximum jump height support. Shock absorption technology at its finest.",
    image: "https://picsum.photos/id/334/600/600",
    sizes: [10, 11, 12, 13, 14, 15]
  },
  {
    id: 12,
    name: "Night Owl",
    category: "Limited Edition",
    price: 199.99,
    description: "Reflective materials make you shine at night. Limited production run.",
    image: "https://picsum.photos/id/319/600/600",
    sizes: [8, 9, 10]
  }
];