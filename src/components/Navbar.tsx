import React from "react";
export function Navbar() {
  return (
    <div className="flex h-12 items-center bg-slate-400 border-b-[2px] border-slate-500">
      <ul className="flex justify-start items-center mx-4 gap-5 cursor-pointer">
        <li>Overview</li>
        <li>API reference</li>
      </ul>
    </div>
  );
}
