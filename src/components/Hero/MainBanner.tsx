import Image from 'next/image'

export default function MainBanner() {
  return (
    <div className="w-full h-full">
      <Image
        src="/mainbanner.webp"
        alt="Main Banner"
        width={900}
        height={400}
        className="rounded-xl object-cover w-full"
      />
    </div>
  )
}
