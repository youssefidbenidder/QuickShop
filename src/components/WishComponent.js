import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import StarRating from "react-native-star-rating";

export default class WishComponent extends Component {
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
    render() {

        return (
            <View style={styles.itemsList}>
                {this.props.items.map((item, index) => {
                    this.total= item.price * this.state.counter;
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
                                    <Text style={[styles.textStyle,{fontSize: 17}]}> Price: ${item.prix}</Text>
                                    {/*<Text style={[styles.textStyle,{fontSize: 13}]}>Total: ${this.total}</Text>*/}
                                </View>
                                <View style={{width:100,padding:8}}>
                                    <StarRating
                                        disabled={true}
                                        maxStars={5}
                                        rating={item.rating}
                                        starSize={16}
                                        fullStarColor='orange'
                                        emptyStarColor='gray'


                                    />
                                </View>
                                <View style={{flex:1,flexDirection:'row'}}>
                                    <Icon name={'delete'} size={25} style={{color: 'gray'}}/>
                                    {/*<View style={{width: 100,flexDirection:'row', alignItems:'flex-end', justifyContent:'space-around',height:25, marginLeft:80}}>*/}
                                    {/*    <Button*/}
                                    {/*        // onPress={() => this.props.increaseCounter()}*/}
                                    {/*        style={styles.buttonStyle}>*/}
                                    {/*        <Icon name={'plus'} size={20} style={{color: 'red'}}/>*/}
                                    {/*    </Button>*/}
                                    {/*    <Text style={{Color: 'gray',fontSize:17}}>{this.state.counter}</Text>*/}
                                    {/*    <Button*/}
                                    {/*       // onPress={() => this.props.decreaseCounter()}*/}
                                    {/*        style={styles.buttonStyle}>*/}
                                    {/*        <Icon name={'minus'} size={20} style={{color: 'red', }}/>*/}
                                    {/*    </Button>*/}
                                    {/*</View>*/}
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