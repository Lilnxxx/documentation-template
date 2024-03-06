import React from "react";
import { Searchbar } from "./Searchbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Intro_section } from "../utils/data";
import { Ends_section } from "../utils/data";
import { allElements } from "../utils/data";

export function Sidebar({ takeref }: { takeref: any }) {
  // const history = useNavigate();
  const location = useLocation();

  const scrollhandler = (eleRef: number) => {
    console.log("scroll handler ", eleRef);
    if (takeref.current[eleRef]) {
      takeref.current[eleRef]?.current?.scrollIntoView(); // Scroll to the target element
    }
  };
  useEffect(() => {
    // Scroll to the section based on the URL path
    for (let i = 0; i < Intro_section.length; i++)
      if (location.pathname === Intro_section[i].path)
        takeref.current[i].current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className="md:flex flex-col items-center bg-blue-50 md:w-[20%] h-[92.5vh] overflow-auto border-r-[1px] border-slate-500">
      <Searchbar />
      <div className="flex flex-col justify-start w-[90%] text-[15px] leading-loose">
        <div className="my-3 space-y-1 cursor-pointer ">
          <p className="text-[16px] font-bold">Getting Started</p>
          {Intro_section.map((ind, i) => {
            return (
              <p
                onClick={() => scrollhandler(i)}
                className={` ${
                  Intro_section[i].path === location.pathname
                    ? "bg-red-400"
                    : null
                }`}
              >
                {ind.title}
              </p>
            );
          })}
        </div>
        <div className="my-3 space-y-1 cursor-pointer">
          <p className="text-[16px] font-bold">Endpoints</p>
          {Ends_section.map((ind) => {
            return (
              <div>
                <p
                  onClick={() => scrollhandler(ind.id)}
                  className={` ${
                    ind.path === location.pathname ? "bg-red-400" : null
                  }`}
                >
                  {ind.title}
                </p>
                {(location.pathname.includes(ind.path) ||
                  window.innerWidth < 700) &&
                  ind.child.map((ind2) => {
                    return (
                      <p
                        onClick={() => scrollhandler(ind2.id)}
                        className={` ml-2 ${
                          ind2.path === location.pathname
                            ? "bg-yellow-400"
                            : null
                        }`}
                      >
                        {ind2.title}
                      </p>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
