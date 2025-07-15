import MainBanner from './MainBanner'
import PromoCard from './PromoCard'

export default function Hero() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 px-2 sm:px-4">
      <div className="md:col-span-2">
        <MainBanner />
      </div>

      <div>
        <PromoCard
          image="/APPLE_IPHONE.webp"
          title="MOTOROLA EDGE 50 FUSION 5G"
          location="REJINAGAR"
          price={17499}
        />
      </div>
    </div>
  )
}
