import { Section } from "../../components/Section";
import { Scriptbox } from "../../components/Scriptbox";
export function Authentication({ takeref }: { takeref: any }) {
  const codeString = `function add(a, b) {
    return a + b;
  }`;
  return (
    <Section heading="Authentication" takeref={takeref}>
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
      <Scriptbox
        codedata={[codeString, codeString]}
        codelanguage={["javascript", "javascript"]}
      />
    </Section>
  );
}
