import { keyframes } from "@emotion/react";

const spinningAnimation = keyframes`
  0% {
    transform: rotate(0deg) scaleX(-1);
  }
  100% {
    transform: rotate(360deg) scaleX(-1);
  }
`;

const flashingAnimation = keyframes`
  0% {
    opacity: 1
  }
  50% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`;

export { spinningAnimation, flashingAnimation };
