import "./OpenAIForm.scss";
import requests from "../../utility/requests";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import LoopRoundedIcon from "@mui/icons-material/LoopRounded";
import { spinningAnimation } from "../../styles/keyframes";
import engines from "../../assets/data";

const OpenAIForm = ({ setResponses, responses }) => {
  const [prompt, setPrompt] = useState("");
  const [engine, setEngine] = useState("text-curie-001");
  const [err, setErr] = useState("");
  const [awaitingResponse, setAwaitingResponse] = useState(false);

  const getEngineDescription = (engineValue) => {
    const specificEngine = engines.find(
      (engine) => engine.value === engineValue
    );

    return specificEngine.description;
  };

  const getResponse = async (e) => {
    e.preventDefault();
    setErr("");
    setAwaitingResponse(true);
    const completionAnswer = await requests.getOpenAICompletion(prompt, engine);
    setAwaitingResponse(false);

    if (typeof completionAnswer === "object")
      return setErr("There was an issue with your request.");

    if (prompt.length < 5)
      return setErr("Prompt must be at least 5 characters");

    let oldResponses = [...responses];

    oldResponses.unshift({
      prompt,
      completionAnswer,
    });
    sessionStorage.setItem("OpenAIFormData", JSON.stringify({ oldResponses }));

    setResponses(oldResponses);
    setPrompt("");
  };

  return (
    <form className="prompt-form" onSubmit={getResponse}>
      <h2>Enter prompt</h2>
      <textarea
        className="prompt-form__input"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type something for the engine!"
      />
      <h2>Select an engine</h2>
      <Select
        value={engine}
        onChange={(e) => setEngine(e.target.value)}
        sx={{
          ":focus": {
            outlineColor: "rgb(139, 205, 220)",
          },
        }}
      >
        {engines.map((engine) => (
          <MenuItem key={engine.name} value={engine.value}>
            {engine.name}
          </MenuItem>
        ))}
      </Select>
      <p className="prompt-form__engine-description">
        {engine && getEngineDescription(engine)}
      </p>
      <Button
        variant="contained"
        sx={{
          marginLeft: "auto",
          background: "rgb(139, 205, 220)",
          "&:hover": {
            background: "rgb(103, 152, 163)",
          },
        }}
        type="submit"
      >
        {awaitingResponse ? (
          <LoopRoundedIcon
            sx={{
              animation: `${spinningAnimation} 1000ms linear infinite`,
            }}
          />
        ) : (
          "Send"
        )}
      </Button>
      {err && <p className="prompt-form__err-msg">{err}</p>}
    </form>
  );
};

export default OpenAIForm;
