"use client";
// import cn from "../components/lib/cn.ts";
// import * as cn from "../components/lib/cn.ts";
import { cn } from "../components/lib/cn.ts";
import cardBackground from '../img/portfolio/5.jpeg'; 

export function CardDemo() {
  return (
    <div className="max-w-xs w-full group/card">
      <div
      className={cn(
        "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4",
      )}
      style={{ backgroundImage: `url(${cardBackground})`, backgroundSize: 'cover' }}
    >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60">
        </div>

        <div className="text content">
          <h1 className="font-primary italic text-xl md:text-2xl text-gray-50 relative z-10">
            Community Initiatives
          </h1>
          <h2 className="font-primary text-lg md:text-xl text-gray-50 relative z-10">Biskop Screenings</h2>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
          Monthly Community Biskop Screenings in Underprivileged communities and Townships to enable access to a cinematic experiences for the African Child
          </p>
        </div>
      </div>
    </div>
  );
}
