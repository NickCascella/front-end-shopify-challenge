import { useEffect, useRef } from "react";
import "./RenderResponses.scss";

const RenderResponses = ({ responses }) => {
  const responseContainer = useRef(null);
  useEffect(() => {
    if (responseContainer.current) {
      responseContainer.current.scrollTop = 0;
    }
  }, [responses]);

  return (
    <section className="responses" ref={responseContainer}>
      {responses.map((response) => (
        <div
          className="responses__response-block"
          key={response.prompt + response.completionAnswer}
        >
          <div className="response-section">
            <h3 className="response-section__title">Prompt</h3>
            <p className="response-section__body">{response.prompt}</p>
          </div>
          <div className="response-section">
            <h3 className="response-section__title">Response</h3>
            <p className="response-section__body">
              {response.completionAnswer}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RenderResponses;
