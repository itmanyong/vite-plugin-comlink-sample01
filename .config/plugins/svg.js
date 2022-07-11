/*
 * @FilePath: \vue-project\.config\plugins\svg.js
 * @Author: itmanyong itmanyong@gmail.com
 * @CreateDate: Do not edit
 * @LastEditors: itmanyong itmanyong@gmail.com
 * @LastEditTime: 2022-07-11 01:46:32
 * @Description:
 */
import svgLoader from "vite-svg-loader";

export default (env) => {
  return svgLoader({
    defaultImport: "component",
    multipass: true,
    svgo: true,
  });
};
