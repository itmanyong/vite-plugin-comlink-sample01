import pluginVue from "./plugins/vue";
import pluginJsx from "./plugins/jsx";
import pluginLegacy from "./plugins/legacy";
import pluginProgress from "./plugins/progress";
import pluginSvg from "./plugins/svg";
import pluginComlink from "./plugins/comlink";

export default (env) => {
  const plugins = [pluginVue(env), pluginJsx(env), pluginSvg(env), pluginComlink(env)];

  plugins.push(...[pluginLegacy(env), pluginProgress(env)]);

  return plugins;
};
