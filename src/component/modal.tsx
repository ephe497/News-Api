import React from "react";

export default function Modal ({data ,toggleModal}) {
    // console.log(props)
    console.log(data ,"datatatata")
    return(
        <div className="fixed z-[1] pt-[100px] left-0 top-0 w-full h-full overflow-auto bg-[0,0,0] bg-[rgba(0,0,0,0.4)] ">
             <div className="bg-[#fefefe] m-auto p-[20px] border border-[#888] border-solid w-[80%] ">
             <span onClick={toggleModal} className="cursor-pointer hover:text-[#000] text-[#aaa] float-right text-[28px] font-bold ">&times;</span>
               <h1 className="text-2xl font-bold mb-3"> Author: {data.author}</h1>
               <h3 className="text-xl mb-3">{data.title}</h3>
               <img src={data.urlToImage} />
               <div className="sm:text-xs hidden md:block">{data.description}</div>
               <div></div>
               <div className="text-sm">{data.content}</div>
               <div className="w-full text-center">
               <a href={data.url} target="_blank">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5">Read full content</button>

                </a> 
               </div>
             </div>
        </div>
    )
}
