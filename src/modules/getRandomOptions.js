import { OPTIONS } from "./constants";
export function getRandomOption() {
  const index = Math.floor(Math.random() * OPTIONS.length);
  return OPTIONS[index];
}
