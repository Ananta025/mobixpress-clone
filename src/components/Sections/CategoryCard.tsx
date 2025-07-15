import Image from 'next/image'

type Props = {
  title: string
  image: string
  price: number
}

export default function CategoryCard({ title, image, price }: Props) {
  return (
    <div className="flex items-center w-full max-w-xs mx-auto h-[70px] sm:h-[90px] bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-2 shadow hover:shadow-md transition">
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={title}
          width={40}
          height={40}
          className="sm:w-[50px] sm:h-[50px] rounded-md object-contain"
        />
      </div>
      <div className="ml-2 flex flex-col justify-center min-w-0 flex-1">
        <h3 className="text-gray-800 text-[10px] sm:text-xs font-semibold leading-tight line-clamp-2">{title}</h3>
        <div className="bg-red-600 text-white text-[8px] sm:text-[10px] rounded-full px-1 sm:px-2 py-0.5 mt-1 w-fit">
          ₹{price.toLocaleString()}
        </div>
      </div>
    </div>
  )
}
