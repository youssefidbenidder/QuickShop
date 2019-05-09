import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Logo extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleCountainer}>
                    <Text style={styles.quickText}>Quick</Text>
                    <Text style={styles.shopText}> Shop</Text>
                </View>
                <Text>Better Choice For Online Shopping !</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eaf4f0",
        justifyContent: "center",
        alignItems: "center",
        flex : 1
    },
    quickText: {
        color: "#212121",
        fontSize: 40,
        fontFamily: "sans-serif-medium",
    },
    shopText: {
        color: "#dd2c00",
        fontSize: 40,
        fontFamily: "sans-serif-medium",
    },
    titleCountainer: {
        flexDirection : "row"
    }
});