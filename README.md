# To Fix the react navigation/drawer: Reanimated 2 failed to create a worklet, maybe you forgot to add Reanimated's babel plugin?

1.  Run  `yarn add react-native-reanimated@next react-native-gesture-handler`
2.  I have added  `import 'react-native-gesture-handler'`  to App.tsx file at the top of the file before importing any packages
3. You should update the  `babel.config.js`  file and add  `react-native-reanimated/plugin`  to plugins

```json
module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "react-native-reanimated/plugin",
  ],
};
```
4. The last thing you should do is run your project by removing the cache  `yarn start --reset-cache`
