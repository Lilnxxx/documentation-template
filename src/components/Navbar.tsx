import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { useLocation } from "react-router-dom";

export function Navbar({ takeref }: { takeref: any }) {
  const [showSidebar, setshowSidebar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    // console.log("treueeeeeeeeeeeeeeeee");
    if (showSidebar) setshowSidebar(false);
  }, [location.pathname]);
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
          showSidebar ? "" : " hidden"
        } absolute z-10 w-screen top-12 left-2  bg-pink-200 h-[54vh] border-b-2 border-slate-600 overflow-auto `}
      >
        <Sidebar takeref={takeref} />
      </div>
      {/* // ) : null} */}
    </div>
  );
}
