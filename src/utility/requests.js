import axios from "axios";

const requests = {
  getOpenAICompletion: async (prompt, engine) => {
    try {
      const response = await axios.post(
        `https://api.openai.com/v1/engines/${
          engine || "text-curie-001"
        }/completions`,
        { prompt, temperature: 0.4, max_tokens: 70 },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
      return response.data.choices[0].text;
    } catch (err) {
      return err;
    }
  },
};

export default requests;
