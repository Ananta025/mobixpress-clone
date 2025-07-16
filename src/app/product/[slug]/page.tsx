// app/product/[slug]/page.tsx
'use client'
import Image from 'next/image'
import { trendingProducts } from '@/data/products'
import { use } from 'react'
import ProductDescription from '@/components/product/ProductDescription'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default function ProductPage({ params }: Props) {
  const { slug } = use(params)
  
  const product = trendingProducts.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, '-') === slug
  )

  if (!product) {
    return <div className="p-10 text-center text-xl">Product not found</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        {/* Left Side - Images Section */}
        <div className="space-y-4 sm:space-y-6 flex flex-col items-center">
          {/* Main Product Image */}
          <div className="relative bg-gray-50 rounded-lg p-3 sm:p-6 border w-full max-w-md lg:max-w-none lg:w-[85%] border-gray-400">
            {/* Share icon inside image */}
            <button className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white border border-gray-300 rounded-full p-1 hover:shadow">
              <span title="Share">🔗</span>
            </button>

            <div className="relative h-[250px] sm:h-[320px] w-full">
              <Image
                src={product.backImage || product.image}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Quality badges at bottom */}
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 flex justify-between text-[8px] sm:text-[10px]">
              <span className="bg-red-500 text-white px-1 sm:px-1.5 py-0.5 rounded">50 Point check</span>
              <span className="bg-red-500 text-white px-1 sm:px-1.5 py-0.5 rounded">5 Day return</span>
              <span className="bg-red-500 text-white px-1 sm:px-1.5 py-0.5 rounded">12 mo warranty</span>
            </div>
          </div>

          {/* Thumbnail Images */}
          <div className="flex space-x-2 sm:space-x-3 w-full max-w-md lg:max-w-none lg:w-[85%]">
            {product.thumbnails?.map((thumb, index) => (
              <div key={index} className="w-16 sm:w-20 h-16 sm:h-20 relative border rounded-lg overflow-hidden cursor-pointer border-gray-300 hover:border-blue-300 flex-shrink-0">
                <Image 
                  src={thumb} 
                  alt={`Thumbnail ${index}`} 
                  fill 
                  className="object-contain p-1 sm:p-2" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="space-y-2 sm:space-y-3">
          {/* Brand and Title */}
          <div>
            <p className="text-sm text-gray-500 font-medium">SAMSUNG</p>
            <h1 className="text-lg sm:text-xl font-medium text-gray-900 mt-1">{product.title}</h1>
          </div>

          {/* Price Section */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="text-sm text-red-500 font-medium">-54.55%</span>
            <span className="text-xl sm:text-2xl font-bold text-gray-900">₹{product.price}</span>
            <span className="text-base sm:text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
          </div>

          {/* Product Details */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-900">Store Name:</span>
              <span className="text-sm font-medium text-red-600">{product.storeName}</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-900">Quality:</span>
              <span className="text-sm font-medium">{product.quality}</span>
              <span className="text-sm text-blue-600 cursor-pointer">Learn more</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-900">Color:</span>
              <span className="text-sm font-medium">{product.color}</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-900">Storage:</span>
              <span className="text-sm font-medium">{product.storage}</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-900">Age:</span>
              <span className="text-sm font-medium text-orange-600">{product.age}</span>
            </div>
          </div>

          {/* Warranty Badge */}
          <div className="flex items-center space-x-2">
            <Image src="/warrenty.png" alt="Warranty" width={75} height={50} className="w-12 sm:w-[75px] h-8 sm:h-[50px]" />
            <span className="text-xs sm:text-sm border rounded border-amber-800 text-amber-800 p-0.5">IMEI: {product.imei}</span>
          </div>

          {/* Item Condition */}
          <div>
            <p className="text-sm font-medium text-gray-900 mb-1">Item Condition</p>
            <span className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm">Mint</span>
          </div>

          {/* Color Available */}
          <div>
            <p className="text-sm font-medium text-gray-900 mb-1">Color Available</p>
            <div className="flex space-x-1">
              {product.colorOptions?.map((clr, idx) => (
                <button
                  key={idx}
                  className={`w-6 sm:w-8 h-6 sm:h-8 rounded-full border-2 ${
                    clr === product.color ? 'border-black' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: clr.toLowerCase() }}
                />
              ))}
            </div>
          </div>

          {/* Storage Options */}
          <div>
            <p className="text-sm font-medium text-gray-900 mb-1">Storage</p>
            <div className="flex flex-wrap gap-2">
              {product.storageOptions?.map((st, idx) => (
                <button
                  key={idx}
                  className={`px-2 sm:px-4 py-1 sm:py-2 rounded border text-xs sm:text-sm ${
                    st === product.storage 
                      ? 'bg-red-500 text-white border-red-500' 
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Horizontal line before bottom row */}
          <hr className="my-4 border-t border-gray-300" />

          {/* Pincode Check + Buy Now in same line */}
          <div className="flex flex-col sm:flex-row justify-between space-y-3 sm:space-y-0 sm:space-x-4">
            {/* Pincode input container with check button inside */}
            <div className="w-full sm:w-1/3 relative">
              <input
                type="text"
                placeholder="Enter Pincode"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-20"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 text-sm">
                Check
              </button>
            </div>
            
            {/* Buy Now button taking half space */}
            <button className="w-full sm:w-1/3 px-4 sm:px-6 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 flex items-center justify-center space-x-2">
              <span>⚡</span>
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>


        {/* Product Description Table */}
        <ProductDescription specs={product.specs || []} title={''} />


    </div>
  )
}
