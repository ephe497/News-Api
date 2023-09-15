import React, { useState, useEffect } from "react";

export default function Header () {
 const [menuOpen, setMenuOpen] = useState (false)

  return (
    <>
     <div className="w=[100%] px-[10px] lg:px-[70px] md:px-[50px] py-[15px] flex flex-col lg:flex-row md:flex-row items-start lg:items-center md:items-center justify-between bg-[#0d3958] sticky ">
      <div className="text-black-700 font-bold text-[30px]">News
      <span className="text-red-500">Flex</span> 
      </div>
      <div className="block lg:hidden md:hidden absolute right-[0.75rem] ">
    <button className="flex items-center px-3 py-2 border rounded text-black-200 border-black-400 hover:text-white hover:border-white" onClick={() => {
      setMenuOpen(!menuOpen)
    }}>
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>

    
  </div>

      <div className={menuOpen? "flex flex-col" : "hidden  w-100 lg:flex-row space-x-4 lg:flex md:flex "}>
             
  <select name="cars" id="cars" className="bg-inherit border-non mb-3 lg:mb-0 md:lg-0 hover:bg-cyan-600">
  <option value="volvo">International</option>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
        
        <div className="mb-3 lg:mb-0 md:lg-0 hover:bg-cyan-600">Local News</div>
      
  <select name="cars" id="cars" className="bg-inherit border-none mb-3 lg:mb-0 md:lg-0 hover:bg-cyan-600" >
  <option value="volvo">Pages</option>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
        
      
  <select name="cars" id="cars" className="bg-inherit border-none mb-3 lg:mb-0 md:lg-0 hover:bg-cyan-600" >
  <option value="volvo">Sport</option>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>

       <div className="mb-3 lg:mb-0 md:lg-0 hover:bg-cyan-600">Lifestyle</div>
      </div>
      
    </div>
    {/* <div className="fixed bg-slate-300 flex lg:hidden md:hidden flex-col h-auto ">
    <form>
        <label for="cars"></label>
  <select name="cars" id="cars">
  <option value="volvo">International</option>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
        </form>
        <div>Local News</div>
        <form>
        <label for="cars"></label>
  <select name="cars" id="cars">
  <option value="volvo">Pages</option>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
        </form>
        <form>
        <label for="cars"></label>
  <select name="cars" id="cars">
  <option value="volvo">Sport</option>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
        </form>
       <div>Lifestyle</div>
    </div> */}
    </>
   
  );
}