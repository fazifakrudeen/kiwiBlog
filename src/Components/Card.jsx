import React from "react";

function Card(props) {
  return (
    <div className="border-4 border-[#913175] select-none mt-5 shadow-lg shadow-black p-6 w-[380px] h-[500px] justify-center overflow-y-auto text-justify scrollbar-thin scrollbar-thumb-[#FFEBEB] scrollbar-rounded-* scrollbar-track-[#913175]  md:hover:scale-105 duration-100 rounded-lg touch-pan-y" >
      <h1 className="text-3xl">{props.title}</h1>
      <p className="text-gray-700 text-[15px] text-xs mx-[10px] mt-2">Author : {props.author}@kiwi</p>
      <br />
      <p className="text-gray-400 text-base">{props.note}</p>
    </div>
  );
}

export default Card;