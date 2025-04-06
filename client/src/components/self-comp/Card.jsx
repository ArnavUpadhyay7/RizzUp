import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Card */}
      <div className="md:w-[25vw] rounded-xl bg-white/10 backdrop-blur-md shadow-2xl p-6 border border-white/20">
        <img
          className="h-[50vh] w-full rounded-lg object-cover shadow-lg"
          src="https://i.pinimg.com/736x/fb/86/93/fb86933d7eca01fca0c2313bb5521cb1.jpg"
          alt="Blonde Baddie"
        />
        <div className="flex justify-between items-center px-2 mt-4">
          <h1 className="text-2xl font-bold text-white drop-shadow-lg">
            Blonde Baddie
          </h1>
          <h1 className="text-2xl font-bold text-gray-300">21</h1>
        </div>
        <p className="px-2 mt-2 text-gray-300 text-md tracking-thight leading-tight">
          Gym rat | Call me "Muscle Mommy" | No Bs, just gains. Not just a
          pretty face—I'll probably outlift you. Swipe right if you can handle
          muscle & attitude.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-6">
        <button className="px-6 py-3 rounded-lg text-white font-semibold transition transform duration-300 shadow-lg bg-gradient-to-r from-red-600 to-red-900 hover:scale-105 hover:shadow-red-500/50 cursor-pointer">
          Reject This Bitch
        </button>
        <button className="px-6 py-3 rounded-lg text-white font-semibold transition transform duration-300 shadow-lg bg-gradient-to-r from-blue-500 to-pink-500 hover:scale-105 hover:shadow-pink-500/50 cursor-pointer">
          Wife Material
        </button>
      </div>
    </div>
  );
};

export default Card;
