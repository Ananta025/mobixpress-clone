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
    <div className="p-2 sm:p-4 relative border border-red-300 rounded-xl overflow-hidden shadow-sm flex flex-col items-center justify-between text-center h-[200px] sm:h-[250px] md:h-[280px] lg:h-[320px] bg-white">
      
      <div className="relative w-full h-24 sm:h-32 md:h-36 lg:h-40 flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={175}
          height={175}
          className="object-contain max-h-full max-w-full"
        />
        <div className="absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 bg-red-500 text-white px-2 sm:px-3 py-0.5 text-[10px] sm:text-xs font-semibold rounded">
          {label}
        </div>
      </div>

      <div className="flex-1 px-2 sm:px-3 py-1 sm:py-2 flex flex-col justify-center">
        <h2 className="text-xs sm:text-base font-semibold leading-tight mb-0.5 line-clamp-2">{title}</h2>
        <div className="text-[10px] sm:text-xs text-gray-500">{location}</div>
      </div>

      <div className="bg-red-500 text-white px-2 sm:px-4 py-1 rounded-full mb-2 sm:mb-3 text-xs sm:text-sm font-bold">
        ₹{price}
      </div>
    </div>
  )
}
