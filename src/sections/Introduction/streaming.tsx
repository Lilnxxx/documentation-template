import { Section } from "../../components/Section";
import { Scriptbox } from "../../components/Scriptbox";
// import { useRef } from "react";
export function Streaming({ takeref }: { takeref: any }) {
  // const section11 = useRef(null);
  return (
    <Section heading="Streaming" takeref={takeref}>
      <p>
        You can interact with the API through HTTP requests from any language,
        via our official Python bindings, our official Node.js library, or a
        community-maintained library.
      </p>
      <p>To install the official Python bindings, run the following command:</p>
      <Scriptbox>
        <p>this is the script</p>
      </Scriptbox>
      <p>
        You can interact with the API through HTTP requests from any language,
        via our official Python bindings, our official Node.js library, or a
        community-maintained library.
      </p>
      <p>To install the official Python bindings, run the following command:</p>
    </Section>
  );
}
