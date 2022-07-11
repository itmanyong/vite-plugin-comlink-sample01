/*
 * @FilePath: \vue-project\.config\resolve.js
 * @Author: itmanyong itmanyong@gmail.com
 * @CreateDate: Do not edit
 * @LastEditors: itmanyong itmanyong@gmail.com
 * @LastEditTime: 2022-07-11 02:24:51
 * @Description:
 */
import path from "path";
export default (env) => {
  return {
    alias: {
      src: path.resolve(__dirname, `../src`),
    },
  };
};
