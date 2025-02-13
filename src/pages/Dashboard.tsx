import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Plus } from 'lucide-react';

const mockProperties = [
  {
    id: '1',
    address: '123 Main St, San Francisco, CA',
    price: 1200000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    id: '2',
    address: '456 Park Ave, San Francisco, CA',
    price: 950000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800&h=600',
  },
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">My Properties</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Property
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProperties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={property.imageUrl}
              alt={property.address}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {property.address}
              </h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-gray-900">
                  ${property.price.toLocaleString()}
                </span>
                <div className="flex items-center space-x-4 text-gray-600">
                  <span>{property.bedrooms} bd</span>
                  <span>{property.bathrooms} ba</span>
                  <span>{property.sqft.toLocaleString()} sqft</span>
                </div>
              </div>
              <Link
                to={`/analysis/${property.id}`}
                className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-50 hover:bg-indigo-100"
              >
                View Analysis
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}