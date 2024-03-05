import React from "react";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyToClipboard from "react-copy-to-clipboard";

export function Scriptbox({
  codelanguage,
  codedata,
  children,
}: {
  codelanguage?: string[];
  codedata?: string[];
  children?: any;
}) {
  const codeString = `function add(a, b) {
          return a + b;
        }`;
  const handleCopy = () => {
    console.log("copied");
  };
  if (codelanguage && codedata)
    return (
      <div className="relative">
        <CopyToClipboard text={codeString} onCopy={handleCopy}>
          <div
            className={
              codedata.length === 1
                ? "absolute top-0 right-0 cursor-pointer p-2"
                : "flex items-center text-white gap-4 justify-end p-1  bg-black"
            }
          >
            {codedata.length > 1 ? (
              <p className=" cursor-pointer">lang</p>
            ) : null}
            <Copy
              size={19}
              className="text-slate-300 hover:text-white cursor-pointer"
            />
          </div>
        </CopyToClipboard>
        <SyntaxHighlighter
          language="javascript"
          showLineNumbers
          customStyle={{
            lineHeight: "1",
            fontSize: "15px",
          }}
          style={atomDark}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    );
  return (
    <div className="w-full bg-black text-white flex justify-between items-center p-2 text-[13px] rounded-md">
      {children}
      <Copy className="h-4 text-slate-400 hover:text-white cursor-pointer" />
    </div>
  );
}
