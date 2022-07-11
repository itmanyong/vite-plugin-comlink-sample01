import pluginComlink from "./plugins/comlink";
export default (env) => {
  return {
    plugins: [pluginComlink(env)],
  };
};
