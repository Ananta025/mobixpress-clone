// app/product/[slug]/page.tsx
'use client'
import Image from 'next/image'
import { trendingProducts } from '@/data/products'

type Props = {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: Props) {
  const product = trendingProducts.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  )

  if (!product) {
    return <div className="p-10 text-center text-xl">Product not found</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Images Section */}
        <div className="space-y-6 flex flex-col items-center">
          {/* Main Product Image */}
          <div className="relative bg-gray-50 rounded-lg p-6 border w-[85%]">
            {/* Share icon inside image */}
            <button className="absolute top-3 right-3 bg-white border border-gray-300 rounded-full p-1 hover:shadow">
              <span title="Share">🔗</span>
            </button>

            <div className="relative h-[320px] w-full">
              <Image
                src={product.backImage || product.image}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Quality badges at bottom */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px]">
              <span className="bg-red-500 text-white px-1.5 py-0.5 rounded">50 Point check</span>
              <span className="bg-red-500 text-white px-1.5 py-0.5 rounded">5 Day return</span>
              <span className="bg-red-500 text-white px-1.5 py-0.5 rounded">12 mo warranty</span>
            </div>
          </div>

          {/* Thumbnail Images */}
          <div className="flex space-x-3 w-[85%]">
            {product.thumbnails?.map((thumb, index) => (
              <div key={index} className="w-20 h-20 relative border rounded-lg overflow-hidden cursor-pointer hover:border-blue-500">
                <Image 
                  src={thumb} 
                  alt={`Thumbnail ${index}`} 
                  fill 
                  className="object-contain p-2" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="space-y-2">
          {/* Brand and Title */}
          <div>
            <p className="text-sm text-gray-500 font-medium">SAMSUNG</p>
            <h1 className="text-xl font-medium text-gray-900 mt-1">{product.title}</h1>
          </div>

          {/* Price Section */}
          <div className="flex items-center space-x-3">
            <span className="text-sm text-red-500 font-medium">-54.55%</span>
            <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
            <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
          </div>

          {/* Product Details */}
          <div className="space-y-3">
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
            <Image src="/warrenty.png" alt="Warranty" width={75} height={50} />
            <span className="text-sm border rounded border-amber-800 text-amber-800 p-0.5">IMEI: {product.imei}</span>
          </div>

          {/* Item Condition */}
          <div>
            <p className="text-sm font-medium text-gray-900 mb-1">Item Condition</p>
            <span className="bg-red-500 text-white px-3 py-1 rounded text-sm">Mint</span>
          </div>

          {/* Color Available */}
          <div>
            <p className="text-sm font-medium text-gray-900 mb-1">Color Available</p>
            <div className="flex space-x-1">
              {product.colorOptions?.map((clr, idx) => (
                <button
                  key={idx}
                  className={`w-8 h-8 rounded-full border-2 ${
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
            <div className="flex space-x-2">
              {product.storageOptions?.map((st, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-2 rounded border text-sm ${
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
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
            <input
                type="text"
                placeholder="Enter Pincode"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600">
                Check
            </button>
            <button className="flex-[2] px-6 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 flex items-center justify-center space-x-2">
                <span>⚡</span>
                <span>Buy Now</span>
            </button>
            </div>
        </div>
      </div>
    </div>
  )
}
