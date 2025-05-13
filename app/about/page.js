import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
<div className="min-h-screen bg-gray-50 text-gray-800">
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About BitLinks</h1>
        <p className="text-lg mb-6">
          BitLinks is a simple and efficient URL shortener that helps you transform long, unwieldy links into short and shareable URLs. Whether youre managing marketing campaigns, sharing content, or tracking clicks, BitLinks provides a fast and reliable way to handle your links.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">🚀 Fast & Simple</h2>
            <p>Shorten URLs in seconds with an intuitive interface.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">📊 Analytics</h2>
            <p>Track click rates, traffic sources, and performance in real-time.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">🔒 Secure</h2>
            <p>All shortened links are scanned and protected against malicious content.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">📱 Mobile Friendly</h2>
            <p>Use BitLinks on any device, anywhere, with a responsive interface.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg mb-4">Ready to simplify your links?</p>
          <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}
export default Page
