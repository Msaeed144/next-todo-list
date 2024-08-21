'use client'
import Link from "next/link";
import { useState } from "react";

function Header() {
    const [hambur , setHambur] = useState(false)
    const hamburgerHandler = () => {
        if(hambur == false){
            setHambur(true)
        }else{
            setHambur(false)
        }
    }
  return (
    <>
        <header className={`w-full mx-auto  py-2 text-xs sm:flex hidden`}>
          <div>
            <ul className="">
              <li className="xl:mx-8 lg:mx-8 text-white bg-purple-700 p-3 rounded-xl hover:bg-purple-500 hover:cursor-pointer md:text-sm md:mx-3">
              <Link href="/">
                 نسیبا تودو📑
              </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex justify-around">
              <li className=" lg:mx-9 xl:mx-9 md:mx-1 p-3 rounded-xl hover:bg-purple-700 hover:cursor-pointer hover:text-white transition-all">
               <Link href="/">
               خانه
               </Link>
                </li>
              <li className="mx-9 p-3 rounded-xl hover:bg-purple-700 hover:cursor-pointer hover:text-white transition-all">
                <Link href="/add-job">
                افزودن تسک
                </Link>
              </li>
              <li className="mx-9 p-3 rounded-xl hover:bg-purple-700 hover:cursor-pointer hover:text-white transition-all">
               <Link href="/about-us">
                درباره ما
              </Link>
                </li>
            </ul>
          </div>
          {/* <ul className=" flex justify-around">
            <li className="p-2 rounded hover:bg-slate-800 hover:cursor-pointer transition-all">خانه</li>
            <li className="p-2 rounded hover:bg-slate-800 hover:cursor-pointer transition-all">اضافه کردن کار</li>
          </ul> */}
        </header>
        <header className=" flex sm:hidden m-4 justify-end z-10 relative">
              <div id="hamberger" onClick={hamburgerHandler}>
                <span className={` bg-purple-700 w-5 h-1 block rounded-xl mb-1 ${hambur?"rotate-45 translate-y-2":""} transition-all`}></span>
                <span className={` bg-purple-700 w-5 h-1 block rounded-xl mb-1 ${hambur?"hidden":""} transition-all`}></span>
                <span className={` bg-purple-700 w-5 h-1 block rounded-xl ${hambur?"rotate-135 ":""} transition-all`}></span>
              </div>
        </header>
        <div className={`h-full w-full absolute ${hambur?"block":"hidden transition-all"} block sm:hidden bg-gray-300 top-0 z-0`}>
          <ul className="m-12">
            <li className="my-4 text-2xl">
              <Link href="/">
                <p>خانه</p>
              </Link>
            </li>
            <li className="mb-4 text-2xl">
              <Link href="/add-job">
                <p>افزودن تسک</p>
              </Link>
            </li>
            <li className="text-2xl">
              <Link href="/about-us">
                <p>درباره ما</p>
              </Link>
            </li>
          </ul>
       </div>
    </>
  )
}

export default Header