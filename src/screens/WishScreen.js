import React, {Component} from 'react';
import {ActivityIndicator, AppRegistry, ScrollView, StyleSheet, View} from 'react-native';
import Firebase from '../firebase/Firebase'
import WishComponent from '../components/WishComponent'
//
// let db= Firebase.database;
// let prodRef = db.ref('produits/');
export default class WishScreen extends Component {

    state = {
        items : []
    }

    componentDidMount(){
        Firebase.database.ref('users/' + Firebase.auth.currentUser.uid + '/wishList/').on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
        })
        console.log(this.state.items)
    }


    render() {
        return (
            <View
                contentContainerStyle={styles.container}>
                {this.state.items.length > 0 ? (
                    <ScrollView>
                    <WishComponent items={this.state.items} />
                    </ScrollView>
                ) : (
                    <View style={styles.loading_container}>
                        <ActivityIndicator size='large' />
                    </View>
                )}
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ebebeb'
    },

    /*container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },*/
    Brand: {
        flex: 1,
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white'
    },
    headerBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
        backgroundColor:'red'
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }

});
AppRegistry.registerComponent('wishScreen', ()=> wishScreen);