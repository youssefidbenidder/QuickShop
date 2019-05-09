import React, {Component} from 'react';
import {AppRegistry, View, Image, StyleSheet, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

export default class Album extends Component{
    render(){
        return(
           <Swiper
               autoplay={true}
           style={{height: 100}}>
               <View style={styles.container}>
                   <Image
                       source={require('../../../images/AlbumImg2.jpg')}
                       style={styles.img} />

               </View>
               <View style={styles.container}>
                   <Image
                       source={require('../../../images/AlbumImg3.jpg')}
                       style={styles.img} />

               </View>
               <View style={styles.container}>
                   <Image
                       source={require('../../../images/AlbumImg4.jpg')}
                       style={styles.img} />

               </View>
           </Swiper>

        )
    }
}
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;
const styles = StyleSheet.create({
    img: {
        flex: 1,
        height: imageHeight,
        width: imageWidth,
        resizeMode: 'cover'
    },
    container: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width: '100%'
    },

})
AppRegistry.registerComponent('Album', ()=> Album);