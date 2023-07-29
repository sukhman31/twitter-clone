import React from "react"
import LeftSidebar from "./components/LeftSidebar"
import { BsChat, BsDot, BsThreeDots } from "react-icons/bs"
import {AiOutlineHeart, AiOutlineRetweet} from "react-icons/ai"
import {IoShareOutline, IoStatsChart} from "react-icons/io5"

export default function Home() {
  return (
  <div className=" w-full h-full flex justify-center items-center relative">
    <div className=" max-w-screen-xl w-full h-full flex relative">
      <div>
        <LeftSidebar />
        <main className=" ml-[275px]  w-[600px] flex-col h-full  min-h-screen border-l border-r border-gray-600">
          <h1 className=" text-xl pt-3 pl-5 font-bold h-[106px] border-b border-gray-600 backdrop-blur bg-black/10 sticky top-0">Home</h1>
          <div className=" pl-4 pt-3 border-b h-[120px] border-gray-600 relative flex items-stretch space-x-2">
            <div className=" rounded-full bg-slate-500 w-10 h-10 flex-none"></div>
            <div className="flex flex-col w-full h-full">
              <div>
                <input type="text" placeholder="What is happening?!" className="p-2 bg-black w-full h-full outline-none border-none text-xl"/>
              </div>
              <div className=" w-full justify-between items-center flex">
                <div></div>
                <div className=" pr-3 pt-4">
                <button className="w-[89px] h-[36px] rounded-full bg-twitter-blue hover:bg-opacity-70 transition duration-200">
                  Tweet
                </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {
              Array.from({length:5}).map((_,i)=>(
                <div key={i} className="border-b px-4 border-gray-600 flex space-x-4">
                    <div>
                      <div className="w-10 h-10 bg-slate-200 rounded-full mt-2">
                      </div>
                    </div>
                    <div className=" flex flex-col">
                      <div className=" flex justify-between items-center">
                        <div className=" flex items-center space-x-1 mt-2">
                          <div className=" font-bold">Sukhman Singh</div>
                          <div className=" text-gray-400">@skhmn</div>
                          <div className=" text-gray-400"><BsDot/></div>
                          <div className=" text-gray-400">6h</div>
                        </div>
                        <div className="mt-2 p-2 hover:bg-twitter-blue/30 rounded-full">
                          <BsThreeDots/>
                        </div>
                      </div>
                      <div className=" mt-1 mb-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam reiciendis perferendis quam ipsam voluptate tempore. Facere quod, cupiditate expedita necessitatibus nulla quia voluptates nesciunt doloremque inventore, voluptatum quibusdam deserunt.
                      </div>
                      <div className=" bg-slate-400 aspect-square w-[450px] h-96 rounded-xl mb-3">

                      </div>
                      <div className=" flex items-center justify-between w-full mb-3">
                        <div className=" rounded-full hover:bg-twitter-blue/30 p-2 cursor-pointer transition duration-200">
                          <BsChat/>
                        </div>
                        <div className=" rounded-full hover:bg-twitter-blue/30 p-2 cursor-pointer transition duration-200">
                          <AiOutlineRetweet/>
                        </div>
                        <div className=" rounded-full hover:bg-twitter-blue/30 p-2 cursor-pointer transition duration-200">
                          <AiOutlineHeart/>
                        </div>
                        <div className=" rounded-full hover:bg-twitter-blue/30 p-2 cursor-pointer transition duration-200">
                          <IoStatsChart/>
                        </div>
                        <div className=" rounded-full hover:bg-twitter-blue/30 p-2 cursor-pointer transition duration-200">
                          <IoShareOutline/>
                        </div>
                      </div>
                    </div>
                </div>
              ))
            }
          </div>
        </main>
        {/* <div>home timeline</div>
        <div>right section</div> */}
      </div>
    </div>
  </div>
  )
}
