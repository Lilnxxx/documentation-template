import React, { useState } from "react";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyToClipboard from "react-copy-to-clipboard";

export function Scriptbox({
  codelanguage,
  codedata,
}: {
  codelanguage?: string[];
  codedata: string[];
}) {
  const [iscopied, setiscopied] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const [codenumber, setcodenumber] = useState(0);

  const togglePopover = () => {
    // alert("asdfasf");
    setShowPopover(!showPopover);
    setTimeout(() => {
      setShowPopover(false);
    }, 3000);
  };

  const handleCopy = () => {
    // e.stopPropagation();
    setiscopied(true);
    setTimeout(() => {
      setiscopied(false);
    }, 900);
  };
  const handelCodechange = (i: number) => {
    console.log(i);
    setcodenumber(i);
    setShowPopover(false);
  };
  if (codelanguage && codedata)
    return (
      <div className="relative ">
        <CopyToClipboard text={codedata[codenumber]}>
          <div
            className={
              codedata.length === 1
                ? "absolute top-0 right-0 cursor-pointer p-2"
                : "flex items-center text-white gap-4 justify-end p-1  bg-black"
            }
          >
            <div className="flex gap-4">
              {codedata.length > 1 ? (
                <div className="relative">
                  <p onClick={togglePopover} className=" cursor-pointer ">
                    {codelanguage[codenumber]}
                  </p>
                  {showPopover && (
                    <div className="absolute top-full left-0 bg-black text-white shadow-md p-2 rounded-md">
                      <ul className=" cursor-pointer">
                        {codelanguage.map((ind, i) => (
                          <li
                            onClick={() => {
                              handelCodechange(i);
                            }}
                          >
                            {ind}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : null}
              {iscopied ? (
                <output className="text-white">Copied</output>
              ) : (
                <Copy
                  onClick={handleCopy}
                  size={19}
                  className="text-slate-300 hover:text-white cursor-pointer "
                />
              )}
            </div>
          </div>
        </CopyToClipboard>
        <SyntaxHighlighter
          language={codelanguage[codenumber]}
          showLineNumbers
          customStyle={{
            lineHeight: "1",
            fontSize: "15px",
            zIndex: "0",
          }}
          style={atomDark}
        >
          {codedata[codenumber]}
        </SyntaxHighlighter>
      </div>
    );
  return (
    <div className="w-full bg-black text-white flex justify-between items-center p-2 text-[13px] rounded-md ">
      <p>{codedata[0]}</p>
      <CopyToClipboard text={codedata[0]}>
        {iscopied ? (
          <output>Copied</output>
        ) : (
          <Copy
            onClick={handleCopy}
            className="h-4 text-slate-400 hover:text-white cursor-pointer "
          />
        )}
      </CopyToClipboard>
    </div>
  );
}
