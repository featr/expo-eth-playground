import * as Font from "expo-font"

export const initFonts = async () => {
  // Refer to ./assets/fonts/custom-fonts.md for instructions.
  // ...
  // Welcome back! Just uncomment this and replace/append with your font file names!
  // ⬇
  try {
    await Font.loadAsync({
      AmaticSC: require("./AmaticSC-Regular.ttf"),
      "AmaticSC-Bold": require("./AmaticSC-Bold.ttf"),
      Ubuntu: require("./Ubuntu-Regular.ttf"),
      "Ubuntu-Italic": require("./Ubuntu-Italic.ttf"),
      "Ubuntu-Light": require("./Ubuntu-Light.ttf"),
      "Ubuntu-LightItalic": require("./Ubuntu-LightItalic.ttf"),
      "Ubuntu-Medium": require("./Ubuntu-Medium.ttf"),
      "Ubuntu-MediumItalic": require("./Ubuntu-MediumItalic.ttf"),
      "Ubuntu-Bold": require("./Ubuntu-Bold.ttf"),
      "Ubuntu-BoldItalic": require("./Ubuntu-BoldItalic.ttf"),
    })
  } catch (e) {
    console.log("fonts error", e)
  }
}
