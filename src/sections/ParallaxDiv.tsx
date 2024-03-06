import React from "react";
import { Scriptbox } from "../components/Scriptbox";
import { Section } from "../components/Section";
import { Section2 } from "../components/Section2";
import { Apibox } from "../components/Apibox";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const ParallaxDiv = ({ takeref }: { takeref: any }) => {
  const codeString = `function add(a, b) {
        return a + b;
      }`;
  const codestring2 = `from pathlib import Path
  import openai
  
  speech_file_path = Path(__file__).parent / ""
  response = openai.audio.speech.create(
    model="tts-1",
    voice="alloy",
    input="The quick brown fox jumped over the lazy dog."
  )
    `;
  return (
    <Section heading="new1" takeref={takeref}>
      <Section2 codelang="python" codestring={codestring2}>
        {Array.from({ length: 20 }).map((_, index) => (
          <Apibox name="model" datatype={"string"} req_type="required">
            <p>Thi is the api data and all</p>
            <p>Thi is the api data and all</p>
            <p>Thi is the api data and all</p>
          </Apibox>
        ))}
        {/* {Array.from({ length: 40 }).map((_, index) => (
          <p key={index} className="long-paragraph">
            long para
          </p>
        ))} */}
      </Section2>
    </Section>
  );
};

export default ParallaxDiv;
