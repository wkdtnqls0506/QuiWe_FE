import { atom } from "recoil";

export const answerState = atom<{ [key: number]: number | string }>({
  key: "answerData",
  default: {},
});
