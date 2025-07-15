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
    <div className=" p-4 relative border border-red-300 rounded-xl overflow-hidden shadow-sm flex flex-col items-center justify-between text-center h-80 bg-white">
      
      <div className="relative w-full h-40 flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={175}
          height={175}
          className="object-contain"
        />
        <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-red-500 text-white px-3 py-0.5 text-xs font-semibold rounded">
          {label}
        </div>
      </div>

      <div className="flex-1 px-3 py-2 flex flex-col justify-center">
        <h2 className="text-base font-semibold leading-tight mb-0.5">{title}</h2>
        <div className="text-xs text-gray-500">{location}</div>
      </div>

      <div className="bg-red-500 text-white px-4 py-1 rounded-full mb-3 text-sm font-bold">
        ₹{price}
      </div>
    </div>
  )
}
