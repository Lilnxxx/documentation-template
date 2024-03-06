import React from "react";

// interface Apidatatype {
//   name: string;
//   datatype: string;
//   req_type: string;
//   children?: any;
// }

export function Apibox({
  name,
  datatype,
  req_type,
  children,
}: {
  name: string;
  datatype: string;
  req_type: string;
  children: any;
}) {
  //   const { name, datatype, req_type, children } = data;
  return (
    <div className=" border-[1px] border-t-slate-700 ">
      <div className="flex gap-3">
        <p className=" font-bold">{name}</p>
        <p className="text-slate-600">{datatype}</p>
        <p className="text-red-600">{req_type}</p>
      </div>
      {children}
    </div>
  );
}
