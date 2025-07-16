import Image from 'next/image'

type Props = {
  title: string
  image: string
  price: number
}

export default function CategoryCard({ title, image, price }: Props) {
  return (
    <div className="flex items-center w-full max-w-xs h-[96px] bg-gradient-to-r from-pink-100 via-pink-50 to-white rounded-xl p-3">
      {/* Image */}
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={title}
          width={64}
          height={64}
          className="rounded-md object-contain w-16 h-16"
        />
      </div>

      {/* Content */}
      <div className="ml-5 flex flex-col justify-center flex-1 min-w-0">
        <h3 className="text-gray-800 text-sm sm:text-base font-semibold truncate">
          {title}
        </h3>
        <span className="mt-1 inline-block text-white bg-red-600 lg:text-[11px] sm:text-sm font-medium px-2.5 py-[2px] rounded-tl-xl rounded-br-xl w-fit">
          ₹{price.toLocaleString()}
        </span>
      </div>
    </div>
  )
}
