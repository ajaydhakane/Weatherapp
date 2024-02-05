// import React from 'react'

import { useEffect, useState} from "react";

const Weather = () => {
  const [city,setcity]=useState();
  const [city1,setcity1]=useState();
  const [search,setsearch]=useState("Mumbai");

  // const han = (event) => {
  //   setcity(event.target.value);
  // };

  useEffect(()=>{
    const fetchapi= async()=>
    {
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=abdb47b83a903500d82d8e3e90ec037d`;
      const response=await fetch(url);
      const resjson=await response.json();
      console.log(resjson);
      setcity(resjson.main);
      setcity1(resjson.wind);
    };
    fetchapi();
  },[setsearch,search])
  
  return (

    <div>

    <div className="h-screen w-screen bg-gradient-to-r from-white to-blue-500 py-24">
      <div className="max-w-md bg-gradient-to-r from-cyan-500 to-blue-500 h-10 mx-96 rounded-lg text-center font-semibold text-2xl mb-1"><h1>Live Weather Forcast</h1></div>
      <div className=" max-w-md bg-gradient-to-r from-cyan-500 to-blue-500 h-96 mx-96 rounded-lg " >
        <div className="flex justify-center pt-5">
            <input type="search" name="" id=""   placeholder="search city....." className=" rounded-sm text-blue-500 mr-1 px-2" onChange={(e)=>{setsearch(e.target.value)}}/>
            
        </div>
<div className=" flex justify-center w-full px-10">
            <div className=" w-1/4">
                <img src="./src/icon.svg" className=" h-36 w-15 text-end"/>
            </div>
            <div className="  w-1/2 pt-7">
                <h1 className=" font-semibold text-2xl">{search}</h1>
            </div>
          </div>

          {
          !city ? (
            <p className=" text-center">no data found</p>
          ):(
            <div>
           <div className="flex w-full h-13 justify-center gap-14">
            <div className=" bg-slate-800 px-1 text-white font-semibold">Temperature:<br></br>{city.temp}<sup>0</sup>K</div>
            <div className=" bg-orange-500 px-1  text-white font-semibold"> Humidity:<br></br>{city.humidity}%</div>
          </div>
          <br />
          <div className="flex w-full h-13 justify-center gap-16">

            <div className=" bg-orange-500 px-1  text-white font-semibold">Air Speed:<br></br>{city1.speed}km/h</div>
            <div className=" bg-pink-600 px-1  text-white font-semibold"> Pressure:<br></br>{city.pressure}pa</div>
          </div>
            </div>
          )
        }

        <div>
          
        </div>
        </div>

    </div>

          </div>
  )
}
export default Weather;

