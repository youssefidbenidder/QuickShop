import React, {Component} from 'react';

import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Button} from "native-base";


export default class Categorie extends Component {
    render() {
        const {navigate} = this.props.navigation;
        console.log(navigate);
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollCateg}>

                <TouchableOpacity
                    onPress={() => navigate('Cart')}
                    style={styles.MainContainer}>
                    <Image source={require("../../../images/accessoiresCateg.jpg")}
                           style={styles.img}/>
                    <Button
                        onPress={() => navigate('Cart')}
                        style={styles.buttonStyle}>
                           <Text style={styles.buttonText}>ACCESSORY</Text>
                    </Button>
                </TouchableOpacity>

                <TouchableOpacity style={styles.MainContainer}>
                    <Image source={require("../../../images/auto&motoCateg.jpg")}
                           style={styles.img}/>
                    <Button
                        onPress={() => navigate('Cart')}
                        style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>AUTO & MOTO</Text>
                    </Button>
                </TouchableOpacity>

                <TouchableOpacity style={styles.MainContainer}>
                    <Image source={require("../../../images/beauty&ParfumCateg.jpg")}
                           style={styles.img}/>
                    <Button
                        onPress={() => navigate('Cart')}
                        style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>BEAUTY</Text>
                    </Button>
                </TouchableOpacity>

                <TouchableOpacity style={styles.MainContainer}>
                    <Image source={require("../../../images/bricolageCateg.jpg")}
                           style={styles.img}/>
                    <Button
                        onPress={() => navigate('Cart')}
                        style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>TOOLS</Text>
                    </Button>
                </TouchableOpacity>

                <TouchableOpacity style={styles.MainContainer}>
                    <Image source={require("../../../images/bébé&momCateg.jpg")}
                           style={styles.img}/>
                    <Button
                        onPress={() => navigate('Cart')}
                        style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>MOTHERS & KIDS</Text>
                    </Button>
                </TouchableOpacity>

                <TouchableOpacity style={styles.MainContainer}>
                    <Image source={require("../../../images/clothesShosesCateg.jpg")}
                           style={styles.img}/>
                    <Button
                        onPress={() => navigate('Cart')}
                        style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>CLOTHES & SHOES</Text>
                    </Button>
                </TouchableOpacity>

                <TouchableOpacity style={styles.MainContainer}>
                    <Image source={require("../../../images/high-techCateg.jpg")}
                           style={styles.img}/>
                    <Button
                        onPress={() => navigate('Cart')}
                        style={styles.buttonStyle}>
                    <Text style={styles.buttonText}> HIGHTECH</Text>
                    </Button>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.MainContainer}>
                    <Image source={require("../../../images/lum&eclairageCateg.jpg")}
                           style={styles.img}/>
                    <Button
                        onPress={() => navigate('Cart')}
                        style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>LIGHTING</Text>
                    </Button>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create(
    {
        MainContainer:
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5,

                paddingTop: (Platform.OS === 'ios') ? 20 : 0
            },
        scrollCateg:
            {
                flex: 1,

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
                }

    });
