import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text} from 'react-native';
import {Container, Content} from 'native-base';

export default class SettingsScreen extends Component {
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
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Brand: {
        flex: 1,
        fontSize: 19,
        fontWeight: 'bold',
        color:'white'
    },
    headerBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
        backgroundColor:'red'
    }
});
AppRegistry.registerComponent('SettingsScreen', ()=> SettingsScreen);