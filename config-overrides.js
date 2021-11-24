const ModuleFederationPlugin = require("webpack").container?.ModuleFederationPlugin;
const deps = require('./package.json').dependencies;

module.exports = function override (config, env) {
  config.plugins.push(
    new ModuleFederationPlugin({
      name: "cat",
      filename: "remoteEntry.js",
      remoteType: 'var',
      exposes: {
        "./GreetingCat": "./src/GreetingCat",
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: deps['react']
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom']
        },
        'react-router-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-router-dom']
        }
      }
    })
  )
  return config;
}
