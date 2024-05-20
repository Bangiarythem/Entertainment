import React from "react";

function Cards(props) {
  const { imageSrc, heading, paragraph, buttonText } = props;
  return (
    <div id="section3">
      <div className="bg-amber-50 h-[22rem] w-[22rem] mt-[5rem] rounded-md shadow-2xl max-lg:mt-[2rem]">
        <div className="flex justify-center items-start pt-4 flex-col">
          <img
            className="h-[10rem] w-[18rem] rounded-lg shadow-xl mx-auto"
            src={imageSrc}
            alt=""
          />
          <div className="bg-gradient-to-b from-red-700 to-black h-[2rem] w-[18rem] text-amber-50 shadow-xl rounded-b-lg mx-auto flex justify-center items-center font-mono font-extrabold">
            {heading}
          </div>
          <div className="bg-amber-100 w-[18rem] shadow-xl mx-auto h-[8rem] p-2 flex flex-col justify-between">
            <p>{paragraph}</p>
            <button className="bg-gradient-to-b from-red-700 to-black text-amber-50 shadow-xl rounded-lg p-1 self-end mt-[-1.3rem] max-lg:mt-[-1rem]">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
