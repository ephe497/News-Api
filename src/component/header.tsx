import React, { useEffect } from "react";

export default function Header () {


  return (
    <div className="w=[100%] px-[70px] py-[15px] flex items-center justify-between  ">
      <div className="text-black-700 font-bold text-[30px]">News
      <span className="text-red-500">Flex</span> 
      </div>
      <div className="flex flex-row space-x-4">
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
      </div>
      
    </div>
  );
}