/*
 * @FilePath: \vue-project\.config\plugins\legacy.js
 * @Author: itmanyong itmanyong@gmail.com
 * @CreateDate: Do not edit
 * @LastEditors: itmanyong itmanyong@gmail.com
 * @LastEditTime: 2022-07-11 01:25:42
 * @Description:
 */
import legacy from "@vitejs/plugin-legacy";

export default (env) => {
  return legacy({
    targets: ["defaults", "not IE 11"],
  });
};
