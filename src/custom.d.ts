/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "*.svg?react" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: any;
  export default src;
}
