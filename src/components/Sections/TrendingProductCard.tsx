'use client'

import Image from 'next/image'
import Link from 'next/link'

type Props = {
  title: string
  image: string
  discount: number
  offAmount: number
  quality: string
  location: string
  price: number
  originalPrice: number
}

export default function TrendingProductCard({
  title,
  image,
  discount,
  offAmount,
  quality,
  location,
  price,
  originalPrice,
}: Props) {
  return (
    <Link href={`/product/${title.toLowerCase().replace(/\s+/g, '-')}`}>
    <div className="flex gap-6 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200 w-96 max-w-full">
      {/* Left - Product Image */}
      <div className="relative w-28 h-28 flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="112px"
          className="object-contain rounded"
        />
        {/* Discount % Badge */}
        <span className="absolute top-0 left-0 bg-green-600 text-white text-[11px] px-2 py-[2px] rounded-br-md font-semibold">
          {discount}% OFF
        </span>
      </div>

      {/* Right - Details */}
      <div className="flex flex-col justify-between text-left w-full">
        <h3 className="text-sm font-semibold leading-snug line-clamp-2">
          {title}
        </h3>

        {/* ₹ Off Badge - its own line */}
        <span className="bg-amber-600 text-white px-2 py-[2px] text-[11px] font-medium mt-1 w-fit">
          ₹{offAmount} Off
        </span>

        {/* Quality - its own line */}
        <p className="text-xs mt-1">
          Quality: <b>{quality}</b>
        </p>

        {/* Location Badge - its own line */}
        <span className="bg-red-600 text-white px-2 py-[2px] text-[11px] font-semibold mt-1 w-fit">
          {location.toUpperCase()}
        </span>

        {/* Price Section */}
        <div className="mt-2">
          <span className="text-base font-bold text-black">₹{price}</span>
          <span className="text-sm text-gray-400 line-through ml-2">
            ₹{originalPrice}
          </span>
        </div>
      </div>
    </div>
    </Link>
  )
}
