// @flow
import * as React from "react";
import { StatusBar, Platform } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { Font, AppLoading } from "expo";

import { Images, loadIcons, ThemeProvider } from "./src/components";

import { Welcome } from "./src/welcome";
import { PhotographyNavigator } from "./src/photography";

// $FlowFixMe
const SFProTextBold = require("./fonts/SF-Pro-Text-Bold.otf");
// $FlowFixMe
const SFProTextSemibold = require("./fonts/SF-Pro-Text-Semibold.otf");
// $FlowFixMe
const SFProTextRegular = require("./fonts/SF-Pro-Text-Regular.otf");

const onNavigationStateChange = () => undefined;

type AppProps = {};
type AppState = {
    isReady: boolean
};

export default class App extends React.Component<AppProps, AppState> {
    state = {
        isReady: false
    };

    ready() {
        this.setState({ isReady: true });
    }

    async componentDidMount(): Promise<void> {
        StatusBar.setBarStyle("dark-content");
        if (Platform.OS === "android") {
            StatusBar.setBackgroundColor("white");
        }
        const fonts = Font.loadAsync({
            "SFProText-Bold": SFProTextBold,
            "SFProText-Semibold": SFProTextSemibold,
            "SFProText-Regular": SFProTextRegular
        });
        const images = Images.downloadAsync();
        const icons = loadIcons();
        try {
            await Promise.all([fonts, ...images, icons]);
        } catch (e) {
            // Do nothing
        }
        this.ready();
    }

    render(): React.Node {
        const { isReady } = this.state;
        if (!isReady) {
            return (
                <React.Fragment>
                    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                    <AppLoading />
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
                <ThemeProvider>
                    <AppNavigator {...{ onNavigationStateChange }} />
                </ThemeProvider>
            </React.Fragment>
        );
    }
}

const MainNavigator = createSwitchNavigator({
    Welcome: { screen: Welcome },
    Photography: { screen: PhotographyNavigator }
});

const AppNavigator = createAppContainer(MainNavigator);
