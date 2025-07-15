import Hero from '@/components/Hero/Hero'
import SectionHeader from '@/components/Sections/SectionHeader'
import CategoryCard from '@/components/Sections/CategoryCard'
import TrendingProductCard from '@/components/Sections/TrendingProductCard'
import DealProductCard from '@/components/Sections/DealProductCard'
import BranchCard from '@/components/Branch/BranchCard'
import MobiXpressSection from '@/components/Sections/MobiXpressSection'

import { trendingProducts } from '@/data/products'
import { branches } from '@/data/branches'
import {categories} from '@/data/categories'

export default function HomePage() {
  return (
    <div className="space-y-12 mt-6">
      {/* 🏠 Hero Section */}
      <Hero />

      {/* 📂 Categories */}
      <section>
        <SectionHeader title="Explore Categories" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-3 px-12 py-10">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              image={category.image}
              price={category.price}
            />
          ))}
        </div>
      </section>

      {/* 🔥 Trending Products */}
      <section>
        <SectionHeader title="🔥 Trending Products" />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 py-12 px-10">
          {trendingProducts.map((item) => (
            <TrendingProductCard
              key={item.title}
              title={item.title}
              image={item.image}
              price={item.price}
              originalPrice={item.originalPrice}
              discount={item.discount}
              location={item.location}
              quality={item.quality}
              offAmount={item.offAmount || 0} // ✅ Important fix here
            />
          ))}
        </div>
      </section>

      {/* 🕒 Deal of the Day */}
      <section className="px-12 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          {/* Left Part */}
          <div className="flex flex-col items-start mb-4 md:mb-0 md:mr-6">
            <h2 className="text-2xl font-semibold mb-2">
              <span className="text-red-600 italic">Deal</span> Of The Day
            </h2>
            <button className="border border-red-500 text-red-500 px-3 py-1 rounded-full text-sm hover:bg-red-500 hover:text-white transition mb-2">
              View More →
            </button>
            <div className="flex gap-2">
              <button className="border border-gray-400 text-gray-500 rounded-full p-2 hover:bg-gray-200 transition">
                ←
              </button>
              <button className="border border-gray-400 text-gray-500 rounded-full p-2 hover:bg-gray-200 transition">
                →
              </button>
            </div>
          </div>

          {/* Right Part */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {trendingProducts.slice(0, 3).map((item) => (
              <DealProductCard
                key={item.title}
                title={item.title}
                image={item.image}
                price={item.price}
                originalPrice={item.originalPrice}
                discount={item.discount}
                // Remove offAmount prop as it's not defined in DealProductCard
                location={item.location}
                quality={item.quality} sold={0}              />
            ))}
          </div>
        </div>
      </section>


      {/* 🔥 Hot Deal */}
      <section className="px-12 py-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">
            <span className="text-red-600 italic">Hot</span> Deal
          </h2>
          <button className="border border-red-500 text-red-500 px-3 py-1 rounded-full text-sm hover:bg-red-500 hover:text-white transition">
            View More →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {trendingProducts.slice(4, 8).map((item) => (
            <DealProductCard
              key={item.title}
              title={item.title}
              image={item.image}
              price={item.price}
              originalPrice={item.originalPrice}
              discount={item.discount}
              // Remove offAmount prop as it's not defined in DealProductCard
              location={item.location}
              quality={item.quality} sold={0}            />
          ))}
        </div>
      </section>


      {/* 🌟 Recommended Product */}
      <section className="px-12 py-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">
            <span className="text-red-600 italic">Recommended</span> Product
          </h2>
          <button className="border border-red-500 text-red-500 px-3 py-1 rounded-full text-sm hover:bg-red-500 hover:text-white transition">
            View More →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {trendingProducts.slice(8, 12).map((item) => (
            <TrendingProductCard
              key={item.title}
              title={item.title}
              image={item.image}
              price={item.price}
              originalPrice={item.originalPrice}
              discount={item.discount}
              offAmount={item.offAmount || 0}
              location={item.location}
              quality={item.quality}
            />
          ))}
        </div>
      </section>


      {/* 🏪 MobiXpress Section */}
      <MobiXpressSection />




      {/* 🏪 Our Branch */}
      <section className="px-12 py-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">
            <span className="text-red-600 italic">Our</span> Branch
          </h2>
          <div className="flex space-x-2">
            <button className="border border-gray-400 text-gray-600 rounded-full p-1">
              ←
            </button>
            <button className="border border-gray-400 text-gray-600 rounded-full p-1">
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {branches.map((branch) => (
            <BranchCard key={branch.name} {...branch} />
          ))}
        </div>
      </section>

    </div>
  )
}
