import React, {Component} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Container, Content, Header, Icon, Input, Item} from 'native-base';
import Album from '../../components/Body/Album'
import {connect} from 'react-redux'
import ProdHomeComponent from "../../components/ProdHomeComponent";
import Firebase from "../../firebase/Firebase";
import WishProducts from "../../components/Body/WishProducts";


export class HomeScreen extends Component {
    static navigationOptions = {
        // headerTitle instead of title
        title: 'Home',
        headerTitle: <Icon
            style={{ paddingLeft: 10 }}
            name="md-menu"
            size={30}
        />,
    };
    state = {
        items : [],
        categories: []
    }

    componentDidMount(){

        Firebase.database.ref('produits/').on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items:items });
        }),
            Firebase.database.ref('categories/').on('value', snapshot => {
                let data = snapshot.val();
                let categories = Object.values(data);
                this.setState({ categories:categories });
            })
    }

    render() {
        console.log(this.props)
        return (

            <Container>
                <Header>
                    <View style={{flex:1,position:'absolute', left:0, right:0,height:70,
                        backgroundColor: 'red',paddingHorizontal:5,borderWidth: 0}}>


                        <View style={{flex:1,height:"100%",marginLeft:5, justifyContent:'center'}}>
                            <Item style={{backgroundColor:'white', paddingHorizontal:10,
                                borderRadius: 15}}>
                                <Icon name="search" style={{fontSize:20,paddingTop:5}}/>
                                <Input placeholder="Search" />
                            </Item>
                        </View>


                    </View>

                </Header>
                <Content>

                    <ScrollView style={{marginTop:20}}>

                    <View style={styles.container}>
                       <Album style ={styles.album}/>
                    </View>

                        <View style={{backgroundColor: '#ebebeb', height:60, paddingLeft: 8,
                            paddingTop:15}}>
                            <Text style={{color: 'red', fontSize:19, fontFamily:'Montserrat-Regular'}}>
                                Categories</Text>
                        </View>

                    {/*<Categorie navigation={this.props.navigation}/>*/}

                        <ScrollView
                            contentContainerStyle={styles.catcontainer}>
                            {this.state.items.length > 0 ? (
                                <ScrollView horizontal={true}
                                            showsHorizontalScrollIndicator={false}>
                                    <WishProducts items={this.state.categories} navigation={this.props.navigation} />
                                </ScrollView>
                            ) : (
                                <View style={styles.loading_container}>
                                    <ActivityIndicator size='large' />
                                </View>
                            )}
                        </ScrollView>

                    <View style={{backgroundColor: '#ebebeb', height:60, paddingLeft: 8,
                        paddingTop:15}}>
                        <Text style={{color: 'red', fontSize:19, fontFamily:'Montserrat-Regular'}}>
                            Featured Products</Text>
                    </View>

                        <View
                            style={styles.prodcontainer}>
                            {this.state.items.length > 0 ? (
                                <ScrollView>
                                    <ProdHomeComponent items={this.state.items}
                                                       favoritesProduct={this.props.favoritesProduct}
                                                       panierProduct={this.props.panierProduct}
                                                       dispatch={this.props.dispatch}

                                    />
                                </ScrollView>
                            ) : (
                                <View style={styles.loading_container}>
                                    <ActivityIndicator size='large' />
                                </View>
                            )}
                        </View>

                </ScrollView>

                </Content>

            </Container>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        borderRadius: 4,
        borderWidth: 0,
        height: 150,


    },
    prodcontainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    catcontainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ebebeb',
        // flexDirection: 'row',
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    album: {
        flex:1,
      height:'100%',
      width:'100%',
        position:'absolute',

    },
    Brand: {
        flex: 1,
        fontSize: 19,
        fontWeight: 'bold',
        color:'white',
       // marginRight: 100
    },
    headerBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
        backgroundColor:'red',
        borderWidth: 0
       // marginRight: 50
    }
});

const mapStateToProps = state => {
    return {
        favoritesProduct: state.toggleFavorite.favoritesProduct,
        panierProduct: state.addToCart.panierProduct

    }
}
// const mapStateToProps = (state) => {
//     return state
// }

export default connect(mapStateToProps)(HomeScreen)
