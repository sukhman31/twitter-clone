import React from "react"
import LeftSidebar from "./components/LeftSidebar"

export default function Home() {
  return (
  <div className=" w-full h-full flex justify-center items-center relative">
    <div className=" max-w-screen-xl w-full h-full flex relative">
      <div>
        <LeftSidebar />
        <main className=" ml-[275px] pt-3 pl-5 w-[600px] flex-col h-full  min-h-screen border-l border-r border-gray-600">
          <h1 className=" text-xl font-bold">Home</h1>
        </main>
        {/* <div>home timeline</div>
        <div>right section</div> */}
      </div>
    </div>
  </div>
  )
}
