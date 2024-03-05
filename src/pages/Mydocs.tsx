import React from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

import { Intro } from "../sections/Introduction/intro";
import { Authentication } from "../sections/Introduction/authentication";
import { Request } from "../sections/Introduction/requests";
import { Streaming } from "../sections/Introduction/streaming";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { allElements } from "../utils/data";
import ParallaxDiv from "../sections/ParallaxDiv";
// import { useMemo } from "react";

export function Mydocs() {
  const history = useNavigate();
  const contentref = useRef<HTMLDivElement>(null);
  let sectionIndx = 0;
  // const sectionRefs = useMemo(() => Array(20).fill(0).map(i=> React.createRef()), []);  // const sectionRefs= useRef<Array<React.RefObject<HTMLDivElement>>>(Array.from(20,useRef<HTMLDivElement>(null)))
  // const sectionRefs = useRef<Array<React.RefObject<HTMLDivElement>>>(
  //   Array.from({ length: 20 }, () => useRef<HTMLDivElement>(null))
  // );

  const sectionRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]);
  const debounce = (handleScroll: () => void) => {
    let timeoutId: NodeJS.Timeout;
    return () => {
      console.log("debounce fired ");
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 100);
    };
  };

  const handleScroll = () => {
    console.log("getting height of boxes ");
    for (let i = 0; i < sectionRefs.current.length; i++) {
      const section1Top =
        sectionRefs.current[i].current?.getBoundingClientRect().top;
      if (section1Top) {
        if (section1Top >= 0 && section1Top < window.innerHeight) {
          history(allElements[i]);
          return;
        }
      } else return;
    }
  };

  useEffect(() => {
    console.log("----------------- ", contentref);
    const scrollDiv = contentref.current;
    scrollDiv?.addEventListener("scroll", debounce(handleScroll));

    return () => {
      console.log("removing scroll");
      scrollDiv?.removeEventListener("scroll", debounce(handleScroll));
    };
  }, []);

  return (
    <div>
      <div className=" overflow-scroll overscroll-none m-0 p-0 ">
        <Navbar takeref={sectionRefs} />
        <div className="flex">
          {window.innerWidth > 700 ? <Sidebar takeref={sectionRefs} /> : null}
          <div className=" w-full h-[92.5vh] overflow-auto " ref={contentref}>
            <ParallaxDiv takeref={sectionRefs.current[sectionIndx++]} />
            <Intro takeref={sectionRefs.current[sectionIndx++]} />
            <Authentication takeref={sectionRefs.current[sectionIndx++]} />
            <Request takeref={sectionRefs.current[sectionIndx++]} />
            <Streaming takeref={sectionRefs.current[sectionIndx++]} />
            {/* <div ref={section2}>hola amigos</div> */}
            <Intro takeref={sectionRefs.current[sectionIndx++]} />
            <Authentication takeref={sectionRefs.current[sectionIndx++]} />
            <Request takeref={sectionRefs.current[sectionIndx++]} />
            <Streaming takeref={sectionRefs.current[sectionIndx++]} />
            {/* <div ref={section2}>hola amigos</div> */}
            <Intro takeref={sectionRefs.current[sectionIndx++]} />
            <Authentication takeref={sectionRefs.current[sectionIndx++]} />
            <Request takeref={sectionRefs.current[sectionIndx++]} />
            <Streaming takeref={sectionRefs.current[sectionIndx++]} />
            {/* <div ref={section2}>hola amigos</div> */}
            <Intro takeref={sectionRefs.current[sectionIndx++]} />
            <Authentication takeref={sectionRefs.current[sectionIndx++]} />
            <Request takeref={sectionRefs.current[sectionIndx++]} />
            <Streaming takeref={sectionRefs.current[sectionIndx++]} />
          </div>
        </div>
      </div>
    </div>
  );
}
