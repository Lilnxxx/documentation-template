import React from "react";
import { Scriptbox } from "../components/Scriptbox";
import { Section } from "../components/Section";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const ParallaxDiv = ({ takeref }: { takeref: any }) => {
  const codeString = `function add(a, b) {
        return a + b;
      }`;
  return (
    <Section heading="new1" takeref={takeref}>
      {/* <div className="outer-div relative  "> */}
      <div className="md:flex gap-52 justify-start ">
        <div className="flex flex-col ">
          {Array.from({ length: 20 }).map((_, index) => (
            <p key={index} className="long-paragraph">
              long para
            </p>
          ))}
        </div>

        <div className="h-fit sticky top-0 hover:static my-5">
          <Scriptbox>this is a random script</Scriptbox>
          <Scriptbox codedata={[codeString]} codelanguage={["javascript"]}>
            <p>this is the script</p>
          </Scriptbox>
        </div>
      </div>
      {/* </div> */}
    </Section>
  );
};

export default ParallaxDiv;
