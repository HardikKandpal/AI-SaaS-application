import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Brain, TrendingUp, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              AI-Powered Real Estate Analysis
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Make smarter property investment decisions with our advanced AI analysis. Get instant property valuations, market trends, and investment recommendations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/pricing"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link
                to="/dashboard"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Advanced Analytics
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for property analysis
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Brain className="h-5 w-5 flex-none text-indigo-600" />
                  AI Predictions
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Get accurate property valuations and market predictions powered by advanced AI algorithms.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <TrendingUp className="h-5 w-5 flex-none text-indigo-600" />
                  Market Trends
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Stay ahead with real-time market trends and investment opportunities in your area.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Shield className="h-5 w-5 flex-none text-indigo-600" />
                  Smart Recommendations
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Receive personalized investment recommendations based on your goals and market conditions.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}