import React, {Component} from "react";
import {View, Text , StyleSheet ,BackHandler } from "react-native";
import Logo from "../../components/FormComponents/Logo";

export default class InscriptionCheckEmail extends Component<props>{


    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.navigate("AuthLoading");
            return true;
        });
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }

    render(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Consultez vos e-mails !
            </Text>
            <Text style={styles.text}>
                un message a été envoyé à votre adresse e-mail.
                Veuillez consulter vos e-mails dans quelques instants .
                pour verifiez votre compte.
            </Text>
            <Logo/>
        </View>
    )
}
}

const styles = StyleSheet.create({
    container : {
      flex : 1,
      justifyContent : "center",
        backgroundColor : "#eaf4f0",
    },
    title : {
        color : "#000",
        fontSize : 38,
        marginVertical : 30 ,
        textAlign : "center"
    },
    text : {
        textAlign: "center",
        marginVertical : 30,
        width : 250,
        alignSelf : "center",
        fontSize: 18
    }
})