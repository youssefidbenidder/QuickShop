import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';
import StarRating from "react-native-star-rating";
import Firebase from "../firebase/Firebase";

const window = Dimensions.get('window');
const itemWidth = (window.width/3)+30;
const itemHeight = window.width/2;

export default class ProdHomeComponent extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };
    constructor(props)
    {
        super(props);
        this.total=0;
        this.state={
            counter:1,
        }
    }
    _displayFavoriteImage(element) {
        var colorIcon="gray"
        var iconName="hearto"
        if (this.props.favoritesProduct.findIndex(item => item.id === element.id) !== -1) {
            // Film dans nos favoris
            iconName="heart";
            colorIcon="red"
        }
        return (
            <Icon name={iconName} size={25} color={colorIcon} />

        )
    }
    _toggleFavorite(item) {

        const action = { type: "TOGGLE_FAVORITE", value: item}
        this.props.dispatch(action)
    }

    _addToCart(item){
        const action = { type: "ADD_TO_CART", value: item}
        this.props.dispatch(action)

    }
    componentDidUpdate() {
        console.log("componentDidUpdate : ")
        console.log(this.props.favoritesProduct)

         //Firebase.database.ref('users/' + Firebase.auth.currentUser.uid).update({wishList : this.props.favoritesProduct});
         //Firebase.database.ref('users/' + Firebase.auth.currentUser.uid).update({cartList : this.props.panierProduct});


    }
    render() {

        console.log(this.props);
        return (
            <View style={styles.itemsList}>
                {this.props.items.map((item, index) => {
                    // this.total= item.price * this.state.counter;

                    return (
                        <View key={index}
                              style={styles.itemtext}
                        >

                            <View style={{flex: 1.5}}>
                                <Image
                                    style={styles.image}
                                    resizeMode={'stretch'}
                                    // source={item.imageUrl}
                                    source={{uri: item.imageUrl}}
                                />
                                <TouchableOpacity style={{color: 'gray', position: 'absolute', top: 10, right: 10}}
                                                  onPress={() => this._toggleFavorite(item)}
                                >
                                    {/* {(this.props.favoritesProduct.findIndex(item => item.id === item.id) !== -1) ? (*/}

                                    {/*             <Icon name={"heart"} size={25} style={{color: 'gray', position: 'absolute', top: 10, right: 10 }}/>*/}
                                    {/*):*/}
                                    {/*     (*/}
                                    {/*             <Icon name={"hearto"} size={25} style={{color: 'gray', position: 'absolute', top: 10, right: 10 }}/>*/}
                                    {/*     )}*/}
                                    {this._displayFavoriteImage(item)}
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                            >
                                <View style={{flex: 1}}>
                                    <Text style={[styles.textStyle, {fontSize: 14}]}>{item.designation}</Text>

                                    {/*<Text style={[styles.textStyle,{fontSize: 13}]}>Total: ${this.total}</Text>*/}
                                </View>
                                <View style={{width: 100, paddingTop: 8}}>
                                    <StarRating
                                        disabled={true}
                                        maxStars={5}
                                        rating={item.rating}
                                        starSize={16}
                                        fullStarColor='orange'
                                        emptyStarColor='gray'


                                    />
                                </View>
                                <Text
                                    style={[styles.textStyle, {fontSize: 17, fontWeight: 'bold'}]}> ${item.prix}</Text>
                                <TouchableOpacity onPress={() => this._addToCart(item)}>
                                <Text style={{
                                    color: 'red',
                                    paddingTop: 8,
                                    marginBottom: 8,
                                    fontFamily: 'Montserrat-Regular'
                                }}>ADD</Text>
                                </TouchableOpacity>
                                {/*<View style={{flex:1,flexDirection:'row'}}>*/}
                                {/*    <Icon name={'delete'} size={25} style={{color: 'gray'}}/>*/}
                                {/*    /!*<View style={{width: 100,flexDirection:'row', alignItems:'flex-end', justifyContent:'space-around',height:25, marginLeft:80}}>*!/*/}
                                {/*    /!*    <Button*!/*/}
                                {/*    /!*        // onPress={() => this.props.increaseCounter()}*!/*/}
                                {/*    /!*        style={styles.buttonStyle}>*!/*/}
                                {/*    /!*        <Icon name={'plus'} size={20} style={{color: 'red'}}/>*!/*/}
                                {/*    /!*    </Button>*!/*/}
                                {/*    /!*    <Text style={{Color: 'gray',fontSize:17}}>{this.state.counter}</Text>*!/*/}
                                {/*    /!*    <Button*!/*/}
                                {/*    /!*       // onPress={() => this.props.decreaseCounter()}*!/*/}
                                {/*    /!*        style={styles.buttonStyle}>*!/*/}
                                {/*    /!*        <Icon name={'minus'} size={20} style={{color: 'red', }}/>*!/*/}
                                {/*    /!*    </Button>*!/*/}
                                {/*    /!*</View>*!/*/}
                                {/*</View>*/}
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
       // flexDirection: 'column',
        justifyContent: 'space-around',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    itemtext: {
        width: window.width/2,
        alignItems: 'center',
        height: (itemHeight*3)/2,
        marginTop: 10
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
        backgroundColor: 'black',
        width: itemWidth,
       // height: imageHeight
    },
    textStyle: {
        color: 'black',
        paddingTop: 8,
        fontFamily:'Montserrat-Regular',
        flexWrap: 'wrap'
    },
})