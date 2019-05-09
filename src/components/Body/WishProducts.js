import React, {Component} from 'react';
import {Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {Button} from "native-base";

const window = Dimensions.get('window');
const itemWidth = (window.width/3)+30;
const itemHeight = window.width/2;

export default class WishProducts extends Component {
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
console.log(this.props);

        return (
            <ScrollView contentContainerStyle={styles.itemsList} horizontal={true} >
                {this.props.items.map((item, index) => {
                    return (
                        <TouchableOpacity key={index}
                              style={styles.itemtext}
                               onPress={() => this.props.navigation.navigate('Category',{catName: item.nom})}
                                          //
                        >

                            <View style={[{flex:1.5},styles.MainContainer]}>
                                <Image
                                    style={styles.img}
                                    resizeMode={'stretch'}
                                    // source={item.imageUrl}
                                    source={{uri: item.imageUrl}}
                                />
                                <Button
                                    style={styles.buttonStyle}>
                                    <Text style={styles.buttonText}>{item.nom}</Text>
                                </Button>

                            </View>

                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        // flexDirection: 'column',

        justifyContent: 'space-around',
       // width: Dimensions.get('window').width,
       // height: Dimensions.get('window').height,
      //  flexDirection: 'row',
       // flexWrap: 'wrap'
    },
    MainContainer:
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5,

            paddingTop: (Platform.OS === 'ios') ? 20 : 0
        },
    img:
        {
            flex:1,
            width: 140,
            height: 160,
        },
    buttonText:
        {
            color:'white',
            fontSize:12
        },
    buttonStyle:
        {
            flex:1,
            alignContent: 'center',
            justifyContent: 'center',
            bottom:20,
            height:30,
            position: 'absolute',
            backgroundColor:'red',
            padding:10
        },

    itemtext: {
        alignItems: 'center',
        marginTop: 10,

    },

    main_container: {
        flex:1,
        height: 200,
    },

    image: {
        flex:1,
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