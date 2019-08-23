const { preprocess, createEnv, readConfigFile } = require("svelte-ts-preprocess")

const env = createEnv()

module.exports = {
  preprocess: preprocess({
    env,
    compilerOptions: {
      ...readConfigFile(env),
      allowNonTsExtensions: true
    }
  })
}