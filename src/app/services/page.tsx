import React from 'react'

export default function page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Our Services</h1>
      <p className="mb-4 text-sm sm:text-base text-gray-600 text-center">
        We offer a wide range of services to meet your needs.
      </p>
      <ul className="list-disc pl-6 mb-4 text-sm sm:text-base space-y-2">
        <li>Consulting</li>
        <li>Development</li>
        <li>Design</li>
        <li>Support</li>
      </ul>
    </div>
  )
}
