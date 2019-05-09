import React, {Component} from 'react';
import {View,StyleSheet, Text} from 'react-native';
import {SocialIcon} from "react-native-elements";
import FormInscription from "../../components/FormComponents/FormInscription";

export default class Inscription extends Component<props> {
    render() {
        return (
            <View style={styles.container}>
                <FormInscription navigation={this.props.navigation}/>
                <Text style={styles.text}>Ou se connecter avec </Text>
                <View style={styles.iconContainer}>
                    <SocialIcon type={'twitter'}/>
                    <SocialIcon type={'facebook'}/>
                    <SocialIcon type={'google-plus-official'}/>
                </View>
                <View style={styles.textFotterContainer}>
                    <Text style={{color: "#212121"}}>Avez-vous déjà un compte ?</Text>
                    <Text style={styles.textFotter}>Se connecter</Text>
                </View>
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
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    text: {
        opacity: 0.8,
        color: "#90a4ae",
        marginVertical: 12,
    },
    textFotter: {
        color: "#01579b",
        marginLeft: 3
    },
    textFotterContainer: {
        flexDirection: "row",
        marginVertical: 25
    }
});