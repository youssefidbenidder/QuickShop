import React, {Component} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from "react-native-elements";
import RedButton from "../../components/FormComponents/RedButton";
import {connect} from "react-redux";
import mapStatetoProps from "../../store/stateToStore/MapStateToStoreProfile";
import {fetchUser} from "../../store/actions/UserFetch";
import {logOut} from "../../store/actions/LogOut";

class Compte extends Component<props> {

    constructor(props) {
        super(props);
        this.props.fetchUser();
    }


    render() {
        return (
            <View style={styles.profileContainer}>
                <View style={styles.profileHeader}>
                    <View style={styles.profileHeaderUser}>
                        <Icon iconStyle={{marginRight: 8, marginTop: 4}} name={'person'}/>
                        <Text style={{
                            color: "#000000",
                            fontSize: 20,
                            width: 100
                        }}>{this.props.profile.username}</Text>
                    </View>
                    <View style={styles.profileHeaderImage}>
                        <Image
                            source={{uri : this.props.profile.image }}

                        />
                        <Text style={{color: "#1a237e", textDecorationLine: "underline"}}
                              onPress={() => this.props.navigation.navigate('EditProfile')}
                        >
                            Edit Profile
                        </Text>
                    </View>
                </View>
                <View style={styles.commandeTitleContainer}>
                    <View style={styles.commandeTitle}>
                        <Icon iconStyle={{marginTop: 3, marginRight: 10}} name={'assignment'}/>
                        <Text style={styles.commandeTitleText}>
                            Commandes
                        </Text>
                    </View>
                </View>
                <View style={styles.commandeTypes}>
                    <TouchableOpacity activeOpacity={0.5} style={[styles.commandeTypesBtn]}>
                        <Text style={styles.commandeTypesText}>Non-payé</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} style={[styles.commandeTypesBtn]}>
                        <Text style={styles.commandeTypesText}>En attante d'expédition</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} style={[styles.commandeTypesBtn]}>
                        <Text style={styles.commandeTypesText}>Expédié</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} style={[styles.commandeTypesBtn]}>
                        <Text style={styles.commandeTypesText}>En litige</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: "center"}}>
                    <RedButton value={"SE DECONNERCTER"} action={this.props.logOut}/>
                </View>
            </View>
        );
    }
}

export default connect(mapStatetoProps , {fetchUser , logOut })(Compte)

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: "#eaf4f0",
    },
    profileHeader: {
        marginVertical: 16,
        padding: 8,
        flexDirection: "row",
        height: 90,
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    profileHeaderUser: {
        flexDirection: "row",
        width: 200
    },
    profileHeaderImage: {
        flexDirection: "column",
        marginRight: 10
    },
    commandeTitleContainer: {
        flexDirection: "row",
        height: 60,
        padding: 8,
        marginLeft: 16
    },
    commandeTitle: {
        flexDirection: "row",
    },

    commandeTitleText: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold"
    },
    commandeTypes: {
        height: 250,
        padding: 18,
        justifyContent: "space-between",
    },
    commandeTypesBtn: {
        width: 200,
        height: 20,
    },
    commandeTypesText: {
        color: "#010101"
    }
});