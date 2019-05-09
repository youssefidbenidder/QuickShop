import React, {Component} from 'react';
import {StyleSheet, View,} from 'react-native';
import {SocialIcon, Text} from 'react-native-elements';
import Logo from "../../components/FormComponents/Logo";
import RedButton from "../../components/FormComponents/RedButton";
import WhiteButton from "../../components/FormComponents/WhiteButton";

export default class Connection extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <Logo/>
                <View style={styles.btnContainer}>
                    <RedButton value={"S'INSCRIRE"} action={() => this.props.navigation.navigate('Inscription')}/>
                    <WhiteButton value={"SE CONNECTER"} action={() => this.props.navigation.navigate('Login')}/>
                    <Text style={styles.text}>Ou se connecter avec </Text>
                    <View style={styles.iconContainer}>
                        <SocialIcon type={'twitter'}/>
                        <SocialIcon type={'facebook'}/>
                        <SocialIcon type={'google-plus-official'}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: "#e0f7fa",
        backgroundColor : "#eaf4f0",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    btnContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    iconContainer : {
        justifyContent: "center",
        alignItems: "center",
        flexDirection : "row"
    },
    text : {
        opacity : 0.8,
        color : "#90a4ae",
        marginVertical : 12,
    }
});
