import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import StarRating from "react-native-star-rating";

export default class CategorieItems extends Component {
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

                    return (

                        <View key={index}
                              style={{flex:1, flexDirection:'row'}}
                        >
                            {this.props.catName === item.nom ? (
                                <View>
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

                                </View>
                            </TouchableOpacity>
                                </View>
                                ):(
                                <View>
                                    <Text style={{justifyContent:'center', alignItems: 'center'}}>aucun produit correspond à la categorie séléctionner </Text>
                                </View>
                            )}
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