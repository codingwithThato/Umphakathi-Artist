"use client";
// import cn from "../components/lib/cn.ts";
// import * as cn from "../components/lib/cn.ts";
import { cn } from "../components/lib/cn.ts";
import cardBackground from '../img/portfolio/11.jpeg'; 

export function CardDemo3() {
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
          Arts & Culture
          </h1>
          <h2 className="font-primary text-lg md:text-xl text-gray-50 relative z-10">Experiences</h2>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            A monthly curation of theatre, music, art and film showcases interchanging throughout the year.
          </p>
        </div>
      </div>
    </div>
  );
}
