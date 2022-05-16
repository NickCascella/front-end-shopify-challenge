import axios from "axios";

const requests = {
  getOpenAICompletion: async (prompt, engine) => {
    try {
      const response = await axios.post(
        `https://api.openai.com/v1/engines/${engine || "text"}/completions`,
        { prompt, temperature: 0.4, max_tokens: 70 },
        {
          headers: {
            /*
            I understand .env information in react can still be read.
            As we do not have a back end and this key is not particularly valuable and is needed for potential testing, 
            I will leave it as is.
            */
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
