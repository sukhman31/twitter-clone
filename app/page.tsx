import Link from "next/link";
import React from "react"
import { BiHomeCircle, BiUser } from "react-icons/bi";
import {
  BsBell,
  BsBookmark,
  BsTwitter,
  BsEnvelope,
  BsThreeDots,
} from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";


const navigationItems = [
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Explore",
    icon: HiOutlineHashtag,
  },
  {
    title: "Notifications",
    icon: BsBell,
  },
  {
    title: "Messages",
    icon: BsEnvelope,
  },
  {
    title: "Bookmarks",
    icon: BsBookmark,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
];

export default function Home() {
  return (
  <div className=" w-full h-full flex justify-center items-center relative">
    <div className=" max-w-screen-xl w-full h-full flex relative">
      <div>
        <section className=" fixed w-[275px] flex flex-col h-screen space-y-4 my-4 items-stretch">
          <Link href={'/'} key='twitter-icon' className=" hover:bg-white/10 my-4 text-2xl pl-2.5 pt-3 w-11 h-11 rounded-3xl">
            <BsTwitter/>
          </Link>
          {navigationItems.map((item)=>(
            <Link className=" hover:bg-white/10 text-xl transition duration-200 rounded-3xl p-4 flex items-center justify-start w-fit space-x-2 py-2 px-4" href={`/${item.title.toLowerCase()}`} key={item.title}>
            <div>
              <item.icon/>
            </div>
            <div>
              {item.title}
            </div>
            </Link>
          ))}
          <button className=" w-[250px] rounded-full bg-twitter-blue p-4 text-xl hover:bg-opacity-70 transition duration-200">
            Tweet
          </button>
          <div className=" pl-4 w-full fixed bottom-4 ">
          <button className="flex hover:bg-white/10 items-center space-x-3 w-[250px] h-14 rounded-full bg-transparent p-4 text-md hover:bg-opacity-70 transition duration-200">
            <div className=" rounded-full bg-slate-500 w-8 h-8">

            </div>
            <div>
              <div>Sukhman Singh</div>
              <div className=" text-slate-500">@skhmn</div>
            </div>
            <div>
              <BsThreeDots/>
            </div>
          </button>
          </div>
        </section>
        {/* <div>home timeline</div>
        <div>right section</div> */}
      </div>
    </div>
  </div>
  )
}
