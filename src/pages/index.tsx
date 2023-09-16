
import { getToken } from "@/utils/auth";
import React, { useEffect, useState } from "react";
import Header from "@/component/header";
import axiosInstance from "@/axios/axiosInstance";
import Modal from "@/component/modal";

export default function HomePage() {
  const [news, setNews] = useState ([])
  const [showModal, setShowModal] = useState(false)
  const [selectedData, setSelectedData] = useState('')

  const toggleModal = () =>{
    setShowModal(!showModal)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('');
        setNews(response.data)
        console.log(news, "nananaaannaan"); // Output the response data
      } catch (err) {
        console.error('Error:', err.response.data);
      }
    };

    fetchData();
  }, []);


  return (
    <div className=" w-[100%] ">
      <Header />
      <div className="w-[100%] bg-[#f0f5fc] py-5 px-[20px] lg:px-[60px] md:px-[40px] mb-5 block lg:flex md:flex items-center space-x-0 md:space-x-4 lg:space-x-4 ">
    <button className="btn bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4  "> Trending</button>
    <div className="mt-3 md:mt-0 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita optio obcaecati deserunt tenetur tempora vel  magni.</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-[15px] md:px-[10px] ">
        {
        news?.articles?.map((row, index) =>{
          const _d= new Date(row.publishedAt).toDateString()
          return(
            <>
        <div className="h-[400px] relative " onClick={()=>{
    setShowModal(!showModal)
          setSelectedData(row)
        }}>
          <img  className="h-full w-full object-cover "  src={row.urlToImage} />
          <div className="absolute text-white w-full bottom-0 p-6 ">
            <div className="text-sm">{_d}</div>
            <div className="text-2xl">{row.title}</div>
          </div>
        </div>
        
    
      </>
          )
        })
      }
      {showModal && <Modal data={selectedData} toggleModal={toggleModal} />}
      </div>
      
      
    </div>
  );
}
