import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import SexeModal from "../../components/Modals/SexeModal";
import NomModal from "../../components/Modals/NomModal";
import DatePicker from "react-native-datepicker";
import {connect} from "react-redux";
import mapStatetoProps from "../../store/stateToStore/MapStateToStoreProfile";
import Firebase from "../../firebase/Firebase";
import RedButton from "../../components/FormComponents/RedButton";
import {fetchUser} from "../../store/actions/UserFetch";
import {logOut} from "../../store/actions/LogOut";

class EditProfile extends Component<props> {

    constructor(props) {
        super(props);
        this.props.fetchUser();
        this.sexeModal = React.createRef();
        this.nomModal = React.createRef();
        this.dateModal = React.createRef();
        this.state = {
            date: "",
        }
    }

    handleSexeClick = () => {
        this.sexeModal.current.setState({modalVisible: true , checked : this.props.profile.sexe })
    };
    handleNomClick = () => {
        this.nomModal.current.setState({modalVisible: true ,  username : this.props.profile.username})
    };

    enregistrer = (date) => {
        Firebase.database.ref('users/' + Firebase.auth.currentUser.uid).update({dateNaissance : date});
    };

    render() {
        return (
            <View style={styles.editProfileContainer}>
                <ScrollView>
                    <View style={styles.editImageContainer}>
                        <Text style={{color: "#000"}}>Ma photo</Text>
                        <TouchableOpacity>
                        <Image
                            source={{uri : this.props.profile.image}}
                            style={{width: 60, height: 60, borderRadius: 60 / 2}}
                        />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.editInformationsContainer}>
                        <TouchableOpacity activeOpacity={0.5} onPress={this.handleNomClick}>
                            <View style={styles.editInfo}>
                                <Text style={{color: "#000"}}>Nom du contact</Text>
                                <NomModal ref={this.nomModal}/>
                                <Text>{this.props.profile.username}</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.editInfo}>
                            <Text style={{color: "#000"}}>E-mail</Text>
                            <Text>{this.props.profile.email}</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.5} onPress={this.handleSexeClick}>
                            <View style={styles.editInfo}>
                                <Text style={{color: "#000"}}>Sexe</Text>
                                <SexeModal ref={this.sexeModal}/>
                                <Text>{this.props.profile.sexe}</Text>
                            </View>
                        </TouchableOpacity>
                            <View style={styles.editInfo}>
                                <Text style={{color: "#000"}}>Année de naissance</Text>
                                <DatePicker
                                    style={{marginBottom: 10}}
                                    disabled={this.props.profile.dateNaissance == null ? false : true}
                                    date={this.props.profile.dateNaissance} //initial date from state
                                    mode="date" //The enum of date, datetime and time
                                    placeholder="select date"
                                    format="DD-MM-YYYY"
                                    minDate="01-01-1900"
                                    maxDate="01-01-2020"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            display : "none"
                                        },
                                        dateInput: {
                                            borderWidth : 0,
                                            marginLeft: 36,
                                            marginBottom : 16,
                                        },
                                    }}
                                    onOpenModal={() => alert("la date de naissance ne peut pas changer aprés la modification")}
                                    onDateChange={(date) => this.enregistrer(date)}
                                />
                            </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate("AdresseLivraison")}>
                        <View style={styles.editAdresse}>
                            <Text style={{color: "#000"}}>Adresse de livraison</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{alignItems: "center" , marginBottom : 20}}>
                        <RedButton value={"SE DECONNERCTER"} action={this.props.logOut}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default connect(mapStatetoProps , {fetchUser , logOut})(EditProfile);

const styles = StyleSheet.create({
    editProfileContainer: {
        flex: 1,
        alignSelf: "stretch",
        backgroundColor: "#eaf4f0"
    },
    editImageContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        height: 80,
        padding: 16,
        marginBottom: 20,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.31,
        shadowRadius: 6.11,
        elevation: 10,
    },
    editInformationsContainer: {
        padding: 16,
        backgroundColor: "#fff",
        height: 300,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.31,
        shadowRadius: 6.11,
        elevation: 10,
    },
    editInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20
    },
    editAdresse: {
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 16,
        marginVertical: 20,
        height: 80,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        alignItems: "center",
        shadowOpacity: 0.31,
        shadowRadius: 6.11,
        elevation: 10,
    }
});