'use client'

import { useState } from 'react'

type Spec = {
  label: string
  value: string
}

type Props = {
  title: string
  specs: Spec[]
}

export default function ProductDescription({ title, specs }: Props) {
  const [isOpen, setIsOpen] = useState(true) // default open like in the image

  return (
    <div className="mt-8 border border-gray-200 rounded-lg bg-gray-50">
      {/* Tab Header */}
      <div className="flex items-center px-6 pt-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-sm flex items-center justify-between w-full"
        >
          <span className="text-red-600 font-medium border-b-2 border-red-600 pb-1">Description</span>
          <span className="ml-auto text-xl text-gray-700">{isOpen ? '+' : '-'}</span>
        </button>
      </div>

      {/* Description Content */}
      {isOpen && (
        <div className="p-6">
          {/* Product Title */}
          <h2 className="text-xl font-medium text-black mb-4">{title} Samsung Galaxy Tab A9 LTE</h2>

          {/* Specification Table with horizontal and vertical scroll */}
          <div
            className="overflow-x-auto max-w-full"
            style={{
              maxHeight: '420px',
              overflowY: 'auto',
              scrollbarWidth: 'thin',
              scrollbarColor: '#ef4444 #f3f4f6', // red thumb, gray-100 track for Firefox
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                height: 6px;
                width: 6px;
              }
              div::-webkit-scrollbar-thumb {
                background: #ef4444;
                border-radius: 4px;
              }
              div::-webkit-scrollbar-track {
                background: #f3f4f6;
              }
            `}</style>
            <table className="w-full border-l border-r border-t border-b border-gray-300 text-sm bg-white">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2 font-semibold border-b border-gray-300">Category</th>
                  <th className="p-2 font-semibold border-b border-gray-300">Specification</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((spec, index) => (
                  <tr key={index}>
                    <td className="p-3 border-b border-gray-300 font-medium">{spec.label}</td>
                    <td className="p-3 border-b border-gray-300">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
