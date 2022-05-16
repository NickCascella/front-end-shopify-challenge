import { useState, useEffect } from "react";
import "./App.scss";
import OpenAIForm from "./components/OpenAIForm/OpenAIForm";
import RenderResponses from "./components/RenderResponses/RenderResponses";

const App = () => {
  const [responses, setResponses] = useState([
    {
      prompt: "This is where your prompts will show!",
      completionAnswer: "This is an example response!",
    },
  ]);

  useEffect(() => {
    const previousPrompts = sessionStorage.getItem("OpenAIFormData");
    if (previousPrompts) {
      const parsedPreviousPrompts = JSON.parse(previousPrompts);
      console.log(parsedPreviousPrompts);
      setResponses(parsedPreviousPrompts.oldResponses);
    }
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <h1 className="app__title">Fun with GPT-3</h1>
        <OpenAIForm setResponses={setResponses} responses={responses} />
      </div>
      <RenderResponses responses={responses} />
    </div>
  );
};

export default App;
