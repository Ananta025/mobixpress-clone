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
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow transition-all duration-200 w-64 h-84">
      {/* Image */}
      <div className="relative w-full h-40 mb-2">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain rounded"
        />
        <span className="absolute top-0 right-0 bg-green-600 text-white text-[12px] px-2 py-0.5 rounded-bl-md font-medium">
          {discount}% OFF
        </span>
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>

      {/* Sold */}
      <p className="mt-1 text-xs font-semibold bg-yellow-400 text-black w-fit px-2 py-0.5 ">
        Sold {sold}
      </p>

      {/* Quality */}
      <p className="text-xs mt-1">
        Qulity : <b>{quality}</b>
      </p>

      {/* Location */}
      <p className="text-[11px] text-white bg-red-600 inline-block mt-1 px-2 py-0.5 ">
        {location.toUpperCase()}
      </p>

      {/* Price */}
      <div className="mt-1">
        <span className="text-lg font-bold">₹{price}</span>
        <span className="text-sm line-through ml-2 text-gray-400">₹{originalPrice}</span>
      </div>
    </div>
  )
}
