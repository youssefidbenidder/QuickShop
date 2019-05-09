import React , {Component} from "react";
import {View, StyleSheet, Text ,TouchableOpacity} from 'react-native';


export default class RedButton extends Component<props> {

    render()  {
        return(
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.5} style={styles.redBtn} onPress={this.props.action}>
                <Text style={styles.redBtnText}>{this.props.value}</Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    redBtn: {
        backgroundColor: "#d50000",
        width : 300 ,
        height : 50 ,
        borderRadius : 2,
        alignItems : "center",
        justifyContent : "center",
        marginTop: 12,
        paddingVertical : 8
    },
    redBtnText : {
        textAlign: "center",
        color : "#ffffff",
    },
});