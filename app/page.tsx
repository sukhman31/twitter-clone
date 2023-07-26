import React from "react"
import LeftSidebar from "./components/LeftSidebar"

export default function Home() {
  return (
  <div className=" w-full h-full flex justify-center items-center relative">
    <div className=" max-w-screen-xl w-full h-full flex relative">
      <div>
        <LeftSidebar />
        <main className=" ml-[275px]  w-[600px] flex-col h-full  min-h-screen border-l border-r border-gray-600">
          <h1 className=" text-xl pt-3 pl-5 font-bold h-[106px] ">Home</h1>
          <div className=" pl-4 pt-3 border-t border-b h-[120px] border-gray-600 relative flex items-stretch space-x-2">
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
        </main>
        {/* <div>home timeline</div>
        <div>right section</div> */}
      </div>
    </div>
  </div>
  )
}
