export interface Property {
  id: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  yearBuilt: number;
  propertyType: 'house' | 'apartment' | 'condo';
  description: string;
  imageUrl: string;
}

export interface User {
  id: string;
  email: string;
  subscription: 'free' | 'pro' | 'enterprise';
  createdAt: string;
}

export interface Analysis {
  id: string;
  propertyId: string;
  prediction: {
    estimatedValue: number;
    confidence: number;
    marketTrend: 'up' | 'down' | 'stable';
    recommendedAction: string;
  };
  createdAt: string;
}