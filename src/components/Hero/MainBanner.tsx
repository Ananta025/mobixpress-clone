import Image from 'next/image'

export default function MainBanner() {
  return (
    <div className="w-full h-full">
      <Image
        src="/mainbanner.webp"
        alt="Main Banner"
        width={900}
        height={400}
        className="rounded-xl object-cover w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px]"
      />
    </div>
  )
}
