/*
 * @FilePath: \vue-project\.config\build.js
 * @Author: itmanyong itmanyong@gmail.com
 * @CreateDate: Do not edit
 * @LastEditors: itmanyong itmanyong@gmail.com
 * @LastEditTime: 2022-07-11 01:36:31
 * @Description:
 */
export default (env) => {
  return {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  };
};
