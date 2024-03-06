import { Section } from "../../components/Section";
import { Scriptbox } from "../../components/Scriptbox";
export function Intro({ takeref }: { takeref: any }) {
  const codeString = `function add(a, b) {
    return a + b;
  }`;
  return (
    <Section heading="Introduction" takeref={takeref} givemeBorder={false}>
      <p>
        You can interact with the API through HTTP requests from any language,
        via our official Python bindings, our official Node.js library, or a
        community-maintained library.
      </p>
      <p>To install the official Python bindings, run the following command:</p>
      <Scriptbox
        codedata={[codeString]}
        codelanguage={["javascript"]}
      ></Scriptbox>
      <p>
        You can interact with the API through HTTP requests from any language,
        via our official Python bindings, our official Node.js library, or a
        community-maintained library.
      </p>
      <p>To install the official Python bindings, run the following command:</p>
      <Scriptbox codedata={["this is the script"]}></Scriptbox>
    </Section>
  );
}
