import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import RedButton from "../../components/FormComponents/RedButton";
import Firebase from "../../firebase/Firebase";
import {validateEmail} from "../../utiles/validation";


export default class ResetPasword extends React.Component<props> {
    constructor(props) {
        super(props);
        this.state = {
            emailInput: ""
        };
        this.resetPassword = this.resetPassword.bind(this);
    }

    componentWillMount() {
        this.setState({
            emailError: "",
        })
    }

    resetPassword() {
        let that = this;
        if (typeof this.state.emailInput === undefined || this.state.emailInput.trim() === "" || this.state.emailError !== ""){
            alert("Merci d'entrer un email correcte !")
        }else {
            Firebase.auth.sendPasswordResetEmail(this.state.emailInput).then(function () {
            }).catch(function (error) {
            });
            alert("Nous avons un email pour réintialiser");
            that.props.navigation.navigate("Compte");
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Pour réinitialiser votre mot de passe , Veuillez saisir votre adresse e-mail.
                </Text>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid={"#cfd8dc"}
                    placeholder={"E-mail"}
                    selectionColor={"#4fc3f7"}
                    onChangeText={(text) => this.setState({emailInput: text})}
                    value={this.state.emailInput}
                    onBlur={() => validateEmail(this.state.emailInput , this)}
                />
                <Text style={styles.textError}>{this.state.emailError}</Text>
                <RedButton value={"Envoyer"} action={() => this.resetPassword()}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eaf4f0",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    input: {
        width: 270,
    },
    text: {
        textAlign: "center",
        marginVertical: 30,
        width: 250,
        alignSelf: "center",
        fontSize: 18 ,
        color : "#111"
    },textError: {
        color: "#d50000",
        fontSize: 12,
        width: 270,
    }
});
