// // import React from 'react'
// // import {View,Image,Text,StyleSheet,ScrollView,TouchableOpacity} from "react-native";
// // import {Button} from 'native-base';
// // import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// // import { connect } from 'react-redux'
// //
// // class CartProduct extends React.Component{
// // constructor(props)
// // {
// //     super(props);
// //     this.total=0;
// // }
// //
// //  calculateTotal=() => {
// //     this.total= this.props.product.price * this.props.counter;
// // }
// //
// //
// //     render()
// //     {
// //         const prod = this.props.product;
// //         this.calculateTotal();
// //        // this.props.triggerParentUpdate(this.total);
// //         return (
// //             <TouchableOpacity
// //                 style={styles.main_container}
// //             >
// //                 <Image
// //                     style={styles.image}
// //                     resizeMode={'stretch'}
// //                      source={prod.image}
// //                     // source={{uri: /*prod.image*/ 'assets:/prod4.jpg'}}
// //                 />
// //                 <View style={{flex:2}}>
// //                     <View style={{flex:1}}>
// //                         <Text style={[styles.textStyle,{fontSize: 17}]}>{prod.name}</Text>
// //                         <Text style={[styles.textStyle,{fontSize: 13}]}> Price: ${prod.price}</Text>
// //                         <Text style={[styles.textStyle,{fontSize: 13}]}>Total: ${this.total}</Text>
// //                     </View>
// //                     <View style={{flex:1,flexDirection:'row'}}>
// //                         <Icon name={'delete'} size={25} style={{color: 'gray'}}/>
// //                         <View style={{width: 100,flexDirection:'row', alignItems:'flex-end', justifyContent:'space-around',height:25, marginLeft:80}}>
// //                             <Button
// //                                 onPress={() => this.props.increaseCounter()}
// //                                 style={styles.buttonStyle}>
// //                                 <Icon name={'plus'} size={20} style={{color: 'red'}}/>
// //                             </Button>
// //                             <Text style={{Color: 'gray',fontSize:17}}>{this.props.counter}</Text>
// //                             <Button
// //                                onPress={() => this.props.decreaseCounter()}
// //                                 style={styles.buttonStyle}>
// //                                 <Icon name={'minus'} size={20} style={{color: 'red', }}/>
// //                             </Button>
// //                         </View>
// //                     </View>
// //                 </View>
// //             </TouchableOpacity>
// //         )
// //     }
// // }
// //
// // const styles = StyleSheet.create({
// //     main_container: {
// //         flex:1,
// //         height: 200,
// //         width: 400,
// //         flexDirection: 'row',
// //     },
// //     buttonStyle: {
// //         backgroundColor:'white',
// //         borderColor:'gray',
// //         height:30,
// //         width:30,
// //         alignItems:'center',
// //         justifyContent:'center'
// //     },
// //     image: {
// //         flex:1,
// //        // width: 133,
// //        // height: 250,
// //         margin: 5,
// //        //resizeMode:'contain',
// //         backgroundColor: 'gray'
// //     },
// //    textStyle: {
// //        color: 'black',
// //        paddingTop: 8,
// //        fontFamily:'Montserrat-Regular'
// //     },
// //
// // })
// // function mapStateToProps(state) {
// //     return {
// //         counter: state.counter,
// //     }
// // }
// //
// // function mapDispatchToProps(dispatch) {
// //     return {
// //         increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
// //         decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
// //     }
// // }
// // export default connect(mapStateToProps, mapDispatchToProps)(CartProduct)
//
// import React, {Component} from 'react';
// import {AppRegistry, StyleSheet, Text, View,ScrollView, ActivityIndicator} from 'react-native';
// import {Header, Content, Container, Left, Button, Icon, Right} from 'native-base';
// import products from "../../helpers/productData";
// import CartProduct from '../components/Body/CartProduct';
// import Firebase from '../firebase/Firebase'
// import * as firebase from "firebase";
// import WishComponent from './WishComponent'
// //
// // let db= Firebase.database;
// // let prodRef = db.ref('produits/');
// export default class CartScreen extends Component {
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
//
//     render() {
//         return (
//             <View
//                 contentContainerStyle={styles.container}>
//                 {this.state.items.length > 0 ? (
//                     <ScrollView>
//                         <WishComponent items={this.state.items} />
//                     </ScrollView>
//                 ) : (
//                     <View style={styles.loading_container}>
//                         <ActivityIndicator size='large' />
//                     </View>
//                 )}
//             </View>
//         );
//     }
// }
//
//
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         backgroundColor: '#ebebeb'
//     },
//
//     /*container:{
//         flex:1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },*/
//     Brand: {
//         flex: 1,
//         fontSize: 19,
//         fontWeight: 'bold',
//         color: 'white'
//     },
//     headerBar: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingLeft: 8,
//         backgroundColor:'red'
//     },
//     loading_container: {
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 100,
//         bottom: 0,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
//
// });
// AppRegistry.registerComponent('CartScreen', ()=> CartScreen);

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Button} from 'native-base';

