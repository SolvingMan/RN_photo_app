# Packages Used

```json
{
    "name": "react-native-elements",
    "version": "2.0.4",
    "private": true,
    "devDependencies": {
        "babel-eslint": "^8.2.1",
        "babel-preset-expo": "^5.0.0",
        "eslint": "^4.9.0",
        "eslint-config-airbnb": "^16.1.0",
        "eslint-plugin-flowtype": "^2.41.0",
        "eslint-plugin-import": "^2.7.0",
        "eslint-plugin-jsx-a11y": "^6.0.2",
        "eslint-plugin-react": "^7.4.0",
        "eslint-plugin-react-native": "^3.2.1",
        "flow-bin": "0.63.1",
        "flow-result-checker": "^0.3.0",
        "jest-expo": "^31.0.0",
        "react-native-scripts": "1.11.1",
        "react-test-renderer": "16.0.0-alpha.12"
    },
    "main": "./node_modules/react-native-scripts/build/bin/crna-entry.js",
    "scripts": {
        "start": "expo start -c",
        "eject": "react-native-scripts eject",
        "android": "react-native-scripts android",
        "ios": "react-native-scripts ios",
        "test": "node node_modules/jest/bin/jest.js",
        "test:watch": "node node_modules/jest/bin/jest.js --watch",
        "flow": "flow check --show-all-errors | flow-result-checker",
        "lint": "eslint App.js src/",
        "deploy:expo": "expo-cli publish",
        "deploy": "yarn deploy:expo",
        "build:ios": "expo-cli build:ios",
        "build:android": "expo-cli build:android",
        "build": "yarn build:ios && yarn build:android"
    },
    "jest": {
        "preset": "jest-expo",
        "transformIgnorePatterns": [
            "node_modules/(?!react-native|react-navigation|expo|native-base-shoutem-theme|@shoutem|react-clone-referenced-element|native-base|@expo|mobx-react)"
        ],
        "testResultsProcessor": "./node_modules/jest-junit-reporter"
    },
    "dependencies": {
        "@expo/vector-icons": "6.3.1",
        "crypto-js": "^3.1.9-1",
        "expo": "^31.0.4",
        "expo-cli": "^2.3.3",
        "gl-react": "^3.15.0",
        "gl-react-expo": "^3.16.3",
        "jest-junit-reporter": "^1.1.0",
        "lodash": "^4.17.4",
        "moment": "^2.18.1",
        "react": "16.5.0",
        "react-native": "https://github.com/expo/react-native/archive/sdk-31.0.1.tar.gz",
        "react-native-datepicker": "1.6.0",
        "react-native-keyboard-spacer": "^0.4.1",
        "react-native-maps-super-cluster": "^1.3.1",
        "react-navigation": "3.0.0-rc.4"
    }
}
```
