export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  sizes: number[];
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: number;
}

export interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  country: string;
}
