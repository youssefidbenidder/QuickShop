import React, {Component} from 'react';
import {Text, View, Button, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import Overlay from 'react-native-modal-overlay';
import Firebase from '../../firebase/Firebase';

class NomModal extends Component {

    constructor(props){
    super(props);
    this.state = {
        username : "",
        modalVisible : false
    }
    }

    enregistrer = () => {
        Firebase.database.ref('users/' + Firebase.auth.currentUser.uid).update({username : this.state.username});
        this.onClose();
    };

    onClose = () => this.setState({modalVisible: false});

    render() {
        return (
            <View>
                <Overlay visible={this.state.modalVisible} onClose={this.onClose} closeOnTouchOutside
                         containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.3)', width: '100%', alignSelf: "center"}}
                         childrenWrapperStyle={{
                             backgroundColor: '#eee',
                             alignSelf: "center",
                             width: '90%',
                             alignItems: "flex-start"
                         }}
                >
                    <View style={{width: '100%', height: 200}}>
                        <Text style={{color: "#000", fontSize: 18, marginBottom: 16}}>Nom du contact</Text>
                        <View style={{flexDirection: "row"}}>
                            <TextInput
                                style={styles.inputContainer}
                                underlineColorAndroid={"#cfd8dc"}
                                placeholder={"Nom du contact"}
                                selectionColor={"#4fc3f7"}
                                value={this.state.username}
                                onChangeText={(username) => this.setState({username})}
                            />
                        </View>
                        <View style={{flexDirection : "row" }}>
                        <TouchableOpacity activeOpacity={0.5} onPress={this.onClose}>
                            <Text style={styles.annulerText}>ANNULER</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={this.enregistrer}>
                            <Text style={styles.enregegistrerText}>ENREGISTRER</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </Overlay>
            </View>
        );
    }
}
export default NomModal;


const styles = StyleSheet.create({
    input: {
        width: '100%',
    },
    sexeTypeText: {
        marginTop: 8,
        marginLeft: 8,
        fontSize: 16
    },
    enregegistrerText: {
        marginLeft: 'auto',
        marginVertical: 20,
        color: "#ff0000",
    },
    annulerText: {
        marginLeft: '30%',
        marginRight: 10,
        marginVertical: 20,
        color: "#ff0000",
    }
});