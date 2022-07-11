/*
 * @FilePath: \vue-project\src\components\CountJsx.jsx
 * @Author: itmanyong itmanyong@gmail.com
 * @CreateDate: Do not edit
 * @LastEditors: itmanyong itmanyong@gmail.com
 * @LastEditTime: 2022-07-11 02:12:16
 * @Description:
 */
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  setup() {
    const count = ref(0);

    const st = {
      handlerInc() {
        count.value++;
      },
    };

    onMounted(() => {
      console.log(`vuejsx 组件测试 onMounted`);
    });

    onMounted(async ()=>{
        console.log(`vuejsx 组件测试 worker`)
        const instance = new ComlinkWorker(new URL('./worker.js', import.meta.url), {/* normal Worker options*/})
        const result = await instance.add(2, 3)
        console.log(`vuejsx worker执行结果 ${result}`)
    })

    return () => <button onClick={st.handlerInc}>vuejsx count is {count.value}</button>;
  },
});
