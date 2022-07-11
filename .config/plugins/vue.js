/*
 * @FilePath: \vue-project\.config\plugins\vue.js
 * @Author: itmanyong itmanyong@gmail.com
 * @CreateDate: Do not edit
 * @LastEditors: itmanyong itmanyong@gmail.com
 * @LastEditTime: 2022-07-11 00:50:15
 * @Description:
 */

import vue from "@vitejs/plugin-vue";

export default (env) => {
  return vue({ reactivityTransform: true });
};
