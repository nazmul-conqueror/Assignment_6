import React from 'react';

const Pricing = () => {
    return (
        <div>
            <div className="py-16 px-4 bg-base-200">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Starter */}
        <div className="card bg-base-100 shadow-md border p-6">
          <h3 className="text-lg font-semibold">Starter</h3>
          <p className="text-gray-500 text-sm mb-3">
            Perfect for getting started
          </p>

          <h2 className="text-3xl font-bold mb-4">
            $0<span className="text-sm text-gray-500">/Month</span>
          </h2>

          <ul className="space-y-2 text-sm mb-6">
            <li>✔ Access to 10 free tools</li>
            <li>✔ Basic templates</li>
            <li>✔ Community support</li>
            <li>✔ 1 project per month</li>
          </ul>

          <button className="btn btn-primary rounded-full w-full">
            Get Started Free
          </button>
        </div>

        {/* Pro (Highlighted) */}
        <div className="card text-white shadow-xl p-6 rounded-2xl relative bg-gradient-to-r from-purple-600 to-indigo-600 scale-105">
          
          {/* Badge */}
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
            Most Popular
          </span>

          <h3 className="text-lg font-semibold">Pro</h3>
          <p className="text-sm opacity-80 mb-3">
            Best for professionals
          </p>

          <h2 className="text-3xl font-bold mb-4">
            $29<span className="text-sm opacity-80">/Month</span>
          </h2>

          <ul className="space-y-2 text-sm mb-6">
            <li>✔ Access to all premium tools</li>
            <li>✔ Unlimited templates</li>
            <li>✔ Priority support</li>
            <li>✔ Unlimited projects</li>
            <li>✔ Cloud sync</li>
            <li>✔ Advanced analytics</li>
          </ul>

          <button className="btn bg-white text-purple-600 border-none rounded-full w-full">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise */}
        <div className="card bg-base-100 shadow-md border p-6">
          <h3 className="text-lg font-semibold">Enterprise</h3>
          <p className="text-gray-500 text-sm mb-3">
            For teams and businesses
          </p>

          <h2 className="text-3xl font-bold mb-4">
            $99<span className="text-sm text-gray-500">/Month</span>
          </h2>

          <ul className="space-y-2 text-sm mb-6">
            <li>✔ Everything in Pro</li>
            <li>✔ Team collaboration</li>
            <li>✔ Custom integrations</li>
            <li>✔ Dedicated support</li>
            <li>✔ SLA guarantee</li>
            <li>✔ Custom branding</li>
          </ul>

          <button className="btn btn-primary rounded-full w-full">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
        </div>
    );
};

export default Pricing;