const engines = [
  {
    name: "Davinci",
    value: "text-davinci-002",
    description:
      "Davinci is the most capable engine and can perform any task the other models can perform and often with less instruction. For applications requiring a lot of understanding of the content, like summarization for a specific audience and creative content generation, Davinci is going to produce the best results",
  },
  {
    name: "Curie",
    value: "text-curie-001",
    description:
      "Curie is extremely powerful, yet very fast. While Davinci is stronger when it comes to analyzing complicated text, Curie is quite capable for many nuanced tasks like sentiment classification and summarization.",
  },
  {
    name: "Babbage",
    value: "text-babbage-001",
    description:
      "Babbage can perform straightforward tasks like simple classification. It’s also quite capable when it comes to Semantic Search ranking how well documents match up with search queries.",
  },
  {
    name: "Ada",
    value: "text-ada-001",
    description:
      "Ada is usually the fastest model and can perform tasks like parsing text, address correction and certain kinds of classification tasks that don’t require too much nuance. Ada’s performance can often be improved by providing more context.",
  },
];

export default engines;
