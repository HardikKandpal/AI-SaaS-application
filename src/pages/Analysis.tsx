import React from 'react';
import { useParams } from 'react-router-dom';
import { TrendingUp, TrendingDown, MinusCircle, DollarSign, Percent, Building2 } from 'lucide-react';

const mockAnalysis = {
  property: {
    address: '123 Main St, San Francisco, CA',
    price: 1200000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    yearBuilt: 1985,
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=800&h=600',
  },
  prediction: {
    estimatedValue: 1250000,
    confidence: 92,
    marketTrend: 'up',
    recommendedAction: 'Buy',
    analysis: [
      {
        factor: 'Location',
        impact: 'positive',
        description: 'Prime location with excellent schools and amenities',
      },
      {
        factor: 'Market Conditions',
        impact: 'positive',
        description: "Strong seller's market with limited inventory",
      },
      {
        factor: 'Property Condition',
        impact: 'neutral',
        description: 'Well-maintained but may need minor updates',
      },
    ],
  },
};

export default function Analysis() {
  const { id } = useParams();

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-6 w-6 text-green-500" />;
      case 'down':
        return <TrendingDown className="h-6 w-6 text-red-500" />;
      default:
        return <MinusCircle className="h-6 w-6 text-yellow-500" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'positive':
        return 'text-green-500';
      case 'negative':
        return 'text-red-500';
      default:
        return 'text-yellow-500';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64">
          <img
            src={mockAnalysis.property.imageUrl}
            alt={mockAnalysis.property.address}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-3xl font-bold text-white">Property Analysis</h1>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Property Details</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Building2 className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">{mockAnalysis.property.address}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-500">Price</span>
                    <p className="text-lg font-semibold">
                      ${mockAnalysis.property.price.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500">Year Built</span>
                    <p className="text-lg font-semibold">{mockAnalysis.property.yearBuilt}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Square Feet</span>
                    <p className="text-lg font-semibold">
                      {mockAnalysis.property.sqft.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500">Bed/Bath</span>
                    <p className="text-lg font-semibold">
                      {mockAnalysis.property.bedrooms}/{mockAnalysis.property.bathrooms}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">AI Analysis</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <span className="text-gray-500">Estimated Value</span>
                    <p className="text-2xl font-bold text-indigo-600">
                      ${mockAnalysis.prediction.estimatedValue.toLocaleString()}
                    </p>
                  </div>
                  <DollarSign className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <span className="text-gray-500">Confidence Score</span>
                    <p className="text-2xl font-bold text-indigo-600">
                      {mockAnalysis.prediction.confidence}%
                    </p>
                  </div>
                  <Percent className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <span className="text-gray-500">Market Trend</span>
                    <p className="text-2xl font-bold text-indigo-600">
                      {mockAnalysis.prediction.marketTrend.toUpperCase()}
                    </p>
                  </div>
                  {getTrendIcon(mockAnalysis.prediction.marketTrend)}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Detailed Analysis</h2>
            <div className="space-y-4">
              {mockAnalysis.prediction.analysis.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <h3 className="font-semibold flex items-center">
                    <span className={getImpactColor(item.impact)}>{item.factor}</span>
                  </h3>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}