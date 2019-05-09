import React, {Component} from 'react';
import {StyleSheet, View,} from 'react-native';
import Firebase from "./src/firebase/Firebase";
import StackNavigatorContainer from "./src/navigations/MainNavigator.js";
import {Provider} from 'react-redux';
import Store from "./src/store/Store";

console.disableYellowBox = true;

export default class App extends Component<Props> {


    componentWillMount() {
        Firebase.init();
    }

    render() {
        return (
            <Provider store={Store}>
                <View style={styles.container}>
                    <StackNavigatorContainer/>
                </View>
            </Provider>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e0f7fa",
        justifyContent: "center",
        //alignItems: "center",
        flex: 1,
    },
});
