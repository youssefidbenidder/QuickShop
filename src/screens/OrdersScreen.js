import React, {Component} from 'react';
import {ActivityIndicator, AppRegistry, ScrollView, StyleSheet, View} from 'react-native';

import Firebase from '../firebase/Firebase'

import WishProducts from "../components/Body/WishProducts";
//
// let db= Firebase.database;
// let prodRef = db.ref('produits/');
export default class OrderScreen extends Component {

    state = {
        items : []
    };

    componentDidMount(){
        Firebase.database.ref('categories/').on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
        })
    }


    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.catcontainer}>
                {this.state.items.length > 0 ? (
                    <ScrollView contentContainerStyle={ styles.scrollStyle} horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                        <WishProducts items={this.state.items} />
                    </ScrollView>
                ) : (
                    <View style={styles.loading_container}>
                        <ActivityIndicator size='large' />
                    </View>
                )}
            </ScrollView>
        );
    }
}



const styles = StyleSheet.create({
    catcontainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ebebeb',
       // flexDirection: 'row',
    },
    scrollStyle: {

        // flexWrap: 'wrap'
    },

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
AppRegistry.registerComponent('OrderScreen', ()=> OrderScreen);