/*
 * @FilePath: \vue-project\src\main.js
 * @Author: itmanyong itmanyong@gmail.com
 * @CreateDate: Do not edit
 * @LastEditors: itmanyong itmanyong@gmail.com
 * @LastEditTime: 2022-07-11 02:22:50
 * @Description:
 */
import { createApp } from "vue";
import App from "./App.vue";


async function bootstrap() {
  const app = createApp(App);


  app.mount("#app");
}

bootstrap();
