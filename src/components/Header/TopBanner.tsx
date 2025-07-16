export default function TopBanner() {
  return (
    <div className="bg-red-600 text-white text-center lg:py-2.5 sm:py-3 text-xs sm:text-sm font-medium px-2">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
        <span className="bg-white px-2 sm:px-3  sm:py-1 font-bold text-black text-sm sm:text-lg tracking-tighter uppercase">
          MONSOON MAI HOT OFFER, 70% OFF
        </span>
        <span className="hidden sm:inline">Visit MobiXpress Store</span>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-2 py-1 rounded-full text-xs sm:text-sm">
          Click Now
        </button>
        <span className="text-xs text-amber-100">T&C apply</span>
      </div>
    </div>
  )
}
