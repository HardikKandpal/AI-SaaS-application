import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Home, LineChart, CreditCard } from 'lucide-react';
import { useStore } from '../store';

export default function Navbar() {
  const user = useStore((state) => state.user);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Building2 className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">PropAI</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
              <Link
                to="/dashboard"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                <LineChart className="h-4 w-4 mr-1" />
                Dashboard
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                <CreditCard className="h-4 w-4 mr-1" />
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {user ? (
              <span className="text-sm font-medium text-gray-900">
                {user.email}
              </span>
            ) : (
              <Link
                to="/pricing"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}