import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-t-gray-200 mt-12 text-sm text-gray-700 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 📱 Brand & about */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Image 
              src="/logo.png" 
              alt="MobiXpress" 
              width={200} 
              height={200}
              className="w-32 sm:w-40 lg:w-48 h-auto"
            />
          </div>
          <p className="text-xs sm:text-sm text-gray-600">
            Mobixpress is the largest mobile store in West Bengal, offering a wide range of smartphones at competitive prices. The store ensures customer satisfaction by providing warranty options, device authenticity checks, and affordable pricing. Mobixpress also offers great exchange deals, allowing customers to upgrade their devices conveniently. With a strong reputation for reliability and excellent customer service, it has become a trusted destination for buyers looking for quality smartphones in West Bengal.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mt-2">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 text-2xl sm:text-3xl">🎧</span>
              <div>
                <p className="text-xs sm:text-sm">Have any question?</p>
                <p className="text-red-600 font-medium">8017999888</p>
              </div>
            </div>
            <button className="bg-green-600 text-white text-xs sm:text-sm px-2.5 py-1 rounded flex items-center justify-center sm:justify-start">
              <span className="mr-1">🟢</span> Live Chat
            </button>
          </div>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">QUICK LINK</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700">
            <span>About Us</span>
            <span>Careers</span>
            <span>Refund & Return Policy</span>
            <span>Privacy Policy</span>
            <span>Contact Us</span>
            <span>Terms & Condition</span>
            <span>Shipping Policy</span>
            <span>Condition Policy</span>
          </div>
        </div>

        {/* 📍 Location + Social */}
        <div>
          <h4 className="font-semibold mb-2">LOCATE US</h4>
          <div className="flex items-start space-x-2 mb-3">
            <span className="bg-red-600 text-white rounded-full p-1 text-xs mt-0.5 flex-shrink-0">📍</span>
            <p className="text-xs sm:text-sm">
              M-1/81, H Road, Anandapuri, Barrackpore, North 24 Parganas, West Bengal, 700122
            </p>
          </div>

          {/* 📣 Social & version under location */}
          <h4 className="font-semibold mb-2 mt-4">FOLLOW US</h4>
          <div className="flex gap-2 mb-2">
            <span className="bg-red-100 text-red-600 rounded p-1">📘</span>
            <span className="bg-red-100 text-red-600 rounded p-1">📸</span>
            <span className="bg-red-100 text-red-600 rounded p-1">▶️</span>
          </div>
          <p className="text-xs">V 2.0</p>
        </div>
      </div>

      <div className="bg-[#1e1e1e] py-4 flex flex-col md:flex-row items-center justify-between text-sm px-4 sm:px-6 lg:px-12 xl:px-40">
        <p className="text-white text-center md:text-left">
          <span className="text-red-600 font-medium">MobiXpress</span> © 2025 All Rights Reserved.
        </p>
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <span className="text-white text-xs sm:text-sm">We Accept:</span>
          <Image 
            src="/visa.png" 
            alt="Visa" 
            width={150} 
            height={150}
            className="w-20 sm:w-24 lg:w-32 h-auto"
          />
        </div>
      </div>
    </footer>
  )
}
