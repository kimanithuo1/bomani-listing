import React from 'react'

function Experiences() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-teal mb-6">Experiences</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-custom p-4">
          <h2 className="text-xl font-semibold text-teal mb-2">Local Tours</h2>
          <p className="text-gray-600">Discover amazing local experiences</p>
        </div>
      </div>
    </div>
  )
}

export default Experiences