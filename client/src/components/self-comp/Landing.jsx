import React from 'react'
import { BackgroundGradientDemo } from '../aceternity/BackgroundGradientDemo'
import { FaHeart, FaComments, FaUserCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="bg-zinc-950 md:px-36 px-6 pt-32 text-white">

      {/* Background Gradient Animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vh] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl animate-gradientMove rounded-full pointer-events-none"></div>
      <div className="absolute top-[80vh] left-[60vw] w-[30vw] h-[25vh] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl animate-gradientMove rounded-full pointer-events-none"></div>

      <div className="md:flex justify-between items-start w-full">
        
        {/* Left Side */}
        <div className="space-y-6 w-full md:w-1/2">
          <h1 className="text-5xl font-extrabold tracking-tight text-white">
            Rizz<span className="text-blue-500">Up</span>
          </h1>
          <p className="text-lg text-gray-400">
            Swipe, match, and meet your perfect match instantly.
          </p>
          <Link to="cards" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 shadow-lg cursor-pointer">
            Start Swiping
          </Link>

          {/* Decorative Gradient Line */}
          <div className="mt-10 h-1 md:w-[40vw] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-4 bg-zinc-900 rounded-lg shadow-md hover:scale-105">
              <FaHeart className="text-red-500 text-3xl mb-2" />
              <h3 className="text-lg font-bold">Find Love</h3>
              <p className="text-sm text-gray-400">Discover people you vibe with.</p>
            </div>

            <div className="p-4 bg-zinc-900 rounded-lg shadow-md hover:scale-105">
              <FaComments className="text-blue-400 text-3xl mb-2" />
              <h3 className="text-lg font-bold">Chat Instantly</h3>
              <p className="text-sm text-gray-400">Engage in fun and exciting chats.</p>
            </div>

            <div className="p-4 bg-zinc-900 rounded-lg shadow-md hover:scale-105">
              <FaUserCheck className="text-green-400 text-3xl mb-2" />
              <h3 className="text-lg font-bold">Verified Matches</h3>
              <p className="text-sm text-gray-400">Meet real verified users.</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:pt-0 pt-10 relative">
          <BackgroundGradientDemo />
          {/* Floating Decorative Icons */}
          <FaHeart className="absolute top-0 left-[-30px] text-red-500 text-4xl opacity-30 animate-bounce" />
          <FaComments className="absolute bottom-10 right-[-30px] text-blue-400 text-4xl opacity-30 animate-pulse" />
        </div>
      </div>

    </div>
  )
}

export default Landing