export default class CartProduct extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    constructor(props)
    {
        super(props);
        this.total=0;
        this.state={
            compteur:[],
            total:0
    }
    };

    initialiserCompteur(){
        var items;
        const cpt = [...this.state.compteur]
        items = this.props.items.map((item,index) => {
        cpt.push(1);

    })
        this.setState({ compteur: cpt })
    }
    increaseCounter=(id) => {
        const some_array = [...this.state.compteur];
        some_array[id] = this.state.compteur[id] + 1;
        this.setState({compteur:some_array})
    }
    decreaseCounter=(id) => {
        const some_array = [...this.state.compteur];
        some_array[id] = this.state.compteur[id] - 1;
        this.setState({compteur:some_array})
    }

    componentDidMount(){
        this.initialiserCompteur();
    }

    printId(){
        let cpt=[];
        let items;
        items = this.props.items.map((item,index) => {
            cpt.push(item.id);

        })
        console.log(cpt);
    }
    calculeTotal(){
        var items;
        var tmp=0;
        items = this.props.items.map((item,index) => {
           tmp += item.prix * this.state.compteur[index];

        })
        this.setState({total: tmp})
    }


    render() {
        this.printId();
        return (
            <View style={styles.itemsList}>
                {this.props.items.map((item, index) => {

                    return (
                        <View key={index}
                              style={{flex:1, flexDirection:'row'}}
                        >


                            <Image
                                style={styles.image}
                                resizeMode={'stretch'}
                                // source={item.imageUrl}
                                source={{uri: item.imageUrl}}
                            />
                            <TouchableOpacity
                                style={{flex:2}}
                            >
                                <View style={{flex:1}}>
                                    <Text style={[styles.textStyle,{fontSize: 20}]}>{item.designation}</Text>
                                    <Text style={[styles.textStyle,{fontSize: 17,}]}> Price: ${item.prix}</Text>
                                    <Text style={[styles.textStyle,{fontSize: 13,}]}>Total: ${item.prix * this.state.compteur[index]}</Text>
                                </View>

                                <View style={{flex:1,flexDirection:'row', margin: 10,paddingTop: 20}}>
                                    <Icon name={'delete'} size={25} style={{color: 'gray'}}/>
                                    <View style={{width: 100,flexDirection:'row', alignItems:'flex-end', justifyContent:'space-around',height:25, marginLeft:80}}>
                                        <Button
                                             onPress={() => this.increaseCounter(index)}
                                            style={styles.buttonStyle}>
                                            <Icon name={'plus'} size={20} style={{color: 'red'}}/>
                                        </Button>
                                        <Text style={{Color: 'gray',fontSize:17}}>{this.state.compteur[index]}</Text>
                                        <Button
                                            onPress={() => this.decreaseCounter(index)}
                                            style={styles.buttonStyle}>
                                            <Icon name={'minus'} size={20} style={{color: 'red', }}/>
                                        </Button>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    itemtext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    main_container: {
        flex:1,
        height: 200,
        width: 400,
        flexDirection: 'row',
    },
    buttonStyle: {
        backgroundColor:'white',
        borderColor:'gray',
        height:30,
        width:30,
        alignItems:'center',
        justifyContent:'center'
    },
    image: {
        flex:1,
        // width: 133,
        // height: 250,
        margin: 5,
        //resizeMode:'contain',
        backgroundColor: 'black'
    },
    textStyle: {
        color: 'black',
        paddingTop: 8,
        fontFamily:'Montserrat-Regular'
    },

})