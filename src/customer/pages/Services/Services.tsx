import React from 'react'

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to enhance your shopping experience and business growth.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Customer Services */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">E-commerce Platform</h3>
            <p className="text-gray-600 mb-4">
              Complete online marketplace with advanced search, filtering, and secure payment processing.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Product catalog management</li>
              <li>• Secure checkout process</li>
              <li>• Order tracking system</li>
              <li>• Wishlist functionality</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Logistics & Delivery</h3>
            <p className="text-gray-600 mb-4">
              Fast and reliable shipping solutions with real-time tracking and flexible delivery options.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Same-day delivery</li>
              <li>• Express shipping</li>
              <li>• Package tracking</li>
              <li>• Flexible delivery slots</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Support</h3>
            <p className="text-gray-600 mb-4">
              24/7 customer service with multiple communication channels and expert assistance.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Live chat support</li>
              <li>• Phone assistance</li>
              <li>• Email support</li>
              <li>• FAQ & Help center</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Solutions</h3>
            <p className="text-gray-600 mb-4">
              Secure and flexible payment options with industry-leading encryption and fraud protection.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Multiple payment methods</li>
              <li>• Secure transactions</li>
              <li>• Instant refunds</li>
              <li>• Payment protection</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Seller Dashboard</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive tools for sellers to manage inventory, track sales, and grow their business.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Inventory management</li>
              <li>• Sales analytics</li>
              <li>• Order management</li>
              <li>• Revenue tracking</li>
            </ul>
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Premium Services</h2>
            <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
              Unlock exclusive benefits with our premium membership program designed for frequent shoppers and serious sellers.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Free Shipping</div>
                <div className="text-blue-100">On all orders above $50</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Priority Support</div>
                <div className="text-blue-100">Dedicated customer service</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Early Access</div>
                <div className="text-blue-100">To new products & sales</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services