import React from "react";
import { Scriptbox } from "../components/Scriptbox";

export const Section2 = ({
  codestring,
  codelang,
  children,
}: {
  codestring: string;
  codelang: string;
  children: any;
}) => {
  console.log(codestring);
  return (
    <div className="md:flex space-y-12 md:space-y-0 gap-5 justify-start md:w-[120%]">
      <div className="flex flex-col md:w-[70%] ">{children}</div>

      <div className="flex flex-col md:w-[40%]">
        {/* Use a wrapper div to ensure proper positioning */}
        <div className="sticky top-0">
          <Scriptbox codedata={["this is the script"]}></Scriptbox>
          <Scriptbox
            codedata={[codestring]}
            codelanguage={[codelang]}
          ></Scriptbox>
        </div>
      </div>
      {/* <div className="h-fit sticky top-0   md:w-[40%] ">
        <Scriptbox>this is a random script</Scriptbox>
        <Scriptbox codedata={[codestring]} codelanguage={[codelang]}>
          <p>this is the script</p>
        </Scriptbox>
      </div> */}
    </div>
  );
};
