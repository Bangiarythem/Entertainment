import React, { useState } from "react";

function Navbar() {

const currentDate = formatDate(new Date());
  var[c,d] = useState("Entertainment");
  var[e,f] = useState("Videos");
  var[g,h] = useState("Images");
  var[i,j] = useState("Movies");
  var[k,l] = useState("Music");
  var[m,n] = useState("Download");
  var[o,p] = useState("On-Demand");
  var[q,r] = useState("Expert Advice");
  var[s,t] = useState("Community");
  var[u,v] = useState("start speak");
  var[w,x] = useState("Offers & Promo");

  function formatDate(date) {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  }

  return (
    <div>
        <div className=" bg-red-950 w-[100%] h-7 absolute z-50 flex flex-col">
            <p className="text-white font-mono font-bold ml-[30rem] max-lg:ml-[0rem] max-lg:flex max-lg:justify-center max-lg:items-center">{currentDate}</p>
        </div>
        <div className="flex max-lg:hidden ">
            <img className=" absolute z-50 left-[55rem] max-lg:left-[45rem] " src="/Layer 6.png" alt=""  />
            <img className=" absolute z-50  left-[56.4rem] mt-2 max-lg:left-[46.6rem]" src="/Login.png" alt="" />
              <img className="absolute z-50  mt-2 left-[59.4rem] max-lg:left-[48rem]" src="/Blog.png" alt="" />
        </div>
      <div className=" bg-red-700 relative flex items-center justify-center h-[10rem] w-full">
        {/* <img className="absolute top-0 left-0 w-full h-40 z-10 object-bottom" src="/layer.png" alt="not showing" /> */}
        <div className=" mt-[3rem] py-16 flex justify-start items-start ml-[-30rem] z-50 absolute max-lg:ml-[-10rem] max-lg:mr-72">
          <a href="#section1"><img className="w-[400px] h-auto max-lg:w-[400px] max-lg:h-auto max-md:w-[200px] max-md:h-auto" src="/Entertainment Live.png" alt="" /></a>
        </div>
        <div className="bg-red-700 w-[60rem] z-40 absolute  h-72 rounded-xl max-lg:hidden">
    <div className="relative h-full">
        {/* Background image */}
        {/* <img className="absolute inset-0 w-full h-full object-cover" src="/layer.png" alt="" /> */}

        {/* Container for images */}
        <div className="absolute bottom-0 left-0 w-full text-center scroll-smooth"> 
            <div className="flex justify-center text-white font-mono font-bold scroll-smooth max-lg:hidden">
                {/* Images */}
                <img src="/layer_4_copy_3.png" alt="" className="mx-1" />
                <a href="#section3"><div>{i}</div></a>
                <img src="/layer_4_copy_3.png" alt="" className="mx-1" />
                <a href="#section2"><div>{k}</div></a>
                <img src="/layer_4_copy_3.png" alt="" className="mx-1" />
                <a href="#section2"><div>{m}</div></a>
                <img src="/layer_4_copy_3.png" alt="" className="mx-1" />
                <a href="#section4"><div>{o}</div></a>
                <img src="/layer_4_copy_3.png" alt="" className="mx-1" />
                <a href="#section4"><div>{q}</div></a>
                <img src="/layer_4_copy_3.png" alt="" className="mx-1" />
                <a href="#section2"><div>{s}</div></a>
                <img src="/layer_4_copy_3.png" alt="" className="mx-1" />
                <a href="#section4"><div>{u}</div></a>
                <img src="/layer_4_copy_3.png" alt="" className="mx-1" />
                <a href="#section3"><div>{w}</div></a>
            </div>
        </div>
    </div>
</div>


        <div className="flex items-center justify-end relative z-50">
          <div className="bg-red-950 h-24 flex items-center justify-center rounded-md px-8 ml-[18rem] mt-[1rem] max-md:px-14">
            <div className="relative z-50 flex flex-col items-center">
              <div className="flex text-black font-semibold">
                <input
                  className="rounded-md bg-amber-100 border-none"
                  type="text"
                  name=""
                  id=""
                  placeholder="Search"
                />
              </div>
              <div className="flex mt-2 relative z-50">
                <img src="/layer_4_copy_3.png" alt="" />
               <a href="#section1"> <div className=" text-white font-mono">{c}</div></a>
                <img src="/layer_4_copy_3.png" alt="" />
                <a href="#section2"><div className=" text-white">{e}</div></a>
                <img src="/layer_4_copy_3.png" alt="" />
                <a href="#section3"><div className=" text-white">{g}</div></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
