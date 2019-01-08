// @flow
import * as React from "react";
import { ScrollView, StyleSheet, View, Image, StatusBar } from "react-native";

import { ThemeProvider, Colors, StyleGuide, Images, Text, SafeAreaView } from "../components";

import Kit from "./Kit";

import type { ThemeName } from "../components/theme";
import type { NavigationProps } from "../components/Navigation";

const images = require("./images");

export default class Welcome extends React.Component<NavigationProps<>> {
    navigate(themeName: ThemeName) {
        const { navigation } = this.props;
        const themeProvider = ThemeProvider.getInstance();
        themeProvider.switchColors(Colors[themeName]);
        navigation.navigate(themeName);
    }

    photography = () => this.navigate("Photography");

    render(): React.Node {
        return (
            <React.Fragment>
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                <View style={styles.container}>
                    <SafeAreaView style={styles.safeHeader} top>
                        <View style={styles.header}>
                            <View>
                                <Text type="footnote">SKETCH ELEMENTS</Text>
                                <Text type="title1">Apps</Text>
                            </View>
                            <Image source={Images.logo} style={styles.logo} />
                        </View>
                    </SafeAreaView>
                    <ScrollView contentContainerStyle={styles.content}>
                        <SafeAreaView>
                            <Kit
                                uri={images.photography.uri}
                                preview={images.photography.preview}
                                title="Photography"
                                backgroundColor={Colors.Photography.primary}
                                onPress={this.photography}
                            />
                        </SafeAreaView>
                    </ScrollView>
                </View>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    safeHeader: {
        ...StyleGuide.styles.shadow
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: StyleGuide.spacing.small
    },
    logo: {
        width: 50,
        height: 50
    },
    content: {
        paddingVertical: StyleGuide.spacing.small
    }
});
