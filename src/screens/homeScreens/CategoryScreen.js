// import React, {Component} from 'react';
// import {AppRegistry, StyleSheet, Text, View} from 'react-native';
// import {Header, Content, Container, Left, Button, Icon, Right} from 'native-base';
// import Firebase from "../firebase/Firebase";
// export default class CategoryScreen extends Component {
//
//     state = {
//         items : []
//     }
//
//     componentDidMount(){
//         Firebase.database.ref('produits/').on('value', snapshot => {
//             let data = snapshot.val();
//             let items = Object.values(data);
//             this.setState({ items });
//         })
//     }
//
//     render() {
//         return (
//             <Container>
//
//                 <Content contentContainerStyle={styles.container}>
//                     <Text>Category Screen</Text>
//                 </Content>
//             </Container>
//         );
//     }
// }
//
//
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     Brand: {
//         flex: 1,
//         fontSize: 19,
//         fontWeight: 'bold',
//         color:'white'
//     },
//     headerBar: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingLeft: 8,
//         backgroundColor:'red'
//     }
// });
// AppRegistry.registerComponent('CategoryScreen', ()=> CategoryScreen);

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text} from 'react-native';
import {Container, Content} from 'native-base';
import Firebase from '../../firebase/Firebase'
//
// let db= Firebase.database;
// let prodRef = db.ref('produits/');
export default class CategoryScreen extends Component {

    state = {
        items : []
    }

    componentDidMount(){
        Firebase.database.ref('produits/').on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
        })
    }


    render() {
        return (

            <Container>

                <Content contentContainerStyle={styles.container}>
                    <Text>Settings Screen</Text>
                </Content>
            </Container>
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
AppRegistry.registerComponent('CategoryScreen', ()=> CategoryScreen);