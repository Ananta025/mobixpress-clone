import Image from 'next/image'

type Props = {
  name: string
  image: string
  time: string
  address: string
  phone: string
  email: string
  cod: boolean
}

export default function BranchCard({ name, image, time, address, phone, email, cod }: Props) {
  return (
    <div className="rounded-md border border-gray-200 overflow-hidden hover:shadow-md transition-shadow w-full max-w-sm mx-auto">
      <div className="relative">
        {/* increase image height from h-48 to h-52 */}
        <Image src={image} alt={name} width={400} height={250} className="w-full h-40 sm:h-52 object-cover" />
        <span className="absolute top-2 left-2 bg-green-600 text-white px-1 sm:px-2 py-0.5 text-[10px] sm:text-xs rounded">Open</span>
        <div className="absolute bottom-0 left-0 bg-red-600 text-white text-[10px] sm:text-xs font-medium text-center px-1 sm:px-2 py-1 rounded-tr-md">
          ⏰ {time}
        </div>
      </div>
      {/* increase padding from p-3 to p-4 */}
      <div className="p-2 sm:p-4 space-y-1">
        <h4 className="font-semibold text-sm sm:text-base">{name}</h4>
        <p className="text-xs sm:text-sm text-gray-700 flex items-start">
          📍 <span className="ml-1 line-clamp-2">{address}</span>
        </p>
        <p className="text-xs sm:text-sm text-red-600 flex items-center">
          📞 <span className="ml-1">{phone}</span>
        </p>
        <p className="text-xs sm:text-sm text-gray-700 flex items-center">
          📧 <span className="ml-1 break-all">{email}</span>
        </p>
        <p className="text-xs sm:text-sm text-gray-700 flex items-center">
          💵 <span className="ml-1">Cash on Delivery: {cod ? 'yes' : 'no'}</span>
        </p>
      </div>
    </div>
  )
}
