import React from "react";
import { BackgroundGradient } from "./background-gradient";

export function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] md:h-[60vh] h-[60vh] max-w-sm p-4 sm:p-5 bg-zinc-900">
        <img
          src={"https://i.pinimg.com/736x/96/b0/ce/96b0cec9d059cecc1ea7bd219f5db89c.jpg"}
          alt="huzz"
          className="object-contain rounded-xl"
        />
        
      </BackgroundGradient>
    </div>
  );
}
