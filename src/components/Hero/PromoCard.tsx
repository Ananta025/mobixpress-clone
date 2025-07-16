'use client'

import Image from 'next/image'

interface PromoCardProps {
  image: string
  title: string
  location: string
  price: number
  label?: string
}

export default function PromoCard({
  image,
  title,
  location,
  price,
  label = 'LAST SOLD PRODUCT',
}: PromoCardProps) {
  return (
    <div className="p-2 sm:p-4 relative border border-red-300 rounded-xl overflow-hidden flex flex-col items-center justify-between text-center h-[200px] sm:h-[250px] md:h-[280px] lg:h-[320px] bg-white">
      
      {/* Label badge centered over image */}
      <div className="absolute top-[50px] left-1/2 -translate-x-1/2 bg-red-600 text-white px-3 py-1 text-xs sm:text-sm font-medium bg-opacity-90 z-20 w-2/3">
        {label}
      </div>

      {/* Image */}
      <div className="relative w-full h-24 sm:h-32 md:h-36 lg:h-40 flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="object-contain max-h-full max-w-full z-10"
        />
      </div>

      {/* Title & Location */}
      <div className="flex-1 px-2 sm:px-3 py-1 sm:py-2 flex flex-col justify-center">
        <h2 className="text-sm sm:text-base font-semibold leading-tight mb-0.5 line-clamp-2">
          {title}
        </h2>
        <div className="text-[11px] sm:text-xs text-gray-500">{location}</div>
      </div>

      {/* Price Badge */}
      <div className="bg-red-600 text-white px-3 py-1 text-xs sm:text-sm font-bold rounded-tl-md rounded-br-[6px]">
        ₹{price}
      </div>
    </div>
  )
}
