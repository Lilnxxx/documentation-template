import { Section } from "../../components/Section";
import { Scriptbox } from "../../components/Scriptbox";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
export function Request({ takeref }: { takeref: any }) {
  return (
    <Section heading="Requests" takeref={takeref}>
      <p>
        You can interact with the API through HTTP requests from any language,
        via our official Python bindings, our official Node.js library, or a
        community-maintained library.
      </p>
      <p>To install the official Python bindings, run the following command:</p>
      <Scriptbox codedata={["this is the script"]}></Scriptbox>

      <p>
        You can interact with the API through HTTP requests from any language,
        via our official Python bindings, our official Node.js library, or a
        community-maintained library.
      </p>
      <p>To install the official Python bindings, run the following command:</p>
    </Section>
  );
}
