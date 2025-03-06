import type { JSX } from "react";

export type Service = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string;
  btn: string;
  btnLink: string;
};
