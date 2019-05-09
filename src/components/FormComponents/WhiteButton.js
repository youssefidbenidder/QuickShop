import React, {Component} from "react";
import {View , StyleSheet ,Text, TouchableOpacity} from "react-native";

export default class WhiteButton extends Component<props> {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.5} style={[styles.whiteBtn]} onPress={this.props.action}>
                    <Text style={styles.whiteBtnText}>{this.props.value} </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    whiteBtn: {
        backgroundColor: "#e3f2fd",
        width : 300 ,
        height : 50 ,
        borderRadius : 2,
        alignItems : "center",
        justifyContent : "center",
        marginTop : 12,
        paddingVertical : 8
    },
    whiteBtnText : {
        textAlign: "center",
        color : "#d50000",
    }

});