import { Menu } from "lucide-react";
import React, { useState } from "react";
import { Sidebar } from "./Sidebar";

export function Navbar({ takeref }: { takeref: any }) {
  const [showSidebar, setshowSidebar] = useState(false);
  return (
    <div className="flex top-0 left-0 right-0 z-50 h-12 items-center justify-between bg-slate-400 border-b-[2px] border-slate-500 relative">
      <ul className="flex justify-start items-center mx-4 gap-5 cursor-pointer">
        <li>Overview</li>
        <li>API reference</li>
      </ul>
      <Menu
        className="md:hidden mr-2"
        onClick={() => setshowSidebar(!showSidebar)}
      />
      {/* {showSidebar ? ( */}
      <div
        onClick={() => setshowSidebar(!showSidebar)}
        className={`${
          showSidebar ? "h-fit" : "h-8 hidden"
        } absolute z-10 w-screen top-12 left-2  bg-pink-200 `}
      >
        <Sidebar takeref={takeref} />
      </div>
      {/* // ) : null} */}
    </div>
  );
}
