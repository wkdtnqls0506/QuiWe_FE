import { atom } from "recoil";

export const fileState = atom<string>({
  key: "fileData",
  default: "",
});
