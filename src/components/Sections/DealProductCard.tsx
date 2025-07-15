'use client'

import Image from 'next/image'

type Props = {
  title: string
  image: string
  discount: number
  sold: number
  quality: string
  location: string
  price: number
  originalPrice: number
}

export default function DealProductCard({
  title,
  image,
  discount,
  sold,
  quality,
  location,
  price,
  originalPrice,
}: Props) {
  return (
    <div className="border border-gray-200 rounded-lg p-2 sm:p-4 hover:shadow transition-all duration-200 w-full max-w-xs mx-auto h-auto min-h-[320px] sm:min-h-[340px] flex flex-col">
      {/* Image */}
      <div className="relative w-full h-32 sm:h-40 mb-2 flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain rounded"
        />
        <span className="absolute top-0 right-0 bg-green-600 text-white text-[10px] sm:text-[12px] px-1 sm:px-2 py-0.5 rounded-bl-md font-medium">
          {discount}% OFF
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="text-xs sm:text-sm font-semibold line-clamp-2 mb-1">{title}</h3>

          {/* Sold */}
          <p className="mt-1 text-[10px] sm:text-xs font-semibold bg-yellow-400 text-black w-fit px-1 sm:px-2 py-0.5 rounded">
            Sold {sold}
          </p>

          {/* Quality */}
          <p className="text-[10px] sm:text-xs mt-1">
            Quality : <b>{quality}</b>
          </p>

          {/* Location */}
          <p className="text-[10px] sm:text-[11px] text-white bg-red-600 inline-block mt-1 px-1 sm:px-2 py-0.5 rounded">
            {location.toUpperCase()}
          </p>
        </div>

        {/* Price */}
        <div className="mt-2">
          <span className="text-sm sm:text-lg font-bold">₹{price}</span>
          <span className="text-xs sm:text-sm line-through ml-2 text-gray-400">₹{originalPrice}</span>
        </div>
      </div>
    </div>
  )
}
