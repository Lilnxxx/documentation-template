import { Section } from "../../components/Section";
import { Scriptbox } from "../../components/Scriptbox";
export function Authentication({ takeref }: { takeref: any }) {
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
    <Section heading="Authentication" takeref={takeref}>
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
      <Scriptbox
        codedata={[codeString, codestring2]}
        codelanguage={["javascript", "python"]}
      />
    </Section>
  );
}
