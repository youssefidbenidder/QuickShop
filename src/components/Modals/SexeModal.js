import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Overlay from 'react-native-modal-overlay';
import {RadioButton} from 'react-native-paper';
import Firebase from "../../firebase/Firebase";

export default class SexeModal extends Component {
    state = {
        modalVisible: false,
        checked: '',
    };

    enregistrer = () => {
        Firebase.database.ref('users/' + Firebase.auth.currentUser.uid).update({sexe : this.state.checked});
        this.onClose();
    };

    onClose = () => {this.setState({modalVisible: false})};

    render() {
        return (
            <View>
                <Overlay visible={this.state.modalVisible} onClose={this.enregistrer} closeOnTouchOutside
                         containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.3)', width: '100%', alignSelf: "center"}}
                         childrenWrapperStyle={{
                             backgroundColor: '#eee',
                             alignSelf: "center",
                             width: '80%',
                             alignItems: "flex-start"
                         }}
                >
                    <View style={{width: '100%', height: 150}}>
                        <Text style={{color: "#000", fontSize: 18, marginBottom: 16}}>Sexe</Text>
                        <View style={{flexDirection: "row"}}>
                            <RadioButton
                                value="homme"
                                status={this.state.checked === 'Homme' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    this.setState({checked: 'Homme'});
                                }}
                            />
                            <Text style={styles.sexeTypeText}>Homme</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <RadioButton
                                value="femme"
                                status={this.state.checked === 'Femme' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    this.setState({checked: 'Femme'});
                                }}
                            />
                            <Text style={styles.sexeTypeText}>Femme</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.5} onPress={this.onClose}>
                            <Text style={styles.annulerText}>Annuler</Text>
                        </TouchableOpacity>
                    </View>
                </Overlay>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sexeTypeText: {
        marginTop: 8,
        marginLeft: 8,
        fontSize: 16
    },
    annulerText: {
        marginLeft: 'auto',
        marginRight: 0,
        marginVertical: 14,
        color: "#ff0000",
    }
});