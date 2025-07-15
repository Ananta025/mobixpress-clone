'use client';
import Image from 'next/image';

export default function MobiXpressSection() {
  const priceRanges = [
    { min: 0, max: 7999 },
    { min: 8000, max: 14999 },
    { min: 15000, max: 29999 },
    { min: 30000, max: 49999 },
    { min: 50000, max: 79999 },
    { min: 80000, max: 150000 }
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Column - Company Description */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              MobiXpress - Trusted Source for Premium Pre-Owned Mobiles.
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              MobiXpress, known as smartphone expert and leading industry from last 5 years, focused on 
              delivering quality products at most affordable prices along with continued customer support services. We 
              ensure best quality products passed from 50 strict quality checks. We aims to contribute towards 
              greener environment and reduce the e-waste. Join our community and get the most reliable and 
              affordable products ever.
            </p>
          </div>

          {/* Center Column - Product Images */}
          <div className="lg:col-span-1 flex justify-center">
            <Image
              src="/Box_Image.webp"
              alt="MobiXpress Banner"
              width={250}
              height={150}
            />
          </div>

          {/* Right Column - Price Ranges */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {priceRanges.map((range, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-md p-2 cursor-pointer transition-all duration-200 hover:bg-red-500 hover:text-white hover:translate-x-3"
                >
                  <span className="font-medium">
                    Between ₹{range.min.toLocaleString()} & ₹{range.max.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
