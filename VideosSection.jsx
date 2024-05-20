import React, { useEffect, useState } from "react";

function VideosSection() {
var[a,b] = useState("R.I.P PetrolHeads");
var[c,d] = useState(" Electric ganesha Land");
var[e,f] = useState("Latest Poll");
var[g,h] = useState("What is your favourite genre of music?")
var[i,j] = useState("POP");
var[k,l] = useState("R & B");
var[m,n] = useState("Rock");
var[o,p] = useState("Classical");
var[q,r] = useState("Others");
  return (
    <div id="section2" className="flex justify-center items-center">
    <div className="flex gap-5 max-lg:flex-col">
      <div className="bg-amber-200 h-[20rem] w-[36.5rem] mt-[3rem] rounded-xl border-black border-[1px] shadow-2xl relative flex z-50 max-lg:mt-[28rem]">
        <div className="absolute top-1/2 transform -translate-y-1/2 left-9 flex">
          <img
            className="flex justify-center items-center"
            src="/shape_13.png"
            alt=""
          />
          <div className="flex flex-col gap-2">
          <div className=" bg-amber-100 shadow-xl h-16 p-3 w-[16rem] rounded-md ml-2 gap-2">
            <div className="flex">
            <img className=" mt-[-0.20rem]" src="/layer_19.png" alt="" />
            <h3 className=" font-mono font-bold text-black mt-[-0.5rem]">{a}</h3>
            </div>
            <p className=" ml-[4.5rem] mt-[-2rem]">{c}</p>
          </div>
          <div className=" bg-amber-100 shadow-xl h-16 p-3 w-[16rem] rounded-md ml-2 gap-2">
            <div className="flex">
            <img className=" mt-[-0.20rem]" src="/layer_20_copy.png" alt="" />
            <h3 className=" font-mono font-bold text-black mt-[-0.5rem]">{a}</h3>
            </div>
            <p className=" ml-[4.5rem] mt-[-2rem]">{c}</p>
          </div>
          <div className=" bg-amber-100 shadow-xl h-16 p-3 w-[16rem] rounded-md ml-2 gap-2">
            <div className="flex">
            <img className=" mt-[-0.20rem]" src="/layer_20_copy_2.png" alt="" />
            <h3 className=" font-mono font-bold text-black mt-[-0.5rem]">{a}</h3>
            </div>
            <p className=" ml-[4.5rem] mt-[-2rem]">{c}</p>
          </div>
          <div className=" bg-amber-100 shadow-xl h-16 p-3 w-[16rem] rounded-md ml-2 gap-2">
            <div className="flex">
            <img className=" mt-[-0.20rem]" src="/layer_19.png" alt="" />
            <h3 className=" font-mono font-bold text-black mt-[-0.5rem]">{a}</h3>
            </div>
            <p className=" ml-[4.5rem] mt-[-2rem]">{c}</p>
          </div>
          </div>
        </div>
      </div>
      <div className=" bg-red-700 w-[25rem] h-[20rem] rounded-md shadow-2xl border-black border-2 mt-[3rem] z-50 max-lg:mt-[1rem] max-lg:ml-[6rem]">
        <div className=" bg-red-800 rounded-lg shadow-2xl w-80 text-white  font-mono ml-[2rem] mt-[1rem] flex justify-start items-start font-extrabold px-4">
            {e}
        </div>
        <div className=" bg-red-700 rounded-md shadow-inner w-80 text-white font-thin ml-[2rem] mt-[1rem] justify-start items-start px-3">
            {g}
        </div>
        <div className=" bg-gradient-to-b from-black to-red-700 rounded-md shadow-2xl w-80 text-white font-mono font-semibold ml-[2rem] mt-[1rem] justify-start items-start flex p-1 gap-3">
            <img className=" h-3 mt-1" src="/Shape_20.png" alt="" />
            <div className=" mt-[-0.20rem]">{i}</div>
        </div>
        <div className=" bg-gradient-to-b from-black to-red-700 rounded-md shadow-2xl w-80 text-white font-mono font-semibold ml-[2rem] mt-[1rem] justify-start items-start flex p-1 gap-3">
            <img className=" h-3 mt-1" src="/Shape_20.png" alt="" />
            <div className=" mt-[-0.20rem]">{k}</div>
        </div>
        <div className=" bg-gradient-to-b from-black to-red-700 rounded-md shadow-2xl w-80 text-white font-mono font-semibold ml-[2rem] mt-[1rem] justify-start items-start flex p-1 gap-3">
            <img className=" h-3 mt-1" src="/Shape_20.png" alt="" />
            <div className=" mt-[-0.20rem]">{m}</div>
        </div>
        <div className=" bg-gradient-to-b from-black to-red-700 rounded-md shadow-2xl w-80 text-white font-mono font-semibold ml-[2rem] mt-[1rem] justify-start items-start flex p-1 gap-3">
            <img className=" h-3 mt-1" src="/Shape_20.png" alt="" />
            <div className=" mt-[-0.20rem]">{o}</div>
        </div>
        <div className=" bg-gradient-to-b   from-black to-red-700 rounded-md shadow-2xl w-80 text-white font-mono font-semibold ml-[2rem] mt-[1rem] justify-start items-start flex p-1 gap-3">
            <img className=" h-3 mt-1" src="/Shape_20.png" alt="" />
            <div className=" mt-[-0.20rem]">{q}</div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default VideosSection;
