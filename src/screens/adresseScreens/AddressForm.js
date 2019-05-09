import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';
import {theme} from "react-native-design-utility/dist/theme";
import RedButton from "../../components/FormComponents/RedButton";
import Firebase from "../../firebase/Firebase";
import {connect} from "react-redux";
import mapStatetoProps from "../../store/stateToStore/MapStateToStoreProfile";


class AddressForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            pays : this.props.profile.adresse.pays,
            ville : this.props.profile.adresse.ville,
            codePostal : this.props.profile.adresse.codePostal,
            adressePostal : this.props.profile.adresse.adressePostal
        }
    }


    enregistrer = () => {
        Firebase.database.ref('users/' + Firebase.auth.currentUser.uid).update({adresse : this.state});
        alert("goood")
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <ScrollView style={styles.scroll}>
                    <View >
                        <TextInput name={"pays"} value={this.state.pays} style={styles.text}
                                   onChangeText={(value) => this.setState({ pays : value })} placeholder="Pays" />
                        <TextInput name={"ville"} value={this.state.ville} style={styles.text}
                                   onChangeText={(value) => this.setState({ ville : value })} placeholder="Ville" />
                        <TextInput name={"codePostal"} value={this.state.codePostal} style={styles.text}
                                   onChangeText={(value) => this.setState({ codePostal : value })} placeholder="Code postal" />
                        <TextInput name={"adressePostal"}  value={this.state.adressePostal} style={styles.text}
                                   onChangeText={(value) => this.setState({ adressePostal : value })} placeholder="Adresse postale ,boite postale ,etc" />
                    </View>
                    <View>
                        <RedButton value={"Enregistrer/Modifier"} style={styles.button1} action={() => this.enregistrer()}/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default connect(mapStatetoProps)(AddressForm);
const styles = StyleSheet.create({
    container:{
        backgroundColor: "#eaf4f0",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    text:{
        flex:1,
      width :"80%",
        margin:15,

        padding:15,
      borderColor:'grey',
      borderWidth: 2,
      borderRadius:15,

    },
    button1:{
       width:"50%",
        margin:10,
        backgroundColor:theme.color.red,
    },
});
