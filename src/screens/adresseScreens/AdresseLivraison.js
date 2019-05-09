import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from "react-redux";
import mapStatetoProps from "../../store/stateToStore/MapStateToStoreProfile";


class AdresseLivraison extends React.Component<props>{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate("AjouteAdresse")}>
                    <View style={styles.ajouteAdresse}>
                        <Text style={{color: "#7289da"}}>Ajouter / Modifier Adresse de livraison</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.adresse}>
                    <Text >{this.props.profile.adresse.pays}</Text>
                    <Text >{this.props.profile.adresse.ville}</Text>
                    <Text >{this.props.profile.adresse.codePostal}</Text>
                    <Text >{this.props.profile.adresse.adressePostal}</Text>
                </View>
            </View>
        )
    }

}

export default connect(mapStatetoProps)(AdresseLivraison);

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eaf4f0",
        flex : 1
    },
    adresse: {
        backgroundColor: "#fff",
        padding: 16,
        marginBottom: 20,
        height: 120,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.31,
        shadowRadius: 6.11,
        elevation: 10,
    },
    ajouteAdresse: {
        backgroundColor: "#fff",
        padding: 16,
        marginBottom: 20,
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.31,
        shadowRadius: 6.11,
        elevation: 10,
    }
});